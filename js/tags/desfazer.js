export default function desfazer(q, x, y, z) {
    $(`.cardBox .card:nth-child(${q})`). removeAttr('style')
    $(`[name=${q}]`).css('display', 'inline-block')
    $(".acoes1"). removeAttr('style')
    $(".acoes1").val('')
    $(".acoes2"). removeAttr('style')
    $(".acoes2").val('')
    $(".acoes3"). removeAttr('style')
    $(".acoes3").val('')
    $("#quarto_painel").text('0')
    $("#tipo").text('livre')
    $("#entrada").text('0:0')
    $("#valor-quarto").text('0')
    $("#intervalo").text("0")
    $("#selecionar_camareira").css('display', 'none')
    $("#camareira_limpeza").removeAttr('style')
    var prateleiraResultado = document.getElementById('listaProdutosComprados')
	prateleiraResultado.innerHTML = '';
    var garagemResultado = document.getElementById('listaveiculosguardados')
	garagemResultado.innerHTML = '';
}
