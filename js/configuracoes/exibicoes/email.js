import { link } from "../../setup/index.js"

$(document).ready(function(){
    dados_email()
})

async function dados_email(){
    const req = await fetch(link[9])
    const res = await req.json()
    res.forEach(e => {
        $("#email_usuario").attr("placeholder", e.usuario)
        $("#email_senha").attr("placeholder", e.senha)
        $("#email_smtp").attr("placeholder", e.smtp)
        $("#email_porta").attr("placeholder", e.porta)
        $("#email_timeout").attr("placeholder", e.timeout)
        $("#email_destino").attr("placeholder", e.email_destino)
        $("#email_contabilidade").attr("placeholder", e.email_contabilidade)
        let autenticacao = $("#email_autenticação")
        e.autenticacao == "0" ? autenticacao.val("nao") : autenticacao.val("sim")
    });
}