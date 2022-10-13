import { link } from "../../setup/index.js"

$(document).on("click", "#scet", function(){
    let tempo = $("#escolhe_tempo").val()
    //let valor = $(`#${tempo}`).val()

    var dados = {
        tempo : valor
    }

    console.log(dados)
/*
    $.ajax({
        url: link[19] + "1" + "/",
        type: 'PATCH',
        dataType: 'json',
        data: {tempo: valor},
        success: function() {
            alert("Valores Salvos!")
            location.reload()
        }
    })*/
})
