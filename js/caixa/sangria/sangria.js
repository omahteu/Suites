import { link } from "../../setup/index.js"

$(document).ready(function(){
    retorna_valor_caixa()
    retorna_teto_caixa()
    setTimeout( () => {
        let receitaDia = sessionStorage.getItem("diaCaixa")
        let teto = sessionStorage.getItem("teto")


        if (parseFloat(receitaDia).toFixed(2) > parseFloat(teto).toFixed(2)){
            alert("Realizar Sangria!")
            $("#valor_emcaixa").css("color", "red")
            $(".sangria").css("visibility", "visible")
        } else {
            $("#valor_emcaixa").css("color", "green")
        }
    }, 1000)
})

function retorna_valor_caixa(){
    $.get(link[30], (e) => {
        sessionStorage.setItem("diaCaixa", e[0].caixa)
    })
}

function retorna_teto_caixa(){
    $.get(link[31], (e) => {
        sessionStorage.setItem("teto", e[0].teto)
    })
}
