import { link } from "../setup/index.js"

$(document).ready(function() {
    quartos_disponiveis()
})

async function quartos_disponiveis(){
    const resposta = await fetch(link[17])
    const resposta2 = await fetch(link[11])
    const dados = await resposta.json()
    const dados2 = await resposta2.json()
    
    var quantidade = dados.length

    const locado = dados2.filter(item => item.tipo === 'locado').length
    const faxina = dados2.filter(item => item.tipo === 'faxina').length
    const aguardando = dados2.filter(item => item.tipo === 'aguardando').length
    const limpeza = dados2.filter(item => item.tipo === 'limpeza').length
    const manutencao = dados2.filter(item => item.tipo === 'manutencao').length

    $("#quartos_disponiveis").text(quantidade - locado)
    $("#quartos_locados").text(locado)
    $("#quartos_faxina").text(faxina)
    $("#quartos_aguardando").text(aguardando)
    $("#quartos_limpeza").text(limpeza)
    $("#quartos_manutencao").text(manutencao)
}
