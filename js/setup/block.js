import { minuto_para_segundo } from "../conversores/minutos_milisegundos.js"

$(".locado").click(function() {
    $.get("https://demomotelapi.herokuapp.com/tempos/", function(e){
        let tempo_troca = parseInt(e[0].troca)
        var millisegundos_troca = minuto_para_segundo(tempo_troca)
        setTimeout( () => {tempo_para_troca()}, millisegundos_troca)
    })
})

function tempo_para_troca(){
    $(".acoes1").css('display', 'none')
    $(".acoes1").val('Encerrar')
    $(".acoes2").css('visibility', 'visible')
    $(".acoes2").val('Encerrar')
}
