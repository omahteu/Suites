import { inicioMenu } from "../../../setup/menu.js"

$(document).on("click", "#nova_categoria", function(){
    let campo = document.getElementById("FormMain")
    campo.innerHTML = ""
    inicioMenu("modau-menu")
    var menu = document.forms.namedItem("FormMain").id
    $(`#${menu}`).prepend(
        `<input type="text" id="add_categoria" placeholder="Categoria">`+
        `<button type="button" class="btn btn-success" id="cadastrar_categoria">Cadastrar</button>`
    )
})
