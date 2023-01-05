import { reacao } from "./index.js"

$(document).on("click", ".acoes1 .acoes2 .acoes3", function () {
    let status = $(this).val()
    console.log('sedf')
    let suite = $("#quarto_painel").text()
    reacao(status, suite)
})
