import { link } from "../../setup/index.js"

$(document).on("click", "#scet", function(){
    var tempo = $("#escolhe_tempo").val()
    //let valor = $(`#${tempo}`).val()

    var dados = [tempo, "casa"]
    var dds = JSON.stringify(dados)


    $.ajax({
        url: link[19] + "1" + "/",
        type: 'PATCH',
        dataType: 'json',
        data: dds,
        success: function() {
            alert("Valores Salvos!")
            location.reload()
        }
    })
})
