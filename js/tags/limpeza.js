import { hora_atual } from "../geradores/hora.js"

export function limpeza(q, x, y, z) {
    $(`.cardBox .card:nth-child(${q})`).css({
        "background": "#FFFF00"
    })
    $("[name=1]").css('display', 'none')
    $(".acoes1").css('display', 'inline-block')
    $(".acoes1").val('Encerrar Limpeza')
    var hora = hora_atual()
    $("#quarto_painel").text(q)
    $("#tipo").text('limpeza')
    $("#intervalo").text(`${x},${y},${z}`)
    $("#entrada").text(hora)
}
