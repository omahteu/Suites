import { link } from "../setup/index.js"

$(document).ready(function() {
    relatorioProdutos()
})

async function relatorioProdutos() {
    const resposta = await fetch(link[16])
    const dados = await resposta.json()
    var tabela = document.getElementById('tabelaEstoque')
    tabela.innerHTML = ''
    dados.forEach(elemento => {
        var codigo = elemento.codigo
        var descricao = elemento.descricao
        var valor = elemento.valorunitario
        var quantidade = elemento.quantidade
        var categoria = elemento.categoria
        var data = elemento.data
        tabela.innerHTML += '<tr>'+
                                '<td>' + codigo + '</td>'+
                                '<td>' + descricao + '</td>'+
                                '<td>' + valor + '</td>'+
                                '<td>' + quantidade + '</td>'+
                                '<td>' + categoria + '</td>'+
                                '<td>' + data + '</td>'+
                            '</tr>'
    });   
}
