import { data_atual } from "../../geradores/data.js"
import { link } from "../../setup/index.js"

$(document).on("click", "#salvarProduto", function(){
    let codigo = $("#codigoProduto").val()
    let descricao = $("#descricaoProduto").val()
    let valor = $("#valorUnitarioProduto").val()
    var valor_formatadao = String(valor).replace(",", ".")
    let quantidade = "0"
    let categoria = $("#listar_categorias :selected").text()
    let dataAtual = data_atual()
    var dados = {
            codigo: codigo,
            descricao: descricao,
            valorunitario: valor_formatadao,
            quantidade: quantidade,
            categoria: categoria,
            data: dataAtual
    }
    $.post(link[16], dados, () => {
        alert("Produto Registrado!")
        document.getElementById('formProdutos').reset()
    })
})
