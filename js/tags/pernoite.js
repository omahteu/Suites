import { hora_atual } from "../geradores/hora.js"

export default function pernoite(q, x, y, z) {
    $(`.cardBox .card:nth-child(${q})`).css({
        "background": "#8B008B"
    })
    $(`[name=${q}]`).css('display', 'none')
    $(".acoes1").css('display', 'inline-block')
    $(".acoes1").val('Encerrar')
    var hora = hora_atual()
    $("#tipo").text('pernoite')
    $("#quarto_painel").text(q)
    $("#intervalo").text(`${x},${y},${z}`)
    $("#entrada").text(hora)
}
