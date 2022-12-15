import { link } from "../../setup/index.js"

$(document).on("click", "#atualizar_auto", () => {
    var quarto = $("#at_quarto").val()
    var ip = $("#at_ip").val()
    var rele = $("#at_rele").val()
    $.get(link[27], (e) =>{
        var dados = e.filter(e => e.quarto == quarto)
        var id = dados[0].id
        $.ajax({
            url: link[27] + id + "/",
            type: "PUT",
            dataType: "json",
            data: {
                quarto: quarto,
                placa: ip,
                rele: rele
            },
            success: () => {
                alert("Atualizado!")
                location.reload()
            }
        })
    })
})
