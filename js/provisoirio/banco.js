$(document).on("click", "#salvarPlaca", function(){
    var nome = $("#nome").val()
    var ip = $("#ip").val()
    var dados = {
        nome: nome,
        ip: ip
    }
    localStorage.setItem("placa", JSON.stringify(dados))
    location.reload()
})

$(document).on("click", "#salvarAuto", function(){
    var quarto = $("#lista_quartos").val()
    var placa = $("#lista_placa").val()
    var rele = $("#rele").val()
    var autos = {
        quarto: quarto,
        placa: placa,
        rele: rele
    }
    localStorage.setItem("autos", JSON.stringify(autos))
    location.reload()
})