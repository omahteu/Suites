import { link } from "./index.js"

$(document).ready(function() {
    produtoCodigo()
    $.get(link[16], (resultado) => {
    resultado.forEach( (item) => {
        $('#lista_produto').append('<option>' + item.descricao + '</option>');
    });
    $('#lista_produto').change(function() {
        var option = $('#lista_produto').find(":selected").index()
        var db = option - 1
        $("#descricao_produto").val(resultado[db].descricao)
        $("#valor_unitario_produto").val('R$ ' + resultado[db].valorunitario)
        $('#quantidade_produto').keyup(function() {
            var qtd = $(this).val()
            var total = parseFloat(resultado[db]['valorunitario']) * parseInt(qtd)
            $("#total_produto").val('R$ ' + total)
        });
    });
})
})

function produtoCodigo(){
    $('#codigo_produto').keypress( (event) => {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            $.get(link[16], (resultado) => {
                var db = 0
                $("#descricao_produto").val(resultado[db].descricao)
                $("#valor_unitario_produto").val('R$ ' + resultado[db].valorunitario)
                $('#quantidade_produto').keyup(function() {
                    var qtd = $(this).val()
                    var total = Number(resultado[db]['valorunitario']) * Number(qtd)
                    $("#total_produto").val('R$ ' + total)
                });
            })
        }
    });
}
