import { link } from "../../setup/index.js"

$(document).on("click", "#salvarPernoite", function(){
    let auto = $("#pernoiteauto").is(":checked")
    let permanencia = $("#permanencia").val()
    let inicio = $("#inicio").val()
    let fim = $("#fim").val()
    let tipo = $("#tipoPernoite :selected").text()
    $.ajax({
        url: `${link[35]}2/`,
        type: 'PUT',
        dataType: 'json',
        data: {
            auto: auto == "" ? $("#pernoiteauto").attr('placeholder') : auto,
            permanencia: permanencia == "" ? $("#permanencia").attr('placeholder') : permanencia,
            inicio: inicio == "" ? $("#inicio").attr('placeholder') : inicio,
            fim: fim == "" ? $("#fim").attr('placeholder') : fim,
            tipo: tipo
        },
        success: function() {
            alert("Valores Salvos!")
            location.reload()
        }
    })
})