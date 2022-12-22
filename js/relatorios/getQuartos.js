import link from "../setup/index.js"

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
        var nome = elemento.nome
        var horas_locacao = elemento.horas_locacao
        let tolerancia = elemento.tolerancia
        let cobranca = elemento.cobranca
        let excendete = elemento.excedente
        tabela.innerHTML += '<tr>'+
                                `<td>${codigo}</td>`+
                                `<td>${numero}</td>`+
                                `<td>${nome}</td>`+
                                `<td>${horas_locacao}</td>`+
                                `<td>${tolerancia}</td>`+
                                `<td>${cobranca}</td>`+
                                `<td>${excendete}</td>`+
                            '</tr>'
    });
}
