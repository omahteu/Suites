import { inicioModal } from "../../setup/camareiras.js"

$(document).on("click", "#editar", function(){
    var id_quarto = $(this).attr("name")

    inicioModal("modau-camareiras")
    var edity = document.forms.namedItem("formEdit").id
    $(`#${edity}`).html(
        '<button type="button" name="botao" class="btn btn-success" id="atualizar_auto">Atualizar</button>'
  
    )
    $(`#${edity}`).prepend(
        `<input type="text" value="${id_quarto}" id="at_quarto">`+
        '<input type="text" id="at_ip"placeholder="ip">'+
        '<input type="text" id="at_rele" placeholder="rele">'
    )
})
