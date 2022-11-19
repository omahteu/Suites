import { link } from "../../setup/index.js"

export function leituraProdutos(){
	$.get(link[5], (retorno) => {
		var numero_quarto =  $("#quarto_painel").text()
		var prateleira = document.getElementById('listaProdutosComprados');
		prateleira.innerHTML = '';
		var dados = retorno.filter(quartos => quartos.quarto == numero_quarto)
		dados.forEach( (resultado) => {
			var id = resultado.id
			var descricao = resultado.descricao
			var quantidade = resultado.quantidade
			var valorUnitario = resultado.valor_unitario
			var valorTotal = resultado.valor_total
			console.log(valorTotal)
			prateleira.innerHTML += '<tr>'+
										'<td>'+ descricao + '</td>' +
										'<td>'+ quantidade + '</td>' +
										`<td>R$${valorUnitario}</td>`+
										`<td>R$${valorTotal}</td>`+
										`<td><button type="button" id="remocaoProduto" name="${id}" class="btn btn-danger">Remover</button></td>`+
									'</tr>';
		})
	})
}

export function leituraProdutosPlus(identificador){
	$.get(link[5], (retorno) => {
		var prateleira = document.getElementById('listaProdutosComprados');
		prateleira.innerHTML = '';
		try {
			var dados = retorno.filter(quartos => quartos.quarto == identificador)
			dados.forEach( (resultado) => {
				var id = resultado.id
				var descricao = resultado.descricao
				var quantidade = resultado.quantidade
				var valorUnitario = resultado.valor_unitario
				var valorTotal = resultado.valor_total
				prateleira.innerHTML += '<tr>'+
											'<td>'+ descricao + '</td>' +
											'<td>'+ quantidade + '</td>' +
											`<td>R$${valorUnitario}</td>`+
											`<td>R$${valorTotal}</td>`+
											`<td><button type="button" id="remocaoProduto" name="${id}" class="btn btn-danger">Remover</button></td>`+
										'</tr>';
			})
		} catch (error) {
			localStorage.setItem('produtos', JSON.stringify([]))
		}
	})
}
