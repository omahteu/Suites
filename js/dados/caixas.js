import { link } from "../setup/index.js"

$(document).ready(function(){
    caixas()
})

async function caixas(){
    const requisicao = await fetch(link[20])
    const retorno = await requisicao.json()
    const selecionados = retorno.filter(e => e.status == "Caixa")
    selecionados.forEach(e => {
        $("#codigo_caixa").append(`<option>${e.nome}</option>`)
    });
}
