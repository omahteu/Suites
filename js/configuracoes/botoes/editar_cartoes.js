import { abrirMenu } from "../exibicoes/menu.js"

$(document).on("click", "#editar_cartoes", function(){
    abrirMenu("modau-menu")
    var menu = document.forms.namedItem("menu").id
    $(`#${menu}`).html(
        '<button type="button" class="btn btn-success" id="atualizar_cartoes">Atualizar</button>'
    )
    $(`#${menu}`).prepend(
        '<input type="text" id="nova_taxa" placeholder="Nova Taxa" required>'
    )
})
