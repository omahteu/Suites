import { link } from "../setup/index.js"

$(document).ready(function() {
    $.get(link[3], (resultado) => {
        resultado.forEach( (item) => {
            $('#comboCamareiras').append('<option>' + item.nome + '</option>');
            $('#selecionaCamareira').append('<option>' + item.nome + '</option>');
            $("#selecionar_camareira").append('<option>' + item.nome + '</option>')
        });
    })
})
