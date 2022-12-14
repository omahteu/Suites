import { link } from "../../setup/index.js"

$(document).on("click", "#salvarPlaca", () => {
    let nome = $("#placa_nome").val()
    let ip = $("#placa_ip").val()
    let dados = {
        nome: nome,
        ip: ip,
    }
    $.post(link[28], dados, () => {
        alert("Placa Registrada!")
        document.getElementById("formPlaca").reset()
    })
})
