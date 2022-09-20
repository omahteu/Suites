import { link } from "../../setup/index.js"



//var qrt = "1"


/*
    FUNÇÃO PRINCIPAL
*/

export function valoresIniciais(quarto){
    buscaDadosQuarto()
    buscaTabelaPrecos()

    //var horaLocacao = JSON.parse(sessionStorage.getItem("test"))
    var dadosQuarto = JSON.parse(sessionStorage.getItem("dq"))
    var precos = JSON.parse(sessionStorage.getItem("tp"))

    var infosQuatos = dadosQuarto.filter(e => e.numero == quarto)
    //var infos = horaLocacao.filter(e => e.quarto == quarto)

    //console.table(precos)
    //console.table(infos)

    var horas_iniciais_locacao = infosQuatos[0].horas_locacao
    var valor_inicial_locacao = precos[0].valor_locacao

    var valorInicial = Number(valor_inicial_locacao) * Number(horas_iniciais_locacao)

    //console.log(valorInicial)
    $("#valor-quarto").text(valorInicial)
    //$("#parcial_painel").text(valorInicial)
    
}

/*
$(document).ready(function(){
    valorInicial(qrt)
})
*/




/*
    FUNÇÕES COMPLEMENTARES
*/

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
