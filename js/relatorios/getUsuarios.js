import { link } from "../setup/index.js"

$(document).ready(function() {
    $.get(link[20], (resultado) => {
        resultado.forEach( (item) => {
            $('#selectUsuarios').append('<option>' + item.nome + '</option>');
        });
    })
})
