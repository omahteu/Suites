import { link } from "./index.js"

$(document).ready(function() {
    $.get(link[18], (e) =>{
        $("#tabela_emvigor").text(e[0].tabela)
    })
})
