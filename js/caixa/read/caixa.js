import { link } from "../../setup/index.js"

$(document).ready(function(){
    $.get(link[30], (e) =>{
        let valor = e[0].caixa
        $("#valor_emcaixa").text(parseFloat(valor).toFixed(2))
    })
})
