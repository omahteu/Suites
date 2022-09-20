import { locado } from "../tags/locacao.js"
import { modos } from "../setup/box.js"
import { index } from "../tags/particao.js"
import { fimModal } from "../setup/camareiras.js"
import { crnmtra1 } from "../contadores/cronometros/c1.js"
import { crnmtra2 } from "../contadores/cronometros/c2.js"
import { ligar_luz } from "../automacao/ligar.js"

$(".locado").click(function() {
    var quarto = $('#quarto_painel').text()
    var rota = $(this).attr('class')
    if(confirm(`DESEJA INICIAR O QUARTO ${quarto}?`) == true){
        if(quarto == "1"){
            var flags = modos.slice(0, 3)
            locado(quarto, rota,  flags[0], flags[1], flags[2])
/*
            setTimeout( () => {
                ligar_luz(quarto)
                localStorage.setItem("luz", "ligada")
            }, 500)
*/
            crnmtra1(quarto)
            setTimeout( () => {fimModal()}, 100)
            setTimeout( () => {index()}, 200)
        } else if(quarto == "2"){
            var flags = modos.slice(3, 6)
            locado(quarto, rota, flags[0], flags[1], flags[2])
            setTimeout( () => {fimModal()}, 1000)
            crnmtra2(quarto)
            //setTimeout( () => {index()}, 1500)
        } else if(quarto == "3"){
            var flags = modos.slice(6, 9)
            locado(quarto, rota,  flags[0], flags[1], flags[2])
            setTimeout( () => {fimModal()}, 1000)
            //setTimeout( () => {index()}, 2000)
        } else if(quarto == "4"){
            var flags = modos.slice(9, 12)
            locado(quarto, rota,  flags[0], flags[1], flags[2])
            setTimeout( () => {fimModal()}, 1000)
            //setTimeout( () => {index()}, 2000)
        }
    } else {
        console.log('Troca de Suíte')
    }
})
