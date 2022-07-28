import { link } from "../setup/index.js"

$(document).ready(function() {
    busca_ultimo_quarto()
})

var nu

async function busca_ultimo_quarto(){
    const query = await fetch(link[17])
    const dados = await query.json()
    dados.forEach(e => {
        nu = Number(e.numero)
    });
}

$("#salvarFormPostQuarto").click(function() {
    var codigoQuarto = $("#codigoQuarto").val()
    var numeroQuarto = nu + 1
    var percentual = $("#adicionarPercentualQuarto").val()
    var suite = $("#tipoSuiteQuarto").val()
    // var tabela = $("#tabelaQuarto").val()
    var dados = {
        codigo: codigoQuarto,
        numero: String(numeroQuarto),
        tipo_quarto: suite,
        tipo_tabela: "",
        percentual: percentual,
    }
    $.post(link[17], dados, () => {
        alert("Quarto Registrado!")
        document.getElementById('formCadastros').reset()
    })
})

$("#limparFormPostQuarto").click(function() {
    document.getElementById('formCadastros').reset()
})
