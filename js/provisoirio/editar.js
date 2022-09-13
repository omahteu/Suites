import { inicioModal } from "../setup/camareiras.js"

$(document).on("click", "#editar", function(){
    var id_quarto = $(this).attr("name")

    inicioModal("modau-camareiras")
    var edity = document.forms.namedItem("formEdit").id
    $(`#${edity}`).html(
        '<button type="button" name="botao" class="btn btn-warning" id="camareira_limpeza" value="">Atualizar</button>'
  
    )
    $(`#${edity}`).prepend(
        `<input type="text" value="${id_quarto}">`+
        '<input type="text" placeholder="ip">'+
        '<input type="text" placeholder="rele">'
    )
})