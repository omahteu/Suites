import { link } from "../setup/index.js"

$(document).ready(function() {
    var permanencia = JSON.parse(localStorage.getItem("permanencia"))
    var dados = {
        tempo: permanencia.permanencia,
        nome: permanencia.usuario,
        data: permanencia.hoje
    }
    $.post(link[1], dados, () => {
        console.log("Salvo")
    })
})
