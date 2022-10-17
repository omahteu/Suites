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
