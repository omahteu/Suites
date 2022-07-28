import { link } from "../setup/index.js"

$(document).ready(function() {
    dadosOcupacoes()
})

async function dadosOcupacoes(){
    const resposta = await fetch(link[13])
    const dados = await resposta.json()
    var tabelaHomeOcupacoes = document.getElementById('tabelaHomeOcupacoes')
    tabelaHomeOcupacoes.innerHTML = ''
    dados.forEach(elemento => {
        var data = elemento.data
        var codigo = elemento.codigo
        var quarto = elemento.quarto
        var entrada = elemento.entrada
        var saida = elemento.saida
        var total = elemento.total
        tabelaHomeOcupacoes.innerHTML += '<tr>'+
                                            '<td>' + data + '</td>'+
                                            '<td>' + codigo + '</td>'+
                                            '<td>' + quarto + '</td>'+
                                            '<td>' + entrada + '</td>'+
                                            '<td>' + saida + '</td>'+
                                            '<td>' + total + '</td>'+
                                        '</tr>'
    });
}
