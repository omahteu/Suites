import link from "../../setup/index.js"

$(document).ready(function(){
    retorna_valor_caixa()
    retorna_teto_caixa()
    setTimeout( () => {
        let receitaDia = sessionStorage.getItem("diaCaixa")
        let teto = sessionStorage.getItem("teto")
        if (parseFloat(receitaDia) > parseFloat(teto)){
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
        var sum = 0
        e.forEach(el => {
            sum += parseFloat(el.caixa)
        });
        sessionStorage.setItem("diaCaixa", sum)
    })
}

function retorna_teto_caixa(){
    $.get(link[31], (e) => {
        sessionStorage.setItem("teto", e[0].teto)
    })
}
