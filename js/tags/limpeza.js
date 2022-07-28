import { hora_atual } from "../geradores/hora.js"

export function limpeza(q, t, x, y, z) {

    // CSS
    $(`.cardBox .card:nth-child(${q})`).css({
        "background": "#FFFF00"
    })

    $("[name=1]").css('display', 'none')

    // Botões Inferiores
    $(".acoes1").css('display', 'inline-block')
    $(".acoes1").val('Encerrar Limpeza')

    if(t != 'btn limpeza'){}

    var hora = hora_atual()

    // Definições
    //$("#numquarto").text(q)
    $("#quarto_painel").text(q)
    $("#tipo").text('limpeza')
    $("#intervalo").text(`${x},${y},${z}`)
    $("#entrada").text(hora)
}
