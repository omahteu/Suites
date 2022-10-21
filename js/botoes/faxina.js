import { faxina } from "../tags/faxina.js"
import { modos } from "../setup/box.js"
import { index } from "../tags/particao.js"
import { fimModal } from "../setup/camareiras.js"
import { iniciar } from "../contadores/cronometros/c1.js"
import { iniciar2 } from "../contadores/cronometros/c2.js"
import { ligar_luz } from "../automacao/ligar.js"
import { registraLimite } from "../../qwertyu.js"

$(".faxina").click(function() {
    var suite = $('#quarto_painel').text()
    var rota = $(this).attr('class')

    if(confirm(`DESEJA INICIAR A FAXINA NO QUARTO ${suite}`) == true){
        if(suite == "1"){
            var flags = modos.slice(0, 3)
            faxina(suite, rota, flags[0], flags[1], flags[2])
            setTimeout( () => {
                ligar_luz(suite)
                localStorage.setItem("luz", "ligada")
            }, 500)
            setTimeout( () => {fimModal()}, 200)
            iniciar(suite, "0", "0", "0")
            registraLimite(suite, "a", "faxina")
            setTimeout( () => {index()}, 500)
        } else if(suite == "2"){
            var flags = modos.slice(3, 6)
            faxina(suite, rota, flags[0], flags[1], flags[2])
            setTimeout( () => {fimModal()}, 1001)
            iniciar2(suite)
            //setTimeout( () => {index()}, 2000)
        } else if(suite == "3"){
            var flags = modos.slice(6, 9)
            faxina(suite, rota, flags[0], flags[1], flags[2])
            setTimeout( () => {fimModal()}, 1001)
            //iniciar(suite)
            //setTimeout( () => {index()}, 2000)
        } else if(suite == "4"){
            var flags = modos.slice(9, 12)
            faxina(suite, rota, flags[0], flags[1], flags[2])
            setTimeout( () => {fimModal()}, 1001)
            //iniciar(suite)
            //setTimeout( () => {index()}, 2000)
        }
    }
})
