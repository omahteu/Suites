import { reacao } from "./index.js"

$(document).on("click", "[name=botao]", function () {
    let status = $(this).val()
    let suite = $("#quarto_painel").text()
    reacao(status, suite)
})
