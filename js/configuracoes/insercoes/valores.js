import { link } from "../../setup/index.js"

$(document).on("click", "#SalvarConfigValores", () => {
    var valorLocacao = $("#valorLocacaoQuarto").val()
    var valor1hora = $("#v1hQuarto").val()
    var valor2hora = $("#v2hQuarto").val()
    var valor3hora = $("#v3hQuarto").val()
    var valor4hora = $("#v4hQuarto").val()
    var valor5hora = $("#v5hQuarto").val()
    var valor6hora = $("#v6hQuarto").val()
    $.ajax({
        url: link[21] + "3" + "/",
        type: 'PUT',
        dataType: 'json',
        data: {
            valor_locacao: valorLocacao == "" || isNaN(valorLocacao) == true ? $("#valorLocacaoQuarto").attr('placeholder') : valorLocacao,
            vh1: valor1hora == "" || isNaN(valor1hora) == true ? $("#v1hQuarto").attr('placeholder') : valor1hora,
            vh2: valor2hora == "" || isNaN(valor2hora) == true ? $("#v2hQuarto").attr('placeholder') : valor2hora,
            vh3: valor3hora == "" || isNaN(valor3hora) == true ? $("#v3hQuarto").attr('placeholder') : valor3hora,
            vh4: valor4hora == "" || isNaN(valor4hora) == true ? $("#v4hQuarto").attr('placeholder') : valor4hora,
            vh5: valor5hora == "" || isNaN(valor5hora) == true ? $("#v5hQuarto").attr('placeholder') : valor5hora,
            vh6: valor6hora == "" || isNaN(valor6hora) == true ? $("#v6hQuarto").attr('placeholder') : valor6hora,
        },
        success: function() {
            alert("Valores Salvos!")
            location.reload()
        }
    })
})
