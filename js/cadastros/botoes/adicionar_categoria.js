import { link } from "../../setup/index.js"

$(document).on("click", "#cadastrar_categoria", function(){
    var categoria = $("#add_categoria").val()
    $.post(link[29], {categoria: categoria}, () => {
        alert("Categorias Registrada!")
        location.reload()
    })
})