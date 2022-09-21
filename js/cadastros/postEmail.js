import { link } from "../setup/index.js"

$("#salvarFormPostEmail").click(function() {
    let id_email = "1"
    let usuario = $("#usuarioEmail").val() == "" ? $("#usuarioEmail").attr("placeholder") : $("#usuarioEmail").val()
    let senha = $("#senhaEmail").val() == "" ? $("#senhaEmail").attr("placeholder") : $("#senhaEmail").val()
    let smtp = $("#smtpEmail").val() == "" ? $("#smtpEmail").attr("placeholder") : $("#smtpEmail").val()
    let porta = $("#portaEmail").val() == "" ? $("#portaEmail").attr("placeholder") : $("#portaEmail").val()
    let timeout = $("#timeoutEmail").val() == "" ? $("#timeoutEmail").attr("placeholder") : $("#timeoutEmail").val()
    let destino = $("#emailDestinoEmail").val() == "" ? $("#emailDestinoEmail").attr("placeholder") : $("#emailDestinoEmail").val()
    let contabilidade = $("#emailContabilidadeEmail").val() == "" ? $("#emailContabilidadeEmail").attr("placeholder") : $("#emailContabilidadeEmail").val()
    let gridCheck = $("#autenticacaoEmail").val() == "" ? $("#autenticacaoEmail").attr("placeholder") : $("#autenticacaoEmail").val()
    let dados = {
        usuario: usuario,
        senha: senha,
        smtp: smtp,
        porta: porta,
        timeout: timeout,
        email_destino: destino,
        email_contabilidade: contabilidade,
        autenticacao: gridCheck
    }
    $.ajax({
        url: link[9] + id_email + "/",
        type: "PUT",
        dataType: "json",
        data: dados,
        success:  () => {
            alert("Atualizado")
        }
    })
})
