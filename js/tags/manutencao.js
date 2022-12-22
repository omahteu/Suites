import { hora_atual } from "../geradores/hora.js"

export default function manutencao(q, x, y, z) {
    $(`.cardBox .card:nth-child(${q})`).css({
        "background": "rgb(169, 169, 169)"
    })
    $(`[name=${q}]`).css('display', 'none')
    $(".acoes1").css('display', 'inline-block')
    $(".acoes1").val('Iniciar Faxina')

    $(".acoes2").css('display', 'inline-block')
    $(".acoes2").val('Disponibilizar Quarto')
    var estado = localStorage.getItem("botao")
    var luz = localStorage.getItem("luz")
    switch (estado) {
        // luz está desligada
        case "desligado":
            if (luz == "ligado"){
                $(".acoes3").css('display', 'inline-block')
                $(".acoes3").val('Apagar Luz')
            } else {
                console.log("das")
                $(".acoes3").css('display', 'inline-block')
                $(".acoes3").val('Ligar Luz')
            }
            break;
        // luz está ligada
        case "ligado":
            if (luz == "desligado"){
                $(".acoes3").css('display', 'inline-block')
                $(".acoes3").val('Ligar Luz')
            } else {
                $(".acoes3").css('display', 'inline-block')
                $(".acoes3").val('Apagar Luz')
            }
            break
        default:
            break;
    }
    var hora = hora_atual()
    $("#quarto_painel").text(q)
    $("#tipo").text('manutencao')
    $("#intervalo").text(`${x},${y},${z}`)
    $("#entrada").text(hora)
}
