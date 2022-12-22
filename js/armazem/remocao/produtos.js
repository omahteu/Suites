import { leituraProdutos } from "../leitura/produtos.js"
import link from "../../setup/index.js"

$(document).on("click", "#remocaoProduto", function(){
	var id = $(this).attr("name")
	var motivo = prompt('Motivo da retirada do produto:')
	if (motivo == null){
		alert('Produto não excluido!\nÉ necessário o motivo da exclusão do produto!')
	} else if (motivo.length == 0){
		alert('Produto não excluido!\nÉ necessário o motivo da exclusão do produto!')
	} else {
		$.ajax({
			url: link[5] + id,
			method: 'DELETE',
			dataType: 'json',
			success:  () => {
				alert('Produto Excluído!')
				leituraProdutos()
			}
		})
	}
})
