import { link } from "../setup/index.js"

$(document).on("click", "#salvarAuto", function(){
    var quarto = $("#lista_quartos").val()
    var placa = $("#lista_placa").val()
    var rele = $("#rele").val()
    var autos = {
        quarto: quarto,
        placa: placa,
        rele: rele
    }
    $.post(link[27], autos, () => {
        alert("Automação Ativada!")
        location.reload()
    })
})
