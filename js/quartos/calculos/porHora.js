/*
    ESSA FUNÇÃO SERVE PARA CALCULAR O VALOR DA LOCAÇÃO, CONFORME O TEMPO DECORRIDO
                                                                                    */

import { hora_atual_segundos }  from "../../geradores/hora.js"
import { link }                 from "../../setup/index.js"
import { alterarValor }         from "../ajax/alterar.js"

var caixa = []

/*
    FUNÇÃO PRINCIPAL
                      */
export function atualizaValores(suite) {
  buscaHoraLocacao()
  buscaDadosQuarto()
  buscaTabelaPrecos()
  buscaLocacoes()
  var horaLocacao =       JSON.parse(sessionStorage.getItem("test"))
  var infoQuartos =       JSON.parse(sessionStorage.getItem("dq"))
  var precos =            JSON.parse(sessionStorage.getItem("tp"))
  var filtroCobranca =    infoQuartos.filter(e => e.numero == suite)
  var infos =             horaLocacao.filter(e => e.quarto == suite)
  var quantidadeHoras =   filtroCobranca[0].horas_locacao
  var xquantidadeHoras =  parseInt(quantidadeHoras) + 1
  var tipoCobranca =      filtroCobranca[0].cobranca
  var tolerancia =        filtroCobranca[0].tolerancia
  var datahoraLocacao =   infos[0].datahora
  var agora =             hora_atual_segundos()
  var valor =             infos[0].valor
  var ms =                moment(agora, "HH:mm:ss").diff(moment(datahoraLocacao, "HH:mm:ss"))
  var d =                 moment.duration(ms)
  var tempoPassado =      Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss")
  console.log(tempoPassado)
  var tpFormatado =       String(tempoPassado).split(":")
  var locacao =           precos[0].valor_locacao
  var horaLocada =        tpFormatado[0]
  var minutoLocado =      tpFormatado[1]
  let condicaoUm =        parseInt(horaLocada) > parseInt(quantidadeHoras)
  let condicaoDois =      parseInt(horaLocada) == parseInt(xquantidadeHoras)
  let condicaoTres =      parseInt(minutoLocado) > parseInt(tolerancia)
  let condicaoQuatro =    parseInt(horaLocada) > parseInt(xquantidadeHoras)
  let diferenca =         parseInt(horaLocada) - parseInt(quantidadeHoras)

  if (tipoCobranca == "hora") {
    let um =      precos[0].vh1
    let dois =    precos[0].vh2
    let tres =    precos[0].vh3
    let quatro =  precos[0].vh4
    let cinco =   precos[0].vh5
    let seis =    precos[0].vh6
    if (condicaoUm && condicaoDois && condicaoTres) {
      if (parseInt(diferenca) == 1) {
        var acrescimo = Number(valor) + Number(um)
        alterarValor(suite, acrescimo)
        //$("#atualizacaoPreco").text(acrescimo)
        //$("#vh_painel").text(acrescimo)
        //$("#valor_addPermanencia").text(acrescimo)
      } else if (parseInt(diferenca) == 2) {
        var acrescimo = Number(valor) + Number(dois)
        alterarValor(suite, acrescimo)
        //$("#atualizacaoPreco").text(acrescimo)
        //$("#vh_painel").text(acrescimo)
        //$("#valor_addPermanencia").text(acrescimo)
      } else if (parseInt(diferenca) == 3) {
        var acrescimo = Number(valor) + Number(tres)
        alterarValor(suite, acrescimo)
        //$("#atualizacaoPreco").text(acrescimo)
        //$("#vh_painel").text(acrescimo)
        //$("#valor_addPermanencia").text(acrescimo)
      } else if (parseInt(diferenca) == 4) {
        var acrescimo = Number(valor) + Number(quatro)
        alterarValor(suite, acrescimo)
        //$("#atualizacaoPreco").text(acrescimo)
        //$("#vh_painel").text(acrescimo)
        //$("#valor_addPermanencia").text(acrescimo)
      } else if (parseInt(diferenca) == 5) {
        var acrescimo = Number(valor) + Number(cinco)
        alterarValor(suite, acrescimo)
        //$("#atualizacaoPreco").text(acrescimo)
        //$("#vh_painel").text(acrescimo)
        //$("#valor_addPermanencia").text(acrescimo)
      } else if (parseInt(diferenca) == 6) {
        var acrescimo = Number(valor) + Number(seis)
        alterarValor(suite, acrescimo)
        //$("#atualizacaoPreco").text(acrescimo)
        //$("#vh_painel").text(acrescimo)
        //$("#valor_addPermanencia").text(acrescimo)
      } else if (parseInt(diferenca) > 7) {
        for (const x of Array(7).keys()) {
          var i = x + 1
          var valoracrescentado = parseFloat(locacao) * i
          var acrescimo = parseFloat(valor) + parseFloat(valoracrescentado)
          alterarValor(suite, acrescimo)
          //$("#atualizacaoPreco").text(acrescimo)
          //$("#vh_painel").text(acrescimo)
          //$("#valor_addPermanencia").text(acrescimo)
        }
      }
    } else if (condicaoQuatro) {
      if (parseInt(diferenca) == 1) {
        var acrescimo = Number(valor) + Number(um)
        alterarValor(suite, acrescimo)
        //$("#atualizacaoPreco").text(acrescimo)
        //$("#vh_painel").text(acrescimo)
        //$("#valor_addPermanencia").text(acrescimo)
      } else if (parseInt(diferenca) == 2) {
        var acrescimo = Number(valor) + Number(dois)
        alterarValor(suite, acrescimo)
        //$("#atualizacaoPreco").text(acrescimo)
        //$("#vh_painel").text(acrescimo)
        //$("#valor_addPermanencia").text(acrescimo)
      } else if (parseInt(diferenca) == 3) {
        var acrescimo = Number(valor) + Number(tres)
        alterarValor(suite, acrescimo)
        //$("#atualizacaoPreco").text(acrescimo)
        //$("#vh_painel").text(acrescimo)
        //$("#valor_addPermanencia").text(acrescimo)
      } else if (parseInt(diferenca) == 4) {
        var acrescimo = Number(valor) + Number(quatro)
        alterarValor(suite, acrescimo)
        //$("#atualizacaoPreco").text(acrescimo)
        //$("#vh_painel").text(acrescimo)
        //$("#valor_addPermanencia").text(acrescimo)
      } else if (parseInt(diferenca) == 5) {
        var acrescimo = Number(valor) + Number(cinco)
        alterarValor(suite, acrescimo)
        //$("#atualizacaoPreco").text(acrescimo)
        //$("#vh_painel").text(acrescimo)
        //$("#valor_addPermanencia").text(acrescimo)
      } else if (parseInt(diferenca) == 6) {
        var acrescimo = Number(valor) + Number(seis)
        alterarValor(suite, acrescimo)
        //$("#atualizacaoPreco").text(acrescimo)
        //$("#vh_painel").text(acrescimo)
        //$("#valor_addPermanencia").text(acrescimo)
      } else if (parseInt(diferenca) > 7) {
        for (const x of Array(7).keys()) {
          var i = x + 1
          var valoracrescentado = parseFloat(locacao) * i
          var acrescimo = parseFloat(valor) + parseFloat(valoracrescentado)
          alterarValor(suite, acrescimo)
          //$("#atualizacaoPreco").text(acrescimo)
          //$("#vh_painel").text(acrescimo)
          //$("#valor_addPermanencia").text(acrescimo)
        }
      }
    }
  } else if (tipoCobranca == "fixa") {
    if (parseInt(horaLocada) >= 1 && parseInt(minutoLocado) > parseInt(tolerancia)) {
      var resultado = parseInt(horaLocada) * parseFloat(locacao)
      alterarValor(suite, resultado)
      //$("#atualizacaoPreco").text(resultado.toFixed(2))
      //$("#vh_painel").text(resultado.toFixed(2))
      //$("#valor_addPermanencia").text(acrescimo)
    }
  }
}

/*
    FUNÇÕES COMPLEMENTARES
                            */

// INFOS => test
function buscaHoraLocacao() {
  $.get(link[11], (e) => {
    sessionStorage.setItem("test", JSON.stringify(e))
  })
}

// QUARTOS => dq
function buscaDadosQuarto() {
  $.get(link[17], (e) => {
    sessionStorage.setItem("dq", JSON.stringify(e))
  })
}

// VALORES => tp
function buscaTabelaPrecos() {
  $.get(link[21], (e) => {
    sessionStorage.setItem("tp", JSON.stringify(e))
  })
}

// INFOS => bl
function buscaLocacoes() {
  $.get(link[11], (e) => {
    sessionStorage.setItem("bl", JSON.stringify(e))
  })
}
