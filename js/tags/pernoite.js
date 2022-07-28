import { hora_atual } from "../geradores/hora.js"

export function pernoite(q, t, x, y, z) {
    $("#quarto" + q).css({
        "background-color": "#8B008B",
        "opacity": 0.5})
    
    $("#tempo").css('margin-top', '-30px')

    $("[id=botaoq" + q + "]").css('visibility', 'hidden')

    var hora = hora_atual()
    $("[id=tempo]").text(hora)

    $("#" + x).css('visibility', 'visible')
    $("#" + x).val('Alterar P/ Locação')

    $("#" + y).css('visibility', 'visible')
    $("#" + y).val('Encerrar')

    if(t != 'btn pernoite'){
        $("#" + z).css('visibility', 'hidden')
        $("#" + z).val('Cancelar Reserva')
    } 

    var tipoQuarto = $('#tipo' + q).text()

    if(tipoQuarto == "Ar"){
        $("#valor-quarto").text('')
    } else if(tipoQuarto == "Ventilador"){
        $("#valor-quarto").text('')
    }
    $("#numquarto").text(q)
    $("#tipo").text('pernoite')
    $("#intervalo").text(x + "," + y + "," + z)
    $("#entrada").text(String(hora) + ':' + String(minutos) + 'h')
    $("#imagemQuarto" + q).css('border', '2px solid rgb(139, 0, 139)')
    $("#imagemQuarto" + q).css('box-shadow', 'inset 0 0 1em rgb(139, 0, 139), 0 0 1em #000')
}
 
// adicionar mais um parâmetro
// 