
var alerta = alert('Escolha se ultilizará o fundo de caixa ou Produtos sem estoque!')

$(document).on("click", "#abrirCaixa", function(){
    const fundo_caixa = $("#usarFundoCaixa").val()
    const produtos_off = $("#usarProdutosSemCaixa").val()
    fundo_caixa == "Usar Fundo de Caixa" ? alerta : ""
    produtos_off == "usar_produtos_sem_caixa" ? alerta : ""
})