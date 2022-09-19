import { hora_atual_segundos } from "./js/geradores/hora.js"
import { link } from "./js/setup/index.js"

buscaHoraLocacao()
buscaDadosQuarto()
buscaTabelaPrecos()
buscaLocacoes()

var qrt = "1"


function atualizaValores(quarto){

  var horaLocacao = JSON.parse(sessionStorage.getItem("test"))

  var infos = horaLocacao.filter(e => e.quarto == quarto)

  var datahoraLocacao = infos[0].datahora
  var valor = infos[0].valor

  var agora = hora_atual_segundos()

  var infoQuartos = JSON.parse(sessionStorage.getItem("dq"))

  var filtroCobranca = infoQuartos.filter(e => e.numero == quarto)

  var tipoCobranca = filtroCobranca[0].cobranca
  var quantidadeHoras = filtroCobranca[0].horas_locacao

  var ms = moment(agora, "HH:mm:ss").diff(moment(datahoraLocacao, "HH:mm:ss"));
  var d = moment.duration(ms);
  var tempoPassado = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");

  var tpFormatado = String(tempoPassado).split(":")

  var precos = JSON.parse(sessionStorage.getItem("tp"))


  if (tipoCobranca == "hora"){
    let um = precos[0].vh1
    let dois = precos[0].vh2
    let tres = precos[0].vh3
    let quatro = precos[0].vh4
    let cinco = precos[0].vh5
    let seis = precos[0].vh6

    if (Number(tpFormatado[0]) > Number(quantidadeHoras)) {

      var diferenca = Number(tpFormatado[0]) - Number(quantidadeHoras)
      console.log(diferenca)

      switch (Number(diferenca)) {
        case 1:

          var acrecimo = Number(valor) + Number(um)
          $("#valor-quarto").text(acrecimo)
          $("#preco_quarto").text(acrecimo)
          $("#parcial_painel").text(acrecimo)
          break;

        case 2:

          var acrecimo = Number(valor) + Number(dois)
          $("#valor-quarto").text(acrecimo)
          $("#preco_quarto").text(acrecimo)
          $("#parcial_painel").text(acrecimo)
          break;

        case 3:

          var acrecimo = Number(valor) + Number(tres)
          $("#valor-quarto").text(acrecimo)
          $("#preco_quarto").text(acrecimo)
          $("#parcial_painel").text(acrecimo)
          break;

        case 4:

          var acrecimo = Number(valor) + Number(quatro)
          $("#valor-quarto").text(acrecimo)
          $("#preco_quarto").text(acrecimo)
          $("#parcial_painel").text(acrecimo)
          break;

        case 5:

          var acrecimo = Number(valor) + Number(cinco)
          $("#valor-quarto").text(acrecimo)
          $("#preco_quarto").text(acrecimo)
          $("#parcial_painel").text(acrecimo)
          break;

        case 6:

          var acrecimo = Number(valor) + Number(seis)
          $("#valor-quarto").text(acrecimo)
          $("#preco_quarto").text(acrecimo)
          $("#parcial_painel").text(acrecimo)
          break;

        default:
          break;
      }
    }
  }
}


$(document).ready(function () {


  atualizaValores(qrt)
/*
  setInterval(() => {

    var numeroLocacoes = JSON.parse(sessionStorage.getItem("bl"))
    
    numeroLocacoes.forEach(item => {
      
      var horaLocacao = JSON.parse(sessionStorage.getItem("test"))

      var infos = horaLocacao.filter(e => e.quarto == item.quarto)

      infos.forEach(el => {

        var agora = hora_atual_segundos()

        var ms = moment(agora, "HH:mm:ss").diff(moment(el.datahora, "HH:mm:ss"));
        var d = moment.duration(ms);
        var s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");

        var infoQuartos = JSON.parse(sessionStorage.getItem("dq"))

        infoQuartos.forEach(tipo => {
          
          //console.log(s)
        });

        
      });


      
    });


    



    //var quarto = e[i].quarto


    //var infos = e.filter(e => e.quarto == quarto)
    


    
    
    

    var dadosQuarto = JSON.parse(sessionStorage.getItem("dq"))

    var tabelaPrecos = JSON.parse(sessionStorage.getItem("tp"))



    


    var padrao = "05:45:12"
    
    var quarto = "1"
    var cobranca = "hora"
    var valor = "120"



    $.get(link[21], (e) => {

      //var dados = e.filter(e => e.quarto == quarto)


      if (cobranca == "hora") {
        //console.log("Cobrar por hora")

        let um = e[0].vh1
        let dois = e[0].vh2
        let tres = e[0].vh3
        let quatro = e[0].vh4
        let cinco = e[0].vh5
        let seis = e[0].vh6
        //console.log(um, dois, tres, quatro, cinco, seis)

        const horasIniciaisLocacao = "2"

        //const horaLocacao = String(s).split(":")

        if (Number(horaLocacao[0]) > Number(horasIniciaisLocacao)) {

          switch (Number(horasIniciaisLocacao)) {
            case 1:

              var acrecimo = Number(valor) + Number(um)
              $("#valor-quarto").text(acrecimo)
              $("#preco_quarto").text(acrecimo)
              $("#parcial_painel").text(acrecimo)

              //console.log(acrecimo)

              break;

            case 2:

              var acrecimo = Number(valor) + Number(dois)
              $("#valor-quarto").text(acrecimo)
              $("#preco_quarto").text(acrecimo)
              $("#parcial_painel").text(acrecimo)
              //console.log(acrecimo)

              break;

            case 3:

              var acrecimo = Number(valor) + Number(tres)
              $("#valor-quarto").text(acrecimo)
              $("#preco_quarto").text(acrecimo)
              $("#parcial_painel").text(acrecimo)
              //console.log(acrecimo)

              break;

            case 4:

              var acrecimo = Number(valor) + Number(quatro)
              $("#valor-quarto").text(acrecimo)
              $("#preco_quarto").text(acrecimo)
              $("#parcial_painel").text(acrecimo)
              //console.log(acrecimo)

              break;

            case 5:

              var acrecimo = Number(valor) + Number(cinco)
              $("#valor-quarto").text(acrecimo)
              $("#preco_quarto").text(acrecimo)
              $("#parcial_painel").text(acrecimo)
              //console.log(acrecimo)

              break;

            case 6:

              var acrecimo = Number(valor) + Number(seis)
              $("#valor-quarto").text(acrecimo)
              $("#preco_quarto").text(acrecimo)
              $("#parcial_painel").text(acrecimo)
              //console.log(acrecimo)

              break;

            default:
              break;
          }
        }

      }
    })

  }, 1000)

*/

})


function buscaHoraLocacao(){
  $.get(link[11], (e) => {
    sessionStorage.setItem("test", JSON.stringify(e))
  })
}

function buscaDadosQuarto(){
  $.get(link[17], (e) => {
    sessionStorage.setItem("dq", JSON.stringify(e))
  })
}

function buscaTabelaPrecos(){
  $.get(link[21], (e) => {
    sessionStorage.setItem("tp", JSON.stringify(e))
  })
}

function buscaLocacoes(){
  $.get(link[11], (e) => {
    sessionStorage.setItem("bl", JSON.stringify(e))
  })
}
