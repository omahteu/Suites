export function camareiras(){
    $("[name=1]").css('display', 'none')
    $(".acoes1").css('display', 'none')
    $(".acoes2").css('display', 'none')
    $(".acoes3").css('display', 'none')
    $("#selecionar_camareira").css('display', 'inline-block')
    $("#camareira_limpeza").css({
        "display": "inline-block",
        "margin-top": "-10px"
    })
    $("#camareira_limpeza").val('OK')
}