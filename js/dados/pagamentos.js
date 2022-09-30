import { link } from "../setup/index.js"


$(document).ready(function(){
    dados_pagamento()
})

async function dados_pagamento(){
    const requisicao = await fetch(link[33])
    const resposta = await requisicao.json()
    resposta.forEach(e => {
        console.log(e)
    });
}