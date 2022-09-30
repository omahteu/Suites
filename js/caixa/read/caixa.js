import { link } from "../../setup/index.js"


/*
    FUNÇÃO PRINCIPAL
*/
$(document).ready(function(){
    $.get(link[33], (e) => {
        debito(e)
        credito(e)
    })
    $.get(link[30], (el) => {
        dinheiro(el)
    })
})

/*
    FUNÇÕES COMPLEMENTARES
*/
function dinheiro(e){
    var somaDinheiro = 0
    for(var i = 0; i < e.length; i++){
        somaDinheiro += parseFloat(e[i].caixa)
    }
    $("#valor_emcaixa").text(parseFloat(somaDinheiro).toFixed(2))
}

function debito(e){
    var debito = e.filter(e => e.forma.slice(0, 3) == "Déb")
    var somaDebito = 0
    for(var i = 0; i < debito.length; i++){
        somaDebito += parseFloat(debito[i].valor)
    }
    $("#valor_areceber_debito").text(parseFloat(somaDebito).toFixed(2))
}

function credito(e){
    var credito = e.filter(e => e.forma.slice(0, 3) == "Cré")
    var somaCredito = 0
    for(var i = 0; i < credito.length; i++){
        somaCredito += parseFloat(credito[i].valor)
    }
    $("#valor_areceber_credito").text(parseFloat(somaCredito).toFixed(2))
}
