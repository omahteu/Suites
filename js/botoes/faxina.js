import { faxina } from "../tags/faxina.js"
import { index } from "../tags/particao.js"
import { fimModal } from "../setup/camareiras.js"
import { iniciar } from "../contadores/cronometros/c1.js"
import { iniciar2 } from "../contadores/cronometros/c2.js"
import { ligar_luz } from "../automacao/ligar.js"
import { registraLimite } from "../../qwertyu.js"
import { tick } from "../setup/box.js"

$(document).on("click", ".faxina", function(){
    const suite =   $('#quarto_painel').text()
    const rota =    $(this).attr('class')
    if (confirm(`Iniciar Faxina na Suíte ${suite}?`) == true){
        let t = tick[`${suite}`]
        setTimeout ( () => {faxina(suite, rota, t[0], t[1], t[2])       }, 1)
        setTimeout ( () => {ligar_luz(suite)
                    localStorage.setItem("luz", "ligada")               }, 100)
        setTimeout ( () => {registraLimite(suite, "a", "faxina")        }, 200)
        setTimeout ( () => {fimModal()                                  }, 300)
        setTimeout ( () => {index()                                     }, 400)
        setTimeout ( () => {
            suite == "1" ? iniciar(suite) : 
            suite == "2" ? iniciar2(suite) : ""
                                                                        }, 500)
    }
})
