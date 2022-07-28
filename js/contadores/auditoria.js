import { hora_atual } from "../geradores/hora.js"
import { horas_para_minutos } from "../geradores/minuto.js"
import { data_atual } from "../geradores/data.js"
import { link } from "../setup/index.js"

var horas = []

$(document).ready(function() {
    auditando()
})

window.onbeforeunload = () => {
    saindo()
    calc()
    tempo_quarto()
    return 'Tem a certeza que quer fechar a janela?';
}

function auditando(){
    var agora = hora_atual()
    horas.push(agora) 
}

function saindo(){
    var sair = hora_atual()
    horas.push(sair)
}

function calc(){
    var minutos_inicial = String(horas[0])
    var minutos_final = String(horas[1])
    var hora_inicial_formatada = minutos_inicial.split(":")
    var hora_final_formatada = minutos_final.split(":")
    var inicial_minutos = horas_para_minutos(hora_inicial_formatada)
    var final_minutos = horas_para_minutos(hora_final_formatada)
    var permanencia = parseInt(final_minutos) - parseInt(inicial_minutos)
    var usuario = localStorage.getItem("nome")
    var hoje = data_atual()
    var dados = {
        permanencia: permanencia,
        usuario: usuario,
        hoje: hoje
    }
    localStorage.setItem('permanencia', JSON.stringify(dados))
}

async function tempo_quarto(){
    const resposta = await fetch(link[11])
    const dados = await resposta.json()
    var ver = []
    dados.forEach(e => {
        var restaurar = e.quarto
        ver.push(restaurar)
    });
    for(var i = 0; i < ver.length; i++){
        var hora = $(`#hora${ver[i]}`).text()
        var minutos = $(`#minuto${ver[i]}`).text()
        var segundos = $(`#segundo${ver[i]}`).text()
        var permanencia = hora + ":" + minutos + ":" + segundos
        localStorage.setItem(ver[i], permanencia)
    }
}
