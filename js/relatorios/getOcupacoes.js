import { link } from "../setup/index.js"

$(document).ready(function() {
    relatorioOcupacoes()
})

async function relatorioOcupacoes(){
    const resposta = await fetch(link[13])
    const dados = await resposta.json()
    var tabela = document.getElementById('tabelaRelatorioOcupacoes')
    tabela.innerHTML = ''
    dados.forEach(elemento => {
        var usuario = elemento.usuario
        var data = elemento.data
        var codigo = elemento.codigo
        var quarto = elemento.quarto
        var entrada = elemento.entrada
        var saida = elemento.saida
        var total = elemento.total
        tabela.innerHTML += '<tr>'+
                                '<td>' + usuario + '</td>'+
                                '<td>' + data + '</td>'+
                                '<td>' + codigo + '</td>'+
                                '<td>' + quarto + '</td>'+
                                '<td>' + entrada + '</td>'+
                                '<td>' + saida + '</td>'+
                                '<td>' + total + '</td>'+
                            '</tr>'
    });
}
