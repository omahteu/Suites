import { reacao } from "./index.js"

$(document).on("click", "[name=botao]", function () {
    console.log("casa")
    let status = $(this).val()
    let suite = $("#quarto_painel").text()
    reacao(status, suite)
})
