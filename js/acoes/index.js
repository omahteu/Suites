// Imports listados por ordem alfabética das pastas
import { finalizaTarefa } from "../../qwertyu.js"
import { registraLimiteManutencao } from "../../qwertyu.js"
import { registraLimiteDesistencia } from "../../qwertyu.js"
import { registraLimiteLimpeza } from "../../qwertyu.js"

import desligar_luz from "../automacao/desligar.js"
import ligar_luz from "../automacao/ligar.js"

import ultima_limpeza from "../botoes/limpar.js"

import envia_dados_limpeza from "../caixa/limpeza.js"
import envia_dados_faxina from "../caixa/faxina.js"
import envia_dados_manutencao from "../caixa/manutencao.js"

import { inicia, para, zera } from "../contadores/cronometros/_relogio1.js"
import { parar2 } from "../contadores/cronometros/c2.js"

import { data_atual } from "../geradores/data.js"
import { hora_atual } from "../geradores/hora.js"

import tempo_pausado from "../quartos/ajax/post/decorrido.js"
import { abrirMenu } from "../quartos/estrutural/caixas.js"
import { fecharMenu } from "../quartos/estrutural/caixas.js"
import camareira_faxina from "../quartos/estrutural/camareira_faxina.js"
import listar_camareiras from "../quartos/estrutural/lista_camareiras.js"

import Suitesdisponiveis from "../relatorios/quartosDisponiveis.js"

import { fimModal } from "../setup/camareiras.js"
import atualiza_status from "../setup/atualiza.js"
import { inicioModalTroca } from "../setup/troca.js"
import { acao } from "../setup/box.js"
import { tick } from "../setup/box.js"

import aguardando from "../tags/aguardo.js"
import desfazer from "../tags/desfazer.js"
import faxina from "../tags/faxina.js"
import limpeza from "../tags/limpeza.js"
import camareiras from "../tags/camareira.js"

var rota = 'rota'

