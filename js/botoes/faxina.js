import { faxina } from "../tags/faxina.js"
import { modos } from "../setup/box.js"
import { index } from "../tags/particao.js"
import { fimModal } from "../setup/camareiras.js"
import { crnmtra1 } from "../contadores/cronometros/c1.js"
import { crnmtra2 } from "../contadores/cronometros/c2.js"

$(".faxina").click(function() {
    var quarto = $('#quarto_painel').text()
    var rota = $(this).attr('class')

    if(confirm(`DESEJA INICIAR A FAXINA NO QUARTO ${quarto}`) == true){
        if(quarto == "1"){
            var flags = modos.slice(0, 3)
            faxina(quarto, rota, flags[0], flags[1], flags[2])
            setTimeout( () => {fimModal()}, 1001)
            crnmtra1(quarto)
            setTimeout( () => {index()}, 2000)
        } else if(quarto == "2"){
            var flags = modos.slice(3, 6)
            faxina(quarto, rota, flags[0], flags[1], flags[2])
            setTimeout( () => {fimModal()}, 1001)
            crnmtra2(quarto)
            setTimeout( () => {index()}, 2000)
        } else if(quarto == "3"){
            var flags = modos.slice(6, 9)
            faxina(quarto, rota, flags[0], flags[1], flags[2])
            setTimeout( () => {fimModal()}, 1001)
            //iniciar(quarto)
            setTimeout( () => {index()}, 2000)
        } else if(quarto == "4"){
            var flags = modos.slice(9, 12)
            faxina(quarto, rota, flags[0], flags[1], flags[2])
            setTimeout( () => {fimModal()}, 1001)
            //iniciar(quarto)
            setTimeout( () => {index()}, 2000)
        }
    }
})
