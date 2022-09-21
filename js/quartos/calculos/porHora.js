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
  var datahoraLocacao = infos[0].datahora
  var agora = hora_atual_segundos()
  var valor = infos[0].valor

  var ms = moment(agora, "HH:mm:ss").diff(moment(datahoraLocacao, "HH:mm:ss"));
  var d = moment.duration(ms);
  var tempoPassado = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");

  var tpFormatado = String(tempoPassado).split(":")
  var adicional = precos[0].valor_adicional

  if (tipoCobranca == "hora") {
    let um = precos[0].vh1
    let dois = precos[0].vh2
    let tres = precos[0].vh3
    let quatro = precos[0].vh4
    let cinco = precos[0].vh5
    let seis = precos[0].vh6
    if (Number(tpFormatado[0]) > Number(quantidadeHoras)) {
      var diferenca = Number(tpFormatado[0]) - Number(quantidadeHoras)
      switch (Number(diferenca)) {
        case 1:
          var acrecimo = Number(valor) + Number(um)
          $("#atualizacaoPreco").text(acrecimo)
          break;
        case 2:
          var acrecimo = Number(valor) + Number(dois)
          $("#atualizacaoPreco").text(acrecimo)
          break;
        case 3:
          var acrecimo = Number(valor) + Number(tres)
          $("#atualizacaoPreco").text(acrecimo)
          break;
        case 4:
          var acrecimo = Number(valor) + Number(quatro)
          $("#atualizacaoPreco").text(acrecimo)
          break;
        case 5:
          var acrecimo = Number(valor) + Number(cinco)
          $("#atualizacaoPreco").text(acrecimo)
          break;
        case 6:
          var acrecimo = Number(valor) + Number(seis)
          $("#atualizacaoPreco").text(acrecimo)
          break;
        default:
          break;
      }
      if (Number(diferenca) > 7) {
        for (const x of Array(7).keys()) {
          var i = x + 1
          var valoracrescentado = parseFloat(adicional) * i
          var acrecimo = parseFloat(valor) + parseFloat(valoracrescentado)
          $("#atualizacaoPreco").text(acrecimo)
        }
      }
    }
  } else if (tipoCobranca == "fixa") {

    var h = $("#hora2").text()
    var m = $("#minuto2").text()
    var s = $("#segundo2").text()
    console.log(h, m, s)

    //var pin = localStorage.getItem("uh")

    var pinHora = Number($("#hora2").text())

    //console.log(typeof pinHora)
    //if (p)


    if (Number(pinHora) > Number(tpFormatado[0])) {
      var inter = Number(pin) - Number(tpFormatado[0])
      var adicional = precos[0].valor_adicional
      //console.log(`add | ${adicional}`)
      //console.log(`intervalo | ${inter}`)
      for (const x of Array(Number(inter)).keys()) {
        var i = x + 1
        var valoracrescentado = parseFloat(adicional) * i
        var acrecimo = parseFloat(valor) + parseFloat(valoracrescentado)
        console.log(acrecimo)
        $("#atualizacaoPreco").text(acrecimo)
      }
      localStorage.setItem("uh", tpFormatado[0])
    }






    /*
        if (Number(hora) > 3){
    
          var inter = Number(hora) - 3
    
          var fixo = precos[0].valor_locacao
          var adicional = precos[0].valor_adicional
    
          for (const x of Array(Number(inter)).keys()) {
            var i = x + 1
    
            var valoracrescentado = parseFloat(adicional) * i
    
            var acrecimo = parseFloat(valor) + parseFloat(valoracrescentado)
            
          }
          console.log(acrecimo)
          $("#atualizacaoPreco").text(acrecimo)
          //caixa.push(acrecimo)
          //console.log(caixa)
        }
        */

  }
}

/*
    FUNÇÕES COMPLEMENTARES
                            */

function buscaHoraLocacao() {
  $.get(link[11], (e) => {
    sessionStorage.setItem("test", JSON.stringify(e))
  })
}

function buscaDadosQuarto() {
  $.get(link[17], (e) => {
    sessionStorage.setItem("dq", JSON.stringify(e))
  })
}

function buscaTabelaPrecos() {
  $.get(link[21], (e) => {
    sessionStorage.setItem("tp", JSON.stringify(e))
  })
}

function buscaLocacoes() {
  $.get(link[11], (e) => {
    sessionStorage.setItem("bl", JSON.stringify(e))
  })
}
