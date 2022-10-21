import { link } from "./js/setup/index.js"
import { desligar_luz } from './js/automacao/desligar.js'
import { bloqueio } from "./js/quartos/estrutural/bloqueio.js"
import { hora_atual } from "./js/geradores/hora.js"
import { numero } from "./js/geradores/numero.js"

function formatarData(data) {
    const hora = numero(data.getHours())
    const minuto = numero(data.getMinutes())
    return `${hora}:${minuto}`
}

export function finalizaTarefa(suite){
    $.get(link[34], (e) => {
        const chave = e.filter(el => el.suite == suite)
        const id = chave[0].id
        $.ajax({
            url: `${link[34]}${id}/`,
            method: 'DELETE',
            dataType: 'json',
            success: () => {
                console.log('tarefa finalizada!')
            }
        })
    })
}


$(document).ready(function () {

    setInterval(() => {
        async function et() {
            const requisicao = await fetch(link[34])
            const retorno = await requisicao.json()
            if (retorno.length > 0){
                retorno.forEach(e => {
                    let id = e.id
                    let suite = e.suite
                    let modo = e.modo
                    let tipo = e.tipo
                    let horario = e.horario

                    switch (tipo) {
                        case "desistencia":
                            if (modo == "b"){
                                bloqueio("0", "#desisto")
                            } else {
                                $.get(link[19], (e) => {
                                    const valorDesistencia = e[0].desistencia
                                    bloqueio(valorDesistencia, "#desisto")
                                    $.ajax({
                                        headers : {
                                            'Accept' : 'application/json',
                                            'Content-Type' : 'application/json'
                                        },
                                        url : link[34] + id + "/",
                                        type : 'PATCH',
                                        data : JSON.stringify({"modo": "b"}),
                                        success : function() {
                                            console.log("Troca Com Sucesso!");
                                        },
                                        error : function(textStatus, errorThrown) {
                                            console.log(`ERRO: ${textStatus} - ${errorThrown}`)
                                        }
                                    }) 
                                })
                            }
                            break
    
                        case "faxina":
                            if (modo != "b"){
                                if (String(horario) == String(hora_atual())){
                                    desligar_luz(suite)
                                    $.ajax({
                                        headers : {
                                            'Accept' : 'application/json',
                                            'Content-Type' : 'application/json'
                                        },
                                        url : link[34] + id + "/",
                                        type : 'PATCH',
                                        data : JSON.stringify({"modo": "b"}),
                                        success : function() {
                                            console.log("Troca Com Sucesso!");
                                        },
                                        error : function(textStatus, errorThrown) {
                                            console.log(`ERRO: ${textStatus} - ${errorThrown}`)
                                        }
                                    })
                                }
                            }
                            break
    
                        case "limpeza":
                            if (modo == "b"){
                                desligar_luz("0", suite)
                            } else {
                                $.get(link[19], (e) => {
                                    const valorLimpeza = e[0].limpeza
                                    desligar_luz(valorLimpeza, suite)
                                    $.ajax({
                                        headers : {
                                            'Accept' : 'application/json',
                                            'Content-Type' : 'application/json'
                                        },
                                        url : link[34] + id + "/",
                                        type : 'PATCH',
                                        data : JSON.stringify({"modo": "b"}),
                                        success : function() {
                                            console.log("Troca Com Sucesso!");
                                        },
                                        error : function(textStatus, errorThrown) {
                                            console.log(`ERRO: ${textStatus} - ${errorThrown}`)
                                        }
                                    })
                                })
                            }
                            break
    
                        case "manutencao":
                            if (modo != "b"){
                                if (String(horario) == String(hora_atual())){
                                    setTimeout( () => {
                                        desligar_luz(suite)
                                        $.ajax({
                                            headers : {
                                                'Accept' : 'application/json',
                                                'Content-Type' : 'application/json'
                                            },
                                            url : link[34] + id + "/",
                                            type : 'PATCH',
                                            data : JSON.stringify({"modo": "b"}),
                                            success : function() {
                                                console.log("Troca Com Sucesso!");
                                            },
                                            error : function(textStatus, errorThrown) {
                                                console.log(`ERRO: ${textStatus} - ${errorThrown}`)
                                            }
                                        })
                                        $("#botao_inferior_tres").css("display", "none")
                                    }, 30000)
                                }
                            } else {
                                if (tipo == "manutencao"){
                                    $("#botao_inferior_tres").css("display", "none")
                                }
                            }
                            break
    
                        case "troca":
                            if (modo == "b"){
                                bloqueio("0", "#botao_inferior_um")
                            } else {
                                $.get(link[19], (e) => {
                                    const valorTroca = e[0].troca
                                    bloqueio(valorTroca, "#botao_inferior_um")
                                    $.ajax({
                                        headers : {
                                            'Accept' : 'application/json',
                                            'Content-Type' : 'application/json'
                                        },
                                        url : link[34] + id + "/",
                                        type : 'PATCH',
                                        data : JSON.stringify({"modo": "b"}),
                                        success : function() {
                                            console.log("Troca Com Sucesso!");
                                        },
                                        error : function(textStatus, errorThrown) {
                                            console.log(`ERRO: ${textStatus} - ${errorThrown}`)
                                        }
                                    }) 
                                })
                            }
                            break
                    
                        default:
                            break
                    }
    
                    // dar baixa na tarefa
    
                });
            }
        }
        et()
    }, 1000)

})

export function registraLimite(suite, modo, tipo) {
    $.get(link[19], (e) => {
        const valorFaxina = e[0].faxina
        const data = new Date()
        data.setMinutes(data.getMinutes() + parseInt(valorFaxina))
        let dados = {
            suite: suite,
            modo: modo,
            tipo: tipo,
            horario: String(formatarData(data))
        }
        $.post(link[34], dados, () => {
            console.log("Registrado")
        })
    })

}

export function registraLimiteManutencao(suite, modo, tipo){
    $.get(link[19], (e) => {
        const tempoManutencao = e[0].manutencao
        const data = new Date
        data.setMinutes(data.getMinutes() + parseInt(tempoManutencao))
        let dados = {
            suite: suite,
            modo: modo,
            tipo: tipo,
            horario: String(formatarData(data))
        }
        $.post(link[34], dados, () => {
            console.log("Registrado")
        })
    })
}

