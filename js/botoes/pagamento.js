import { link } from "../setup/index.js"

$(document).ready(function() {
    buscaTarifasBandeiras()
    exibeCredito()
    exibeDebito()
})

function buscaTarifasBandeiras() {
    $(document).on("change", "#modo_pagamento", function(){
        let forma = $("#modo_pagamento :selected")
        let confirmacao = $("#nao_aplicavel").attr("disabled")
        if (confirmacao == undefined){
            alert("Selecione desconto, ou Não Aplicável")
            $('#modo_pagamento').prop('selectedIndex',0)

        } else {
            if (forma.text().slice(0, 2) == "Cr"){
                let campo_parcelas = $("#numero_parcelas")
                campo_parcelas.css('display', 'inline')
                $("#confirma_parcelas").click(function() {
                    credito(forma.val(), campo_parcelas.val())
                })
            } else if (forma.text().slice(0, 2) == "Dé"){
                $("#confirma_parcelas").click(function() {
                    debito(forma.val())
                })
            }
        }
    })
}

function credito(tarifa, parcelas) {
    let subtotal = parseFloat($("#valor_subtotal").text())
    let decimal = parseFloat(tarifa) / 100
    let acrescentado = subtotal * decimal
    let addParcela = acrescentado * parcelas
    let subtotalAcrescido = subtotal + addParcela
    let valorTarifado = subtotalAcrescido / parcelas
    $("#nparcelas").text(parcelas)
    $("#valor_parcelas").text(valorTarifado.toFixed(2))
    $("#totalGeral").text(subtotalAcrescido.toFixed(2))
    $("#confirma_parcelas").css("background", "black").attr("disabled", "true")
    $("#numero_parcelas").attr("disabled", "true")
    $("#modo_pagamento").attr("disabled", "true")
}

function debito(tarifa) {
    let subtotal = parseFloat($("#valor_subtotal").text())
    let decimal = parseFloat(tarifa) / 100
    let acrescentado = subtotal * decimal
    let addParcela = acrescentado * 1
    let subtotalAcrescido = subtotal + addParcela
    let valorTarifado = subtotalAcrescido / 1
    $("#nparcelas").text("1")
    $("#valor_parcelas").text(valorTarifado.toFixed(2))
    $("#totalGeral").text(subtotalAcrescido.toFixed(2))
    $("#confirma_parcelas").css("background", "black").attr("disabled", "true")
    $("#numero_parcelas").attr("disabled", "true")
    $("#modo_pagamento").attr("disabled", "true")
}

function exibeCredito(){
    $.get(link[4], e => {
        e.forEach(el => {
            $('#modo_pagamento').append(`<option value="${el.porcentagem}" >Crédito ${el.bandeira} - ${el.porcentagem}%</option>`)
        });
    })
}

function exibeDebito(){
    $.get(link[8], e => {
        e.forEach(el => {
            $('#modo_pagamento').append(`<option value="${el.porcentagem}" >Débito ${el.bandeira} - ${el.porcentagem}%</option>`)
        });
    })
}
