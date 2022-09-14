import { link } from "../../setup/index.js"

export async function exibir_quartos_cadastrados(){
    const requisicao = await fetch(link[17])
    const resposta = await requisicao.json()
    resposta.forEach(elemento => {
        $('#lista_quartos').append(`<option value="${elemento.numero}" >${elemento.numero}</option>`)

    });
}
