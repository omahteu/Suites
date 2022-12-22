// import { numero }               from "../geradores/numero.js"
// import { desfazer }             from "../tags/desfazer.js"
import link from "../setup/index.js"
import { hora_atual_segundos } from "../geradores/hora.js"
import { pernoite } from "../tags/pernoite.js"
import { tick } from "../setup/box.js"
import { insereValor } from "./ajax/inserir.js"


$(document).ready(function () {
    setInterval(() => {
        async function pernoitex() {
            const tolerancia = JSON.parse(sessionStorage.getItem("dq"))
            const valor_pernoite = JSON.parse(sessionStorage.getItem("tp"))
            const requisicao = await fetch(link[35])
            const retorno = await requisicao.json()
            let condicaoUm = retorno.length > 0
            if (condicaoUm) {
                retorno.forEach(e => {
                    let tipo = e.tipo
                    let permanencia = parseInt(e.permanencia)
                    let permanenciaX = parseInt(permanencia) + 1
                    let condicaoDois = tipo == "Automática"
                    if (condicaoDois) {
                        $.get(link[11], (el) => {
                            el.forEach(ele => {
                                let id = ele.id
                                let suite = ele.quarto
                                let hora = ele.datahora
                                let valor = ele.valor
                                let tipo = ele.tipo
                                let condicaoTres = tipo != "pernoite"
                                if (condicaoTres) {
                                    var flags = tick[`${suite}`]
                                    let tempoTolerancia = tolerancia.filter(i => i.numero == suite)
                                    let minutoTolerancia = parseInt(tempoTolerancia[0].tolerancia)
                                    let valorpernoite = valor_pernoite[0].tempo_pernoite
                                    let agora = hora_atual_segundos()
                                    let datahoraLocacao = ele.datahora
                                    var ms = moment(agora, "HH:mm:ss").diff(moment(datahoraLocacao, "HH:mm:ss"));
                                    var d = moment.duration(ms);
                                    var tempoPassado = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");
                                    let horaPassada = parseInt(tempoPassado.charAt(0))
                                    let minutoPassado = parseInt(tempoPassado.slice(2, 4))
                                    let condicaoQuatro = horaPassada >= permanencia
                                    let condicaoCinco = horaPassada <= permanenciaX
                                    let condicaoSeis = minutoPassado > minutoTolerancia
                                    let condicaoSete = horaPassada > permanenciaX
                                    let mensagem = `Pernoite na Suíte ${suite} ativada às ${hora_atual_segundos()}!`
                                    if (condicaoQuatro && condicaoCinco && condicaoSeis) {
                                        pernoite(suite, flags[0], flags[1], flags[2])
                                        var dados = {
                                            datahora: hora,
                                            valor: valor,
                                            quarto: suite,
                                            tipo: "pernoite"
                                        }
                                        $.ajax({
                                            url: `${link[11]}${id}/`,
                                            type: "PUT",
                                            dataType: "json",
                                            data: dados,
                                            success: () => { console.log(mensagem) }
                                        })
                                        insereValor(suite, valorpernoite, "pernoite")
                                    } else if (condicaoSete) {
                                        pernoite(suite, flags[0], flags[1], flags[2])
                                        var dados = {
                                            datahora: hora,
                                            valor: valor,
                                            quarto: suite,
                                            tipo: "pernoite"
                                        }
                                        $.ajax({
                                            url: `${link[11]}${id}/`,
                                            type: "PUT",
                                            dataType: "json",
                                            data: dados,
                                            success: () => { console.log(mensagem) }
                                        })
                                    }
                                }
                            })
                        })
                    }
                })
            }
        }
        pernoitex()
    }, 1000)
})
