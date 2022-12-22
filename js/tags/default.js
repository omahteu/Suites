export function padrao(suite){
    $(`.cardBox .card:nth-child(${suite})`). removeAttr('style')
    $(`[name=${suite}]`).css('display', 'inline-block')
    $(".acoes1"). removeAttr('style')
    $(".acoes1").val('')
    $(".acoes2"). removeAttr('style')
    $(".acoes2").val('')
    $(".acoes3"). removeAttr('style')
    $(".acoes3").val('')
    $("#selecionar_camareira").css('display', 'none')
    $("#camareira_limpeza").removeAttr('style')
    var nicho1 = document.getElementById('listaProdutosComprados')
	nicho1.innerHTML = ''
    var nicho2 = document.getElementById('listaveiculosguardados')
	nicho2.innerHTML = ''
}
