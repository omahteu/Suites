import { link } from "../../setup/index.js"

export async function exibir_placas_cadastradas(){
    const requisicao = await fetch(link[28])
    const resposta = await requisicao.json()
    resposta.forEach(e => {
        $("#lista_placa").append(`<option value="${e.ip}" >${e.nome}</option>`)
    });
}
