import { link } from "../setup/index.js"

$(document).ready(function() {
    buscaCaixa()
})

async function buscaCaixa(){
    const resposta = await fetch(link[2])
    const data = await resposta.json()
    var historicoCaixa = document.getElementById('tabrlaRelatorioQuartos')
    historicoCaixa.innerHTML = ''
    data.forEach(elemento => {
        historicoCaixa.innerHTML += '<tr>'+
                                        '<td>' + elemento.data + '</td>'+
                                        '<td>' + elemento.entrada + '</td>'+
                                        '<td>' + elemento.usuario + '</td>'+
                                        '<td>' + elemento.fundo + '</td>'+
                                        '<td>' + elemento.total + '</td>'+
                                        '<td>' + elemento.saida + '</td>'+
                                    '</tr>'
    });
}
