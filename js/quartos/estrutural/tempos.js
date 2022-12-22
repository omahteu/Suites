import link from "../../setup/index.js"

async function limite(suite, tipo){
    const requisicao = await fetch(link[19])
    const retorno = await requisicao.json()
    retorno.forEach(e => {
        console.log(e)
    });
}