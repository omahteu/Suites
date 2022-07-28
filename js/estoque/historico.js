import { link } from "../setup/index.js"

$(document).ready(function(){
    historico_movimentacoes()
})

async function historico_movimentacoes(){
    const query = await fetch(link[22])
    const dados = await query.json()
    var tabela = document.getElementById("tabelaHistoricoMovimentacoes")
    tabela.innerHTML = ''
    dados.forEach(e => {
        tabela.innerHTML += '<tr>'+
                                '<td>' + e.data + '</td>'+
                                '<td>' + e.codigo + '</td>'+
                                '<td>' + e.tipo + '</td>'+
                                '<td>' + e.quantidade + '</td>'+
                            '</tr>'
    });
}