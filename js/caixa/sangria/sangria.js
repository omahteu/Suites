import { link } from "../../setup/index.js"

$(document).on("click", "#retirarSangria", function() {
    var receitaDia = sessionStorage.getItem("diaCaixa")
    console.log(receitaDia)
})

$(document).ready(function(){
    retorna_valor_caixa()
})

function retorna_valor_caixa(){
    $.get(link[30], (e) => {
        sessionStorage.setItem("diaCaixa", e[0].caixa)
    })
}

function retorna_teto_caixa(){
    
}
