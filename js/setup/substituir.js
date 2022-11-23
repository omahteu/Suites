import { link } from "../setup/index.js"
import { inicia, para } from "../contadores/cronometros/_relogio1.js"
import { inicia2, para2 } from "../contadores/cronometros/_relogio2.js"
import { locado } from "../tags/locacao.js"
import { fimModalTroca } from "../setup/troca.js"
import { aguardando } from "../tags/aguardo.js"
import { desfazer } from "../tags/desfazer.js"
import { registra_troca } from "../quartos/ajax/post/troca.js"
import { tempo_pausado } from "../quartos/ajax/post/decorrido.js"
import { tick } from "../setup/box.js"

$("#substituir").click(function () {
    let quarto = $("#quarto_antigo").val()
    let novo = $("#quartos_disponiveis").val()
    let usuario = $("#usuario_sistema").text()
    let hora = $(`#hora${quarto}`).text()
    let minuto = $(`#minuto${quarto}`).text()
    let segundo = $(`#segundo${quarto}`).text()
    trocaComanda(quarto, novo)
    trocaPatio(quarto, novo)
    setTimeout(() => { registra_troca(usuario, quarto, novo) }, 100)
    setTimeout(() => { tempo_pausado(hora, minuto, segundo, quarto) }, 100)
    setTimeout(() => { iniciando(quarto, novo, hora, minuto, segundo) }, 1000)
    setTimeout(() => { finalizando(quarto) }, 1500)
})

function iniciando(antigo, suite, hora, minuto, segundo) {
    var p = [hora, minuto, segundo]
    let flags = tick[`${suite}`]
    setTimeout(() => { locado(suite, flags[0], flags[1], flags[2]) }, 200)
    setTimeout(() => {
        suite == "1" ? inicia(suite, p[0], p[1], p[2]) :
        suite == "2" ? inicia2(suite, p[0], p[1], p[2]) : ""
    }, 300)
    setTimeout(() => { fimModalTroca() }, 400)
    setTimeout(() => {
        $.get(link[11], e => {
            var dados = e.filter(item => item.quarto === antigo)
            dados.forEach(e => {
                sessionStorage.setItem("ficha", JSON.stringify(e))
            })
        })

    }, 500)
    setTimeout(() => {
        var card = JSON.parse(sessionStorage.getItem("ficha"))
        var ficha = {
            datahora: card.datahora,
            valor: card.valor,
            quarto: suite,
            tipo: "locado"
        }
        $.post(link[11], ficha, () => { sessionStorage.removeItem("ficha") })
    }, 700)
}

function finalizando(suite) {
    let flags = tick[`${suite}`]
    suite == "1" ? para() :
        suite == "2" ? para2 : ""
    setTimeout(() => { desfazer(suite, flags[0], flags[1], flags[2]) }, 200)
    setTimeout(() => { aguardando(suite, flags[0], flags[1], flags[2]) }, 300)
    setTimeout(() => {
        $.get(link[11], function (e) {
            var dados = e.filter(item => item.quarto === suite)
            dados.forEach(e => {
                sessionStorage.setItem("fichas", JSON.stringify(e))
            })
        })
    }, 500)
    setTimeout(() => {
        var card = JSON.parse(sessionStorage.getItem("fichas"))
        var id = card.id
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            url: `${link[11]}${id}/`,
            type: 'PATCH',
            data: JSON.stringify({ tipo: "aguardando" }),
            success: function () {
                sessionStorage.removeItem("fichas");
            },
            error: function (textStatus, errorThrown) {
                console.log(`ERRO: ${textStatus} - ${errorThrown}`)
            }
        })
    }, 700)
}

function trocaComanda(antigo, novo) {
    $.get(link[5], e => {
        let dados = e.filter(item => item.quarto === antigo)
        dados.forEach(el => {
            var id = el.id
            $.ajax({
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                url: `${link[5]}${id}/`,
                type: 'PATCH',
                data: JSON.stringify({ quarto: novo }),
                success: function () {
                    console.log("Troca de Comanda!");
                },
                error: function (textStatus, errorThrown) {
                    console.log(`ERRO: ${textStatus} - ${errorThrown}`)
                }
            })
        })
    })
}

function trocaPatio(antigo, novo) {
    $.get(link[15], e => {
        let dados = e.filter(item => item.quarto === antigo)
        dados.forEach(e => {
            var id = e.id
            $.ajax({
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                url: `${link[15]}${id}/`,
                type: 'PATCH',
                data: JSON.stringify({ quarto: novo }),
                success: function () {
                    console.log("Troca de Pátio!");
                },
                error: function (textStatus, errorThrown) {
                    console.log(`ERRO: ${textStatus} - ${errorThrown}`)
                }
            })
        })
    })
}
