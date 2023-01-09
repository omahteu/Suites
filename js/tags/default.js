export default function padrao(suite) {
    $(`.cardBox .card:nth-child(${suite})`).removeAttr('style')
    $(`[name=${suite}]`).css('display', 'inline-block')
    $("#botao_inferior_um").css('display', 'none')
    $("#botao_inferior_um").val('')
    $("#botao_inferior_dois").css('display', 'none')
    $("#botao_inferior_dois").val('')
    $("#botao_inferior_tres").css('display', 'none')
    $("#botao_inferior_tres").val('')
    $("#selecionar_camareira").css('display', 'none')
    $("#camareira_limpeza").removeAttr('style')
    var nicho1 = document.getElementById('listaProdutosComprados')
    nicho1.innerHTML = ''
    var nicho2 = document.getElementById('listaveiculosguardados')
    nicho2.innerHTML = ''
}
