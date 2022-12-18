import { link } from "../../setup/index.js"

$(document).on("click", "#salvarEmail", function(){
    let usuario = $("#email_usuario").val()
    let senha = $("#email_senha").val()
    let smtp = $("#email_smtp").val()
    let porta = $("#email_porta").val()
    let timeout = $("#email_timeout").val()
    let destino = $("#email_destino").val()
    let contabilidade = $("#email_contabilidade").val()
    let dados = {
        usuario: usuario,
        senha: senha,
        smtp: smtp,
        porta: porta,
        timeout: timeout,
        email_destino: destino,
        email_contabilidade: contabilidade
    }
    $.ajax({
        url: `${link[9]}1/`,
        type: "PUT",
        dataType: "json",
        data: dados,
        success: () => {
            alert("Alterações Realizadas!")
            location.reload()
        }
    })
})
