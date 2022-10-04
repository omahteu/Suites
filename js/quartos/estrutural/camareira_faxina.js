export function camareira_faxina(){
    $("#titulo_menu").text("Menu")
    var fm = document.forms.namedItem("menu").id
    $(`#${fm}`).append(
        `<select id="camareiras">`+
            `<option hidden>Camareiras</option>`+
        `</select>`+
        '<input type="button" class="btn btn-warning" name="botao" value="Selecionar">'
    )
}
