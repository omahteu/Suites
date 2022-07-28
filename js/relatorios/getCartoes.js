import { link } from "../setup/index.js"

$(document).ready(function(){
    relatorioCartoes()
})

async function relatorioCartoes(){
    const query1 = await fetch(link[4])
    const query2 = await fetch(link[8])
    const dados1 = await query1.json()
    const dados2 = await query2.json()
    var tabela = document.getElementById("tabelaRelatorioCartoes")
    tabela.innerHTML = ""
    dados1.forEach(e => {
        var porcentagem = e.porcentagem
        var metade = Math.floor(porcentagem.length / 2);
        var resultado = porcentagem.substr(0,metade)+"."+porcentagem.substr(metade);
        tabela.innerHTML += '<tr>'+
                                '<td> Crédito </td>' +
                                '<td>'+ e.bandeira + '</td>' +
                                '<td>'+ resultado + '</td>' +
                            '</tr>';
    })
    dados2.forEach(e => {
        var porcentagem = e.porcentagem
        var metade = Math.floor(porcentagem.length / 2);
        var resultado = porcentagem.substr(0,metade)+"."+porcentagem.substr(metade);
        tabela.innerHTML += '<tr>'+
                                '<td> Débito </td>' +
                                '<td>'+ e.bandeira + '</td>' +
                                '<td>'+ resultado + '</td>' +
                            '</tr>';
    })
}
