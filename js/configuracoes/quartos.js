import { link } from "../setup/index.js"

$(document).ready(function() {
    numero_quartos()
})

async function numero_quartos(){
    const resposta = await fetch(link[17])
    const dados = await resposta.json()
    dados.forEach(elemento => {
        $('#lista_quartos').append(`<option value="${elemento.numero}" >${elemento.numero}</option>`)

    });
}