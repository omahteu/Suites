import link from "../setup/index.js"

$(document).ready(function() {
    relatorioSangria()
})

async function relatorioSangria(){
    const resposta = await fetch(link[32])
    const dados = await resposta.json()
    var tabela = document.getElementById('tabelaRelatorioSangria')
    tabela.innerHTML = ''
    dados.forEach(elemento => {
        var dia = elemento.dia
        var hora = elemento.hora
        var usuario = elemento.usuario
        var valor = elemento.valor
        var ac = elemento.ac
        var nc = elemento.ns
        tabela.innerHTML += '<tr>'+
                                `<td>${dia}</td:>`+
                                `<td>${hora}</td:>`+
                                `<td>${usuario}</td:>`+
                                `<td>${valor}</td:>`+
                                `<td>${ac}</td:>`+
                                `<td>${nc}</td:>`
                            '</tr>'
    });
}
