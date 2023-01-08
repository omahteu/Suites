import { hora_atual } from "../geradores/hora.js"

export default function aguardando(q, x, y, z) {
    $(`.cardBox .card:nth-child(${q})`).css({
        "background": "#FFFFFF"
    })
    $(`[name=${q}]`).css('display', 'none')
    $(".acoes1").css('display', 'inline-block')
    $(".acoes1").val('Iniciar Limpeza')
    var hora = hora_atual()
    $("#quarto_painel").text(q)
    $("#tipo").text('aguardando')
    $("#intervalo").text(`${x},${y},${z}`)
    $("#entrada").text(hora)
}
