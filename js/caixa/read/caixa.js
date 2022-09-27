import { link } from "../../setup/index.js"

$(document).ready(function(){
    $.get(link[30], (e) =>{
        let pags = JSON.parse(localStorage.getItem("tabPag"))
        let forma = pags.forma
        if (forma.slice(0, 3) != "Cré"){
            let caixa = parseFloat(pags.valor) + parseFloat(e[0].caixa)
            $("#valor_emcaixa").text(parseFloat(caixa).toFixed(2))
        }
    })
})
