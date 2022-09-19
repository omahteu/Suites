import { link } from "../../setup/index.js"

$(document).ready(function() {
    ultima_suite()
})

var nu

async function ultima_suite(){
    const query = await fetch(link[17])
    const dados = await query.json()
    dados.forEach(e => {
        nu = Number(e.numero)
    });
}

$(document).on("click", "#salvarSuites", () => {
    let suiteCodigo = $("#suiteCodigo").val()
    let suiteNumero = nu + 1
    let suiteNome = $("#suiteNome").val()
    let suiteHorasLocacao = $("#suiteHorasLocacao").val()
    let suiteTempoEspecial = $("#suiteTempoEspecial").val()
    let suiteTempoAdicional = $("#suiteTempoAdicional").val()
    let suiteTolerancia = $("#suiteTolerancia").val()
    let suiteCobranca = $("#suiteCobranca").val()
    let suiteExcedente = $("#suiteExcedente").val()
    let dados = {
        codigo: suiteCodigo,
        numero: suiteNumero,
        nome: suiteNome,
        horas_locacao: suiteHorasLocacao,
        tempo_especial: suiteTempoEspecial,
        tempo_adicional: suiteTempoAdicional,
        tolerancia: suiteTolerancia,
        cobranca: suiteCobranca,
        excedente: suiteExcedente
    }
    $.post(link[17], dados, () => {
        alert("Suíte Registrada!")
        location.reload()
    })
})