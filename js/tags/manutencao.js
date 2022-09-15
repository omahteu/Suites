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

    var estado = localStorage.getItem("status_botao")
    var luz = localStorage.getItem("luz")

    switch (estado) {
        // luz está desligada
        case "desligado":

            if (luz == "ligada"){
                $(".acoes3").css('display', 'inline-block')
                $(".acoes3").val('Apagar Luz')
            } else {
                $(".acoes3").css('display', 'inline-block')
                $(".acoes3").val('Ligar Luz')
            }
            break;
        
        // luz está ligada
        case "ligado":

            if (luz == "desligada"){
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

    // Definições
    //$("#numquarto").text(q)
    $("#quarto_painel").text(q)
    $("#tipo").text('manutencao')
    $("#intervalo").text(`${x},${y},${z}`)
    $("#entrada").text(hora)
}
