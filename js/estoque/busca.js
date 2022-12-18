import { link } from "../setup/index.js"

$(document).on("click", "#BuscaInfoProduto", function(){
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
    $.get(link[16], e => {
        var dados = e.filter(el => el.codigo == codigo_pesquisado)
        dados.forEach(i => {
            $("#idx").text(i.id)
            $("#codigoProduto").text(codigo_pesquisado)
            $("#descricaoProduto").text(i.descricao)
            $("#quantidadex").text(i.quantidade)
            $("#valorUnitarioProduto").text(i.valorunitario)
            $("#categoriaProduto").text(i.categoria)
            $("#datax").text(i.data)

        });
    })
    $(this).css("display", "none")
    $("#acao_movimentacao").css("display", "inline")
    $("#quantidadeProduto").css("display", "inline")
    $("#SalvarMovimentoEstoque").css("display", "inline")
})
