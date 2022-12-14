import { link } from "../../setup/index.js"
import { gera_id } from "../../geradores/id.js"

$(document).on("click", "#salvarCamareira", function() {
    let camareira = $("#nomeCamareira").val()
    var dados = {
        nome: camareira,
        codigo: gera_id()
    }
    $.post(link[3], dados, () => {
        alert("Camareira Registrada!")
        document.getElementById('formCamareira').reset()
    })
})
