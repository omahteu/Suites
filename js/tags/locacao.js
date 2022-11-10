import { hora_atual } from "../geradores/hora.js"
import { valoresIniciais } from "../quartos/calculos/inicial.js"

export function locado(q, x, y, z) {
    $(`.cardBox .card:nth-child(${q})`).css({
        "background": "#FF0000"
    })
    $(`[name=${q}]`).css('display', 'none')
    $(".acoes1").css('display', 'inline-block')
    $(".acoes1").val('Trocar Suíte')
    $(".acoes2").css('display', 'inline-block')
    $(".acoes2").val('Encerrar')
    valoresIniciais(q)
    var hora = hora_atual()
    $("#tipo").text('locado')
    $("#quarto_painel").text(q)
    $("#intervalo").text(`${x},${y},${z}`)
    $("#entrada").text(hora)
}
