import { link } from "./index.js"

$(document).ready(function() {
    auditoria_estoque()
})

async function auditoria_estoque(){
    const resposta = await fetch(link[16])
    const dados = await resposta.json()
    dados.forEach(e => {
        if(e.quantidade == 0){
            alert(`O estoque do produto ${e.descricao} acabou!`)
        }
    });
}
