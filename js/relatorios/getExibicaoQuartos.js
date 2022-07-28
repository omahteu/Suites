import { link } from "../setup/index.js"

$(document).ready(function() {
    busca_e_exibe_quartos()
    $(document).on('click', '[class="card"]', function() {
        var passo = $(this)
        var passo2 = $(passo[0].children[0])
        var passo3 = $(passo2[0].children[1])
        var passo4 = passo3.text()
        $("#quarto_painel").text(passo4)
        var fm = document.forms['botoes']
        var el = fm.elements
        el[0].setAttribute("name", passo4)
        el[1].setAttribute("name", passo4)
        el[2].setAttribute("name", passo4)
    })
})

async function busca_e_exibe_quartos(){
    const resposta = await fetch(link[17])
    const dados = await resposta.json()
    for(var i = 0; i < dados.length; i++){
        var indice = parseInt(i) + 1
        var tipo_quarto = dados[i].tipo_quarto
        $(".cardBox").append(`<li class="card">`+
                                '<div>'+
                                    '<h3 id="contador">'+
                                        `<span id="hora${indice}">00</span>:<span id="minuto${indice}">00</span>:<span id="segundo${indice}">00</span>`+
                                    '</h3>'+
                                    `<div class="cardName" id="suite">${indice}</div>`+
                                    `<h4 id="tipo_suite${indice}">${tipo_quarto}</h4>`+
                                '</div>'+
                                `<a id="botao_hub">`+
                                    '<div class="iconBx">'+
                                        '<i class="fa fa-gear"></i>'+
                                    '</div>'+
                                '</a>'+
                            '</li>')
    }
}
