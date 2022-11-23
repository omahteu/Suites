import { minuto_para_segundo } from "../conversores/minutos_milisegundos.js"
import { link } from "../setup/index.js"

$(".locado").click(function() {
    let suite = $(this).attr("name")
    trava(suite)
    $.get(link[19], e => {
        let tempo_troca = parseInt(e[0].troca)
        var millisegundos_troca = minuto_para_segundo(tempo_troca)
        setTimeout( () => {
            tempo_para_troca()
        }, millisegundos_troca)
    }) 
})

function tempo_para_troca(){
    $(".acoes1").css('display', 'none')
    $(".acoes1").val('Encerrar')
    $(".acoes2").css('visibility', 'visible')
    $(".acoes2").val('Encerrar')
}

function trava(suite) {
    let ficha = {
        suite: suite,
        modo: "travado",
        tipo: "",
        horario: ""
    }
    $.post(link[34], ficha, () => {})
}
$(document).ready(function(){
    let ficha = {
        suite: 'suite',
        valor: "travado",
        tipo: "",
    }
    $.post(link[36], ficha, () => {})
})