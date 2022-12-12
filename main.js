$(document).on("click", "#salvarSuites", () => {
    let suiteCodigo = '100'
    let suiteNumero = '2'
    let suiteNome = 'luxo'
    let suiteHorasLocacao = '2'
    let suiteTolerancia = '15'
    let suiteCobranca = 'hora'
    let suiteExcedente = 'hora'
    let dados = {
        codigo: suiteCodigo,
        numero: suiteNumero,
        nome: suiteNome,
        horas_locacao: suiteHorasLocacao,
        tolerancia: suiteTolerancia,
        cobranca: suiteCobranca,
        excedente: suiteExcedente
    }
    $.post("https://127.0.0.1:8000/quartos/", dados, () => {
        alert("Suíte Registrada!")
        //location.reload()
    })
})