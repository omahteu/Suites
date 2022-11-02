import { locado }               from "../tags/locacao.js"
import { index }                from "../tags/particao.js"
import { fimModal }             from "../setup/camareiras.js"
import { iniciar }              from "../contadores/cronometros/c1.js"
import { iniciar2 }             from "../contadores/cronometros/c2.js"
import { registraLimiteTroca }  from "../../qwertyu.js"
import { tick }                 from "../setup/box.js"

$(document).on("click", ".locado", function(){
    const suite = $('#quarto_painel').text()
    if (confirm(`Iniciar a Suíte ${suite}?`) == true){
        let t = tick[`${suite}`]
        setTimeout ( () => {locado(suite, "", t[0], t[1], t[2])     }, 1)
        /*setTimeout ( () => {ligar_luz(suite)
                        localStorage.setItem("luz", "ligada")       }, 100)*/
        setTimeout ( () => {registraLimiteTroca(suite, "a", "troca")}, 200)
        setTimeout ( () => {fimModal()                              }, 300)
        setTimeout ( () => {index()                                 }, 400)
        setTimeout ( () => {
            suite == "1" ? iniciar(suite) : 
            suite == "2" ? iniciar2(suite) : ""
                                                                    }, 500)
    }
})
