import { link } from "../../setup/index.js"

$(document).ready(function() {
    relatorioEmail()
})

async function relatorioEmail(){
    const resposta = await fetch(link[9])
    const dados = await resposta.json()
    dados.forEach(elemento => {
        $("#usuarioEmail").attr("placeholder", elemento.usuario)
        $("#senhaEmail").attr("placeholder", elemento.senha)
        $("#smtpEmail").attr("placeholder", elemento.smtp)
        $("#portaEmail").attr("placeholder", elemento.porta)
        $("#timeoutEmail").attr("placeholder", elemento.timeout)
        $("#emailDestinoEmail").attr("placeholder", elemento.email_destino)
        $("#emailContabilidadeEmail").attr("placeholder", elemento.email_contabilidade)
        $("#autenticacaoEmail").attr("placeholder", elemento.autenticacao)
    });
}