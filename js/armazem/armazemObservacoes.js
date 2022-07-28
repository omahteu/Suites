import { link } from "../setup/index.js"

$("#registrar").click(function() {
    registroObs()
})

function registroObs(){
    var quarto =  $("#quarto_painel").text()
    var pessoas = $("#pes").val()
    var observacao = $("#obs").val()
    dados = {
        quarto: quarto,
        pessoas: pessoas,
        texto: observacao
    }
    $.post(link[14], dados, () => {
        alert('OBS')
        exibirObs()
    })
    document.getElementById('painel').reset()
}

function exibirObs(){
    $.get(link[14], (retorno) => {
        var nQuarto =  $("#quarto_painel").text()
        var dados = retorno.filter(quartos => quartos.quarto == nQuarto)
        dados.forEach(elemento => {
            $("#numquarto").text(elemento.quarto)
            $("#pes").val(elemento.pessoas)
            $("#muralObs").val(elemento.texto)
        });
    })
}
