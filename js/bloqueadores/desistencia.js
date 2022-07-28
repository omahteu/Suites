import { minuto_para_segundo } from "../conversores/minutos_milisegundos.js"

$(document).ready(function(){
    $.get("https://demomotelapi.herokuapp.com/tempos/", function(e){
        let tempo_troca = parseInt(e[0].desistencia)
        var milisegundos_troca = minuto_para_segundo(tempo_troca)
        setTimeout( () => {tempo_para_desistencia()}, milisegundos_troca)
    })
})

function tempo_para_desistencia(){
    $("#aba_desistencia").css('display', 'none')
}
