$("#BuscaInfoProduto").click(function(){
    let codigo_pesquisado = $("#codigoProduto").val()
    $.get("https://demomotelapi.herokuapp.com/produtos/", function(e){
        var dados = e.filter(el => el.codigo == codigo_pesquisado)
        dados.forEach(elemento => {
            $("#idx").text(elemento.id)
            $("#codigoProduto").text(codigo_pesquisado)
            $("#descricaoProduto").text(elemento.descricao)
            $("#quantidadex").text(elemento.quantidade)
            $("#valorUnitarioProduto").text(elemento.valorunitario)
            $("#categoriaProduto").text(elemento.categoria)
            $("#datax").text(elemento.data)

        });
    })
    $(this).css("display", "none")
    $("#acao_movimentacao").css("display", "inline")
    $("#quantidadeProduto").css("display", "inline")
    $("#SalvarMovimentoEstoque").css("display", "inline")
})