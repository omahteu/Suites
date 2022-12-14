import { link } from "../../setup/index.js"

$(document).on("click", "#salvarAuto", function(){
    let suite = $("#lista_quartos :selected").text()
    let nsuite = String(suite).split("|")[0]
    let placa = $("#lista_placa :selected").text()
    let rele = $("#rele").val()
    let dados = {
        quarto: nsuite,
        placa: placa,
        rele: rele
    }
    $.post(link[1], dados, e => {
        alert("Automação Cadastrada!")
        document.getElementById("formAutomacao").reset()
    })
})