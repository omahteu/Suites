import { manutencao } from "../tags/manutencao.js"
import { modos } from "../setup/box.js"
import { index } from "../tags/particao.js"
import { fimModal } from "../setup/camareiras.js"
import { iniciar } from "../contadores/cronometros/c1.js"
import { iniciar2 } from "../contadores/cronometros/c2.js"

$(".manutencao").click(function() {
    var suite = $('#quarto_painel').text()
    var obs = prompt('INFORME O MOTIVO DA MANUTENÇÃO!')
    localStorage.setItem("motivo", obs)
    if(obs != null){
        if(suite == "1"){
            var flags = modos.slice(0, 3)
            manutencao(suite, flags[0], flags[1], flags[2])
            setTimeout( () => {fimModal()}, 200)
            iniciar(suite, "0", "0", "0")
            setTimeout( () => {index()}, 500);
        } else if(suite == "2"){
            var flags = modos.slice(3, 6)
            manutencao(suite, flags[0], flags[1], flags[2])
            setTimeout( () => {fimModal()}, 1000)
            iniciar2(suite)
            //setTimeout( () => {index()}, 2000);
        } else if(suite == "3"){
            var flags = modos.slice(6, 9)
            manutencao(suite, flags[0], flags[1], flags[2])
            setTimeout( () => {fimModal()}, 1001)
            //iniciar(suite)
            //setTimeout( () => {index()}, 2000);
        } else if(suite == "4"){
            var flags = modos.slice(9, 12)
            manutencao(suite, flags[0], flags[1], flags[2])
            setTimeout( () => {fimModal()}, 1001)
            //iniciar(suite)
            //setTimeout( () =>  {index()}, 2000);
        }
    } else {
        console.log('barrigad')
    }
})
