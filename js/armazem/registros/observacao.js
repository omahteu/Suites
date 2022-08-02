import { leituraObservacoes } from "../leitura/observacao.js"
import { link } from "../../setup/index.js"

export function registroObservacao(){
    var quarto =  $("#quarto_painel").text()
    var pessoas = $("#pes").val()
    var obs = $("#obs").val()
    dados = {
        quarto: quarto,
        pessoas: pessoas,
        texto: obs
    }
    $.post(link[14], dados, () => {
        alert('OBS')
        leituraObservacoes()
    })
    document.getElementById('painel').reset()
}
