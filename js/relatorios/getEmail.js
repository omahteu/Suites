import { link } from "../setup/index.js"

$(document).ready(function() {
    relatorioEmais()
})

async function relatorioEmais(){
    const resposta = await fetch(link[9])
    const dados = await resposta.json()
    var tabela = document.getElementById('relatorioTabelaEmails')
    tabela.innerHTML = ''
    dados.forEach(elemento => {
        var usuario = elemento.usuario
        var senha = elemento.senha
        var smtp = elemento.smtp
        var porta = elemento.porta
        var timeout = elemento.timeout
        var email_destino = elemento.email_destino
        var email_contabilidade = elemento.email_contabilidade
        var autenticacao = elemento.autenticacao
        tabela.innerHTML += '<tr>'+
                                '<td>' + usuario + '</td>'+
                                '<td>' + senha + '</td>'+
                                '<td>' + smtp + '</td>'+
                                '<td>' + porta + '</td>'+
                                '<td>' + timeout + '</td>'+
                                '<td>' + email_destino + '</td>'+
                                '<td>' + email_contabilidade + '</td>'+
                                '<td>' + autenticacao + '</td>'+
                            '</tr>'
    });
}
