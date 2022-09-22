$("#BuscaInfoProduto").click(function(){

    var form = document.forms.namedItem("formCadastroProdutos").id
    console.log(form)

    $("#formCadastroProdutos").append(
        `<div class="control-group">`+
            `<div class="controls">`+
                `<h5 class="texto_produto" id="descricaoProduto"></h5>`+
            `</div>`+
        `</div>`+

        `<div class="control-group">`+
            `<div class="controls">`+
                `<h5 class="texto_produto" id="valorUnitarioProduto"></h5>`+
            `</div>`+
        `</div>`+

        `<div class="control-group">`+
            `<div class="controls">`+
                `<h5 class="texto_produto" id="categoriaProduto"></h5>`+
            `</div>`+
        `</div>`+

        `<div class="control-group">`+
            `<div class="controls">`+
                `<select name="" id="acao_movimentacao">`+
                    `<option value="" hidden>Ação</option>`+
                    `<option value="entrada">Entrada</option>`+
                    `<option value="saida">Saída</option>`+
                `</select>`+
            `</div>`+
        `</div>`+

        `<div class="control-group">`+
            `<div class="controls">`+
                `<input type="text" id="quantidadeProduto" placeholder="Quantidade">`+
            `</div>`+
        `</div>`
    )


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