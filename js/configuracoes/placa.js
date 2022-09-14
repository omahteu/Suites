import { link } from "../setup/index.js"

$(document).on("click", "#salvarPlaca", function(){
    var nome = $("#nome").val()
    var ip = $("#ip").val()
    var dados = {
        nome: nome,
        ip: ip
    }
    $.post(link[28], dados, () => {
        alert("Placa Registrada!")
        location.reload()
    })
})
