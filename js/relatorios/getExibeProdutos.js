import { link } from "../setup/index.js"

$(document).ready(function(){
    dadosProdutos()
})

async function dadosProdutos(){
    const resposta = await fetch(link[16])
    const dado = await resposta.json()
    var tabelaHomeProdutos = document.getElementById('tabelaHomeProdutos')
    tabelaHomeProdutos.innerHTML = ''
    dado.forEach(elemento => {
        var codigo = elemento.codigo
        var descricao = elemento.descricao
        var valor = elemento.valorunitario
        var quantidade = elemento.quantidade
        var categoria = elemento.categoria
        var data = elemento.data
        tabelaHomeProdutos.innerHTML += '<tr>'+
                                            '<td>' + codigo + '</td>'+
                                            '<td>' + descricao + '</td>'+
                                            '<td>' + valor + '</td>'+
                                            '<td>' + quantidade + '</td>'+
                                            '<td>' + categoria + '</td>'+
                                            '<td>' + data + '</td>'+
                                        '</tr>'
    });
}
