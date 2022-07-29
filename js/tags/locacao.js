import { hora_atual } from "../geradores/hora.js"
import { link } from "../setup/index.js"

export function locado(q, t, x, y, z) {
    // CSS
    $(`.cardBox .card:nth-child(${q})`).css({
        "background": "#FF0000"
    })
    $(`[name=${q}]`).css('display', 'none')
    // Botões Inferiores
    $(".acoes1").css('display', 'inline-block')
    $(".acoes1").val('Trocar Suíte')
    $(".acoes2").css('display', 'inline-block')
    $(".acoes2").val('Encerrar')
    if(t != 'btn locado'){} 
    // Preço
    var tipoQuarto = $("#tipo_suite" + q).text()
    var tabela_emvigor = $("#tabela_emvigor").text()

    if(tipoQuarto == "Ar"){
        if(t == 'btn locado' && tabela_emvigor == 'Locação'){
            $.get(link[21], (e) => {
                e.forEach( (info) => {
                    $("#valor-quarto").text(info.valor_locacao)
                    $("#preco_quarto").text(info.valor_locacao)
                })
            })
        } else if(t == 'btn locado' && tabela_emvigor == 'Diaria'){
            $.get(link[21], (e) => {
                e.forEach( (info) => {
                    $("#valor-quarto").text(info.valor_diaria)
                    $("#preco_quarto").text(info.valor_diaria)
                })
            })
        } else if(t == 'btn locado' && tabela_emvigor == 'Especial'){
            $.get(link[21],  (e) => {
                e.forEach( (info) => {
                    $("#valor-quarto").text(info.valor_especial)
                    $("#preco_quarto").text(info.valor_especial)
                })
            })
        }
    } else if(tipoQuarto == "Ventilador"){
        if(t == 'btn locado' && tabela_emvigor == 'Locação'){
            $.get(link[21],  (e) => {
                e.forEach( (info) => {
                    $("#valor-quarto").text(info.valor_locacao)
                    $("#preco_quarto").text(info.valor_locacao)
                })
            })
        } else if(t == 'btn locado' && tabela_emvigor == 'Diaria'){
            $.get(link[21],  (e) => {
                e.forEach( (info) => {
                    $("#valor-quarto").text(info.valor_diaria)
                    $("#preco_quarto").text(info.valor_diaria)
                })
            })
        } else if(t == 'btn locado' && tabela_emvigor == 'Especial'){
            $.get(link[21],  (e) => {
                e.forEach( (info) => {
                    $("#valor-quarto").text(info.valor_especial)
                    $("#preco_quarto").text(info.valor_especial)
                })
            })
        }
    }
    var hora = hora_atual()
    //$("#numquarto").text(q)
    $("#tipo").text('locado')
    $("#quarto_painel").text(q)
    $("#intervalo").text(`${x},${y},${z}`)
    $("#entrada").text(hora)
}
