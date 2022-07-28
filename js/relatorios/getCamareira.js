import { link } from "../setup/index.js"

$(document).ready(function() {
    relatorioCamareiras()
})

async function relatorioCamareiras(){
    const resposta = await fetch(link[3])
    const dados = await resposta.json()
    var tabela = document.getElementById('tabelaRelatorioCamareira')
    tabela.innerHTML = ''
    dados.forEach(elemento => {
        var nome = elemento.nome
        var codigo = elemento.codigo
        tabela.innerHTML += '<tr>'+
                                '<td>' + nome + '</td>'+
                                '<td>' + codigo + '</td>'+
                            '</tr>'
    });
}
