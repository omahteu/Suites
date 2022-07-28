import { link } from "../setup/index.js"

$(document).ready(function() {
    buscaTarifasBandeiras()
})

async function buscaTarifasBandeiras() {
    const respostaCredito = await fetch(link[4])
    const respostaDebito = await fetch(link[8])
    const dadosCredito = await respostaCredito.json()
    const dadosDebito = await respostaDebito.json()

    dadosDebito.forEach(elemento => {
        var string = elemento.porcentagem;
        var metade = Math.floor(string.length / 2);
        var resultado = string.substr(0,metade)+"."+string.substr(metade);
        $('#modo_pagamento').append(`<option value="${resultado}" >Débito ${elemento.bandeira} - ${resultado}%</option>`)
    });

    dadosCredito.forEach(elemento => {
        var string = elemento.porcentagem;
        var metade = Math.floor(string.length / 2);
        var resultado = string.substr(0,metade)+"."+string.substr(metade);
        $('#modo_pagamento').append(`<option value="${resultado}" >Crédito ${elemento.bandeira} - ${resultado}%</option>`)
    });

    $("#modo_pagamento").change(function() {
        var escolha = $(this).val()
        if(escolha > 2.0){
            let confirmacao_cartao = confirm(`Crédito com acréscimo de ${escolha}%\nConfirme a opção desejada!`)
            if(confirmacao_cartao){
                let campo_parcelas = $("#numero_parcelas")
                campo_parcelas.css('display', 'inline')
                $("#confirma_parcelas").click(function() {
                    npc(escolha, campo_parcelas.val())
                })
            } else {
                console.log('Cancelado!')
            }
        } else if(escolha < 2.0){
            let confirmacao_cartao = confirm(`Crédito com acréscimo de ${escolha}%\nConfirme a opção desejada!`)
            if(confirmacao_cartao){
                npd(escolha)
            } else {
                console.log('Cancelado!')
            }
        }
    })
}

function npc(tarifa, parcelas) {
    var xParcelas = parcelas
    $("#nparcelas").text(xParcelas)
    let total_geral = $("#totalGeral").text()
    let valor_decimal = parseFloat(tarifa) / 100
    let valor_para_descontar = total_geral * valor_decimal
    let total_comtarifa = parseFloat(total_geral) + parseFloat(valor_para_descontar)
    let valor_parcelas = total_comtarifa / xParcelas
    $("#valor_parcelas").text(valor_parcelas.toFixed(2))
    var valor_ausar = total_geral = parseFloat(total_geral) + parseFloat(valor_para_descontar)
    $("#totalGeral").text(valor_ausar.toFixed(2))
}

function npd(tarifa) {
    var xParcelas = 1
    $("#nparcelas").text(xParcelas)
    let total_geral = $("#totalGeral").text()
    let valor_decimal = parseFloat(tarifa) / 100
    let valor_para_descontar = total_geral * valor_decimal
    let total_comtarifa = parseFloat(total_geral) + parseFloat(valor_para_descontar)
    let valor_parcelas = total_comtarifa / xParcelas
    $("#valor_parcelas").text(valor_parcelas.toFixed(2))
    var valor_ausar2 = total_geral = parseFloat(total_geral) + parseFloat(valor_para_descontar)
    $("#totalGeral").text(valor_ausar2.toFixed(2))
}
