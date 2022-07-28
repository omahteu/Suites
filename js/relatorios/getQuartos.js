import { link } from "../setup/index.js"

$(document).ready(function() {
    relatorioQuartos()
})

async function relatorioQuartos(){
    const resposta = await fetch(link[17])
    const dados = await resposta.json()
    var tabela = document.getElementById('tabrlaRelatorioQuartos')
    tabela.innerHTML = ''
    dados.forEach(elemento => {
        var codigo = elemento.codigo
        var numero = elemento.numero
        var tipo_quarto = elemento.tipo_quarto
        var tipo_tabela = elemento.tipo_tabela
        var percentual = elemento.percentual
        tabela.innerHTML += '<tr>'+
                                '<td>' + codigo + '</td>'+
                                '<td>' + numero + '</td>'+
                                '<td>' + tipo_quarto + '</td>'+
                                '<td>' + tipo_tabela + '</td>'+
                                '<td>' + percentual + '</td>'+
                            '</tr>'
    });
}
