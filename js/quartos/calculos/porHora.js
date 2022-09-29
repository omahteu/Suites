/*
    ESSA FUNÇÃO SERVE PARA CALCULAR O VALOR DA LOCAÇÃO, CONFORME O TEMPO DECORRIDO
                                                                                    */

import { hora_atual_segundos } from "../../geradores/hora.js"
import { link } from "../../setup/index.js"

var caixa = []

/*
    FUNÇÃO PRINCIPAL
                      */
export function atualizaValores(quarto) {

  buscaHoraLocacao()
  buscaDadosQuarto()
  buscaTabelaPrecos()
  buscaLocacoes()

  var horaLocacao = JSON.parse(sessionStorage.getItem("test"))
  var infoQuartos = JSON.parse(sessionStorage.getItem("dq"))
  var precos = JSON.parse(sessionStorage.getItem("tp"))

  var filtroCobranca = infoQuartos.filter(e => e.numero == quarto)
  var infos = horaLocacao.filter(e => e.quarto == quarto)

  var quantidadeHoras = filtroCobranca[0].horas_locacao
  var tipoCobranca = filtroCobranca[0].cobranca
  var tolerancia = filtroCobranca[0].tolerancia
  var datahoraLocacao = infos[0].datahora
  var agora = hora_atual_segundos()
  var valor = infos[0].valor

  var ms = moment(agora, "HH:mm:ss").diff(moment(datahoraLocacao, "HH:mm:ss"));
  var d = moment.duration(ms);
  var tempoPassado = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");

  var tpFormatado = String(tempoPassado).split(":")
  var locacao = precos[0].valor_locacao
  var horaLocada = tpFormatado[0]
  var minutoLocado = tpFormatado[1]

  if (tipoCobranca == "hora") {
    let um = precos[0].vh1
    let dois = precos[0].vh2
    let tres = precos[0].vh3
    let quatro = precos[0].vh4
    let cinco = precos[0].vh5
    let seis = precos[0].vh6
    if (parseInt(horaLocada) > parseInt(quantidadeHoras) && parseInt(minutoLocado) > parseInt(tolerancia)) {
      var diferenca = parseInt(horaLocada) - Number(quantidadeHoras)
      switch (Number(diferenca)) {
        case 1:
          var acrecimo = Number(valor) + Number(um)
          $("#atualizacaoPreco").text(acrecimo)
          $("#vh_painel").text(acrecimo)
          break;
        case 2:
          var acrecimo = Number(valor) + Number(dois)
          $("#atualizacaoPreco").text(acrecimo)
          $("#vh_painel").text(acrecimo)
          break;
        case 3:
          var acrecimo = Number(valor) + Number(tres)
          $("#atualizacaoPreco").text(acrecimo)
          $("#vh_painel").text(acrecimo)
          break;
        case 4:
          var acrecimo = Number(valor) + Number(quatro)
          $("#atualizacaoPreco").text(acrecimo)
          $("#vh_painel").text(acrecimo)
          break;
        case 5:
          var acrecimo = Number(valor) + Number(cinco)
          $("#atualizacaoPreco").text(acrecimo)
          $("#vh_painel").text(acrecimo)
          break;
        case 6:
          var acrecimo = Number(valor) + Number(seis)
          $("#atualizacaoPreco").text(acrecimo)
          $("#vh_painel").text(acrecimo)
          break;
        default:
          break;
      }
      if (Number(diferenca) > 7) {
        for (const x of Array(7).keys()) {
          var i = x + 1
          var valoracrescentado = parseFloat(locacao) * i
          var acrecimo = parseFloat(valor) + parseFloat(valoracrescentado)
          $("#atualizacaoPreco").text(acrecimo)
          $("#vh_painel").text(acrecimo)
        }
      }
    }
  } else if (tipoCobranca == "fixa") {
    if (parseInt(horaLocada) >= 1 && parseInt(minutoLocado) > parseInt(tolerancia)){
      var resultado = parseInt(horaLocada) * parseFloat(locacao)
      $("#atualizacaoPreco").text(resultado.toFixed(2))
      $("#vh_painel").text(resultado.toFixed(2))
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