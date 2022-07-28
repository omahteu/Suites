import { link } from "../setup/index.js"

$(document).ready(function() {
    relatorioIg()
})

async function relatorioIg(){
    const resposta = await fetch(link[10])
    const dados = await resposta.json()
    var tabela = document.getElementById('relatorioTabelaIgs')
    tabela.innerHTML = ''
    dados.forEach(elemento => {
        var social = elemento.social
        var fantasia = elemento.fantasia
        var cnpj = elemento.cnpj
        var cidade = elemento.cidade
        var endereco = elemento.endereco
        var numero = elemento.numero
        var bairro = elemento.bairro
        var telefone = elemento.telefone
        var telefone2 = elemento.telefone2
        var telefone3 = elemento.telefone3
        tabela.innerHTML += '<tr>'+
                                '<td>' + social + '</td>'+
                                '<td>' + fantasia + '</td>'+
                                '<td>' + cnpj + '</td>'+
                                '<td>' + cidade + '</td>'+
                                '<td>' + endereco + '</td>'+
                                '<td>' + numero + '</td>'+
                                '<td>' + bairro + '</td>'+
                                '<td>' + telefone + '</td>'+
                                '<td>' + telefone2 + '</td>'+
                                '<td>' + telefone3 + '</td>'+
                            '</tr>'
    });
}
