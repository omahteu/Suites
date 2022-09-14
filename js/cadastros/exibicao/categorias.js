import { link } from "../../setup/index.js"

export async function exibir_categorias_cadastradas(){
    const requisicao = await fetch(link[29])
    const resposta = await requisicao.json()
    resposta.forEach(e => {
        $("#listar_categorias").append(`<option value="${e.categoria}" >${e.categoria}</option>`)
    });
}
