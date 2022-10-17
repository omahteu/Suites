import { link } from "../../setup/index.js"
import { abrirMenu } from "../exibicoes/menu.js"

$(document).on("click", "#scet", function () {
    abrirMenu("modau-menu")
    var menu = document.forms.namedItem("menu").id
    $(`#${menu}`).html(
        '<button type="button" name="botao" class="btn btn-success" id="atualizar_tempo">Atualizar</button>'
  
    )
    $(`#${menu}`).prepend(
        '<select id="tip_tempo">'+
            '<option hidden>Tempos</option>'+
            '<option>Desistência</option>'+
            '<option>Faxina</option>'+
            '<option>Limpeza</option>'+
            '<option>Manutenção</option>'+
            '<option>Troca de Quarto</option>'+
        '</select>'+
        '<input type="text" id="novo_tempo" placeholder="Novo Tempo" required>'
    )
})


/*
    var tempo = $("#escolhe_tempo").val()
    var valor = $(`#${tempo}`).val()

    var ficha = {
        tempo: tempo,
        valor: valor
    }
    
    sessionStorage.setItem(tempo, JSON.stringify(ficha))

    var cde = JSON.parse(sessionStorage.getItem(tempo))
    var dsfg = cde["tempo"]

    

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: `${link[19]}1/`,
        type: 'PATCH',
        data: JSON.stringify({ dsfg: valor }),
        success: function () {
            console.log("Troca Com Sucesso!");
        },
        error: function (textStatus, errorThrown) {
            console.log(`ERRO: ${textStatus} - ${errorThrown}`)
        }
    })
*/