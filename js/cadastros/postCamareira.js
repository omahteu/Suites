import { data_atual } from "../geradores/data.js"
import { link } from "../setup/index.js"
import { gera_id } from "../geradores/id.js"

$("#salvarFormPostCamareira").click(function() {
    let camareira = $("#nomeCamareira").val()
    var dados = {
        nome: camareira,
        registro: gera_id()
    }
    $.post(link[3], dados, () => {
        alert("Camareira Registrado!")
        document.getElementById('formCadastros').reset()
    })
})

$("#camareira_limpeza").click(function() {
    var quarto = $("#quarto_painel").text()
    var hora = $(`#hora${quarto}`).text()
    var minutos = $(`#minuto${quarto}`).text()
    var segundos = $(`#segundo${quarto}`).text()
    var permanencia = hora + ":" + minutos + ":" + segundos
    var nome = $('#selecionar_camareira').find(":selected").val()
    var quarto = $("#quarto_painel").text()
    var codigo = localStorage.getItem(`codigo${quarto}`)
    let dataAtual = data_atual()
    var dados = {
        codigo: codigo,
        quarto: quarto,
        camareira: nome,
        dia: dataAtual
    }
    var dados2 = {
        codigo: codigo,
        quarto: quarto,
        tempo: permanencia
    }
    $.post(link[6], dados,  () => {})
    $.post(link[12], dados2, () => {})
})

$("#limparFormPostCamareira").click(function(){
    document.getElementById('formCadastros').reset()
})
