import { link } from "../../setup/index.js"

$(document).on("click", "#salvarUsuario", function(){
    let nome = $("#usuario_nome").val()
    let senha = $("#usuario_senha").val()
    let permissao = $("usuario_permissao").val()
    let dados = {
        nome: nome,
        senha: senha,
        status: permissao
    }
    $.post(link[20], dados, e => {
        alert("Usuário Cadastrado!")
        document.getElementById("formUsuario").reset()
    })
})
