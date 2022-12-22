import link from "../../setup/index.js"

export default async function listar_camareiras(){
    const requisicao = await fetch(link[3])
    const retorno = await requisicao.json()
    retorno.forEach(e => {
        $("#camareiras").append(`<option>${e.nome}</option>`)
    });
}
