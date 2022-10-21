import { locado } from "../tags/locacao.js"
import { modos } from "../setup/box.js"
import { index } from "../tags/particao.js"
import { fimModal } from "../setup/camareiras.js"
import { iniciar } from "../contadores/cronometros/c1.js"
import { iniciar2 } from "../contadores/cronometros/c2.js"
import { ligar_luz } from "../automacao/ligar.js"
import { registraLimiteTroca } from "../../qwertyu.js"

$(".locado").click(function() {
    var suite = $('#quarto_painel').text()
    var rota = $(this).attr('class')
    if(confirm(`DESEJA INICIAR O QUARTO ${suite}?`) == true){
        if(suite == "1"){
            var flags = modos.slice(0, 3)
            locado(suite, rota,  flags[0], flags[1], flags[2])
/*
            setTimeout( () => {
                ligar_luz(suite)
                localStorage.setItem("luz", "ligada")
            }, 500)
*/
            iniciar(suite, "0", "0", "0")
            registraLimiteTroca(suite, "a", "troca")
            setTimeout( () => {fimModal()}, 100)
            setTimeout( () => {index()}, 200)
        } else if(suite == "2"){
            var flags = modos.slice(3, 6)
            locado(suite, rota, flags[0], flags[1], flags[2])
            iniciar2(suite)
            setTimeout( () => {fimModal()}, 100)  
            setTimeout( () => {index()}, 200)
        } else if(suite == "3"){
            var flags = modos.slice(6, 9)
            locado(suite, rota,  flags[0], flags[1], flags[2])
            setTimeout( () => {fimModal()}, 1000)
            //setTimeout( () => {index()}, 2000)
        } else if(suite == "4"){
            var flags = modos.slice(9, 12)
            locado(suite, rota,  flags[0], flags[1], flags[2])
            setTimeout( () => {fimModal()}, 1000)
            //setTimeout( () => {index()}, 2000)
        }
    } else {
        console.log('Troca de Suíte')
    }
})
