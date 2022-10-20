import { link } from "./js/setup/index.js"
import { desligar_luz } from './js/automacao/desligar.js'
import { bloqueio } from "./js/quartos/estrutural/bloqueio.js"
import { hora_atual_segundos } from "./js/geradores/hora.js"

function formatarData(data) {
    const hora = data.getHours()
    const minuto = data.getMinutes()
    const segundo = data.getSeconds()
    return `${hora}:${minuto}:${segundo}`
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
    //const data = new Date()
    //data.setMinutes(data.getMinutes() + 10)

    // console.log(formatarData(data))
    // limite("0", "Desistência")

    setInterval(() => {
        async function et() {
            const requisicao = await fetch(link[34])
            const retorno = await requisicao.json()
            retorno.forEach(e => {
                // pegar todas as tarefas
                let id = e.id
                let suite = e.suite
                let modo = e.modo
                let tipo = e.tipo

                // buscar as funções que realizaram as tarefas
                /*
                    função que desliga a luz
                    função que bloqueia o campo/botão
                                                        */

                //desligar_luz()
                //bloqueio()

                // executar as tarefas

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
                        if (modo == "b"){
                            desligar_luz("0", suite)
                        } else {
                            $.get(link[19], (e) => {
                                const valorFaxina = e[0].faxina
                                desligar_luz(valorFaxina, suite)
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
                        if (modo == "b"){
                            desligar_luz("0", suite)
                        } else {
                            $.get(link[19], (e) => {
                                const valorManutencao = e[0].manutencao
                                desligar_luz(valorManutencao, suite)
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

        et()
    }, 1000)

})

export function registraLimite(suite, modo, tipo) {
    let dados = {
        suite: suite,
        modo: modo,
        tipo: tipo,
        horario: hora_atual_segundos()
    }
    $.post(link[34], dados, () => {
        console.log("Registrado")
    })
}