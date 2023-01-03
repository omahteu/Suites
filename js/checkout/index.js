import { recupera_permanencia } from "../quartos/ajax/get/permanencia.js"
import atualizaValores from "../quartos/calculos/porHora.js"
import { comanda } from "./_comanda.js"
import { somaComanda } from "./_somaComanda.js"
import quarto from "./_quarto.js"
import adicionais from "./_adicionais.js"
import { subtotal } from "./_subtotal.js"
import { desconto } from "./_desconto.js"
import { naoAplicavel } from "./_naoaplicavel.js"
import { total } from "./_total.js"

$(document).ready(function () {
    var suite = JSON.parse(localStorage.getItem('last'))
    comanda(suite)
    somaComanda(suite)
    quarto(suite, "valorQuarto")
    recupera_permanencia(suite)
    atualizaValores(suite)
    subtotal()
    adicionais(suite, "valorQuarto", "valor_addPermanencia")
    desconto()
    naoAplicavel()
    total()
})
