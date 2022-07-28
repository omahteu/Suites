import { hora_atual } from "../geradores/hora.js"

export function manutencao(q, x, y, z) {

    // CSS
    $(`.cardBox .card:nth-child(${q})`).css({
        "background": "rgb(169, 169, 169)"
    })
    
    $("[name=1]").css('display', 'none')

    // Botões Inferiores
    $(".acoes1").css('display', 'inline-block')
    $(".acoes1").val('Iniciar Faxina')

    $(".acoes2").css('display', 'inline-block')
    $(".acoes2").val('Disponibilizar Quarto')

    $(".acoes3").css('display', 'inline-block')
    $(".acoes3").val('Ligar Luz')

    var hora = hora_atual()

    // Definições
    //$("#numquarto").text(q)
    $("#quarto_painel").text(q)
    $("#tipo").text('manutencao')
    $("#intervalo").text(`${x},${y},${z}`)
    $("#entrada").text(hora)
}