export function reacao(status, suite) {
    var flags = tick[`${suite}`]
    let h = $(`#hora${suite}`).text()
    let m = $(`#minuto${suite}`).text()
    let s = $(`#segundo${suite}`).text()
    let tempo = `${h}:${m}:${s}`
    let usuario = $("#usuario_sistema").text()

    if (status == acao[0]) {
        var condicao = $("#tipo").text()
        var verificaoLuz = localStorage.getItem("luz")
        if (condicao == "manutencao") {
            var razao = localStorage.getItem("motivo")
            envia_dados_manutencao(usuario, data_atual(), hora_atual(), suite, razao, tempo)
            finalizaTarefa(suite)
        }
        setTimeout(() => { ultima_limpeza(suite) }, 200)
        if (verificaoLuz == "ligada") {
            setTimeout(() => {
                desligar_luz(suite)
                localStorage.setItem("luz", "desligada")
            }, 500)
        }
        setTimeout(() => { desfazer(suite, flags[0], flags[1], flags[2]) }, 1000)
        setTimeout(() => { fimModal() }, 1001)
        setTimeout(() => {
            alert(`Disponibilizar a Suíte ${suite}?`)
            suite == "1" ? para() : suite == "2" ? parar2() : "casa"
            zera(suite)
        }, 500)
    } else if (status == acao[1]) {
        var tipo = $("#tipo").text()
        if (tipo == "manutencao") {
            var razao = localStorage.getItem("motivo")
            envia_dados_manutencao(usuario, data_atual(), hora_atual(), suite, razao, tempo)
            alert(`Iniciar faxina na Suíte ${suite}?`)
            suite == "1" ? para() : suite == "2" ? parar2() : "casa"
            zera(suite)
            inicia(suite, "0", "0", "0")
            setTimeout(() => {
                ligar_luz(suite)
                localStorage.setItem("luz", "ligada")
            }, 500)
            setTimeout(() => { atualiza_status(suite, "faxina"), 800 })
            setTimeout(() => { faxina(suite, rota, flags[0], flags[1], flags[2]) }, 1000)
            setTimeout(() => { fimModal() }, 1001)
        } else {
            alert(`Iniciar faxina na Suíte ${suite}?`)
            suite == "1" ? para() : suite == "2" ? parar2() : "casa"
            zera(suite)
            inicia(suite, "0", "0", "0")
            setTimeout(() => {
                ligar_luz(suite)
                localStorage.setItem("luz", "ligada")
            }, 500)
            setTimeout(() => { atualiza_status(suite, "faxina"), 800 })
            setTimeout(() => { faxina(suite, rota, flags[0], flags[1], flags[2]) }, 1000)
            setTimeout(() => { fimModal() }, 1001)
        }
    } else if (status == acao[2]) {
        alert(`Iniciar limpeza na Suíte ${suite}?`)
        /*
        localStorage.removeItem(`troca${suite}`)
        zera(suite)
        inicia(suite, "0", "0", "0")
        registraLimiteLimpeza(suite, "a", "limpeza")*/
        /*
        setTimeout(() => {
            ligar_luz(suite)
            localStorage.setItem("luz", "ligada")
        }, 500)
        *//*
        setTimeout(() => { limpeza(suite, flags[0], flags[1], flags[2]) }, 700)
        setTimeout(() => { atualiza_status(suite, "limpeza"), 900 })
        setTimeout(() => { fimModal() }, 1000)*/
    } else if (status == acao[3]) {
        inicioModalTroca("modau-troca")
        fimModal()
        setTimeout(() => {
            var antigo = $("#quarto_painel").text()
            $("#quarto_antigo").val(antigo)
        }, 100)
        Suitesdisponiveis()
    } else if (status == acao[4]) {
        if (confirm(`Encerrar a Suíte ${suite}?`)) {
            /*$.get(link[21], (e) => {
                var avalor = $("#vh_painel").text()
                console.log(parseFloat(avalor) + parseFloat(e[0].tempo_pernoite))
                $("#vh_painel").text(parseFloat(avalor) + parseFloat(e[0].tempo_pernoite))
            })*/

            registraLimiteDesistencia(suite, "a", "desistencia")
            suite == "1" ? para() :
            suite == "2" ? parar2() : "casa"
            setTimeout(() => { localStorage.setItem("last", suite) }, 100)
            setTimeout(() => { tempo_pausado(h, m, s, suite) }, 300)
            setTimeout(() => { desfazer(suite, flags[0], flags[1], flags[2]) }, 1000)
            // sessionStorage.setItem('quarto', suite)
            window.open('../html/checkout.html', '_blank')
            setTimeout(() => { aguardando(suite, rota, flags[0], flags[1], flags[2]) }, 1500)
            setTimeout(() => { atualiza_status(suite, "aguardando"), 1500 })
            setTimeout(() => { fimModal() }, 1001)
        }
    } else if (status == acao[5]) {
        if (confirm(`Disponibilizar a Suíte ${suite}?`) == true) {
            camareiras()
            setTimeout(() => {
                var dados = {
                    caixa: usuario,
                    data: data_atual(),
                    hora: hora_atual(),
                    quarto: suite,
                    tempo: tempo,
                    camareira: ""
                }
                localStorage.setItem("limpeza", JSON.stringify(dados))
            }, 500)
        } else {
            console.log('cancelado')
        }
    } else if (status == acao[6]) {

        alert('Camareira Selecionada')

        suite == "1" ? para() : suite == "2" ? parar2() : "casa"

        zera(suite)

        setTimeout(() => {
            var recebido = JSON.parse(localStorage.getItem("limpeza"))
            var cam = $("#selecionar_camareira").val()
            envia_dados_limpeza(recebido.caixa, recebido.data, recebido.hora, recebido.quarto, recebido.tempo, cam)
        }, 200)
        setTimeout(() => { fimModal() }, 500)
        setTimeout(() => { desfazer(suite, flags[0], flags[1], flags[2]) }, 600)

        setTimeout(() => {
            desligar_luz(suite)
            localStorage.setItem("luz", "desligada")
        }, 650)

        setTimeout(() => { ultima_limpeza(suite) }, 800)
    } else if (status == acao[7]) {
        $("#botao_inferior_tres").val("Ligar Luz")
        desligar_luz(suite)
        localStorage.setItem("status_botao", "desligado")
        localStorage.setItem("luz", "desligada")
    } else if (status == acao[8]) {
        registraLimiteManutencao(suite, "a", "manutencao")
        $("#botao_inferior_tres").val("Apagar Luz")
        ligar_luz(suite)
        localStorage.setItem("status_botao", "ligado")
        localStorage.setItem("luz", "ligada")
    } else if (status == acao[9]) {
        fimModal()
        abrirMenu("modau-menu")
        camareira_faxina()
        listar_camareiras()
    } else if (status == acao[10]) {
        let camareira = $("#camareiras :selected").text()
        envia_dados_faxina(usuario, data_atual(), hora_atual(), suite, tempo, camareira)
        fecharMenu()
        setTimeout(() => { ultima_limpeza(suite) }, 200)
        /*
        if (verificaoLuz == "ligada"){
            setTimeout( () => {
                desligar_luz(suite)
                localStorage.setItem("luz", "desligada")
            }, 500)
        }
        */
        setTimeout(() => { desfazer(suite, flags[0], flags[1], flags[2]) }, 1000)
        setTimeout(() => { fimModal() }, 1001)
        setTimeout(() => {
            alert(`Disponibilizar a Suíte ${suite}?`)
            suite == "1" ? para() : suite == "2" ? parar2() : "casa"
            zera(suite)
        }, 500)
    }
}
