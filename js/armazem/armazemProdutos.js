import { hora_atual } from "../geradores/hora.js"
import { link } from "../setup/index.js"

$("#registrar_produto").click(function() {
	var tipos = ['locado']
	var tipo = $("#tipo").text()

	// Verificação se o quarto está em Pernoite ou Locação
	if(tipos.includes(tipo)){
		registroProduto()
	} else (
		alert('Selecione um Quarto!')
	)
})

function registroProduto(){
	// Parâmetros
	var descricao = $("#descricao").val()
    var quantidade = $("#quantidade").val()
	var valorTotal = $("#valor_total").val()
    var quarto =  $("#quarto_painel").text()
    var valorUnitario = $("#valor_unitario").val()
	var valor = $("#valor-quarto").text()
	var hora = hora_atual()
    // Objetos
	var produto = {
		quarto: quarto,
		descricao: descricao,
		quantidade: quantidade,
		valor_total: valorTotal,
		valor_unitario: valorUnitario,
		datahora: hora,
		valor_quarto: valor
	}
	// Requisição POST
	$.post(link[5], produto,  () => {
		alert('Produto Adicionado!')
		mostraProduto();
    })
	// Limpa os Campos
	document.getElementById('formCadastros').reset();
}

function removeProduto(operacao){

	motivo = prompt('Motivo da retirada do produto:')

	if (motivo == null){
		alert('Produto não excluido!\nÉ necessário o motivo da exclusão do produto!')
	} else if (motivo.length == 0){
		alert('Produto não excluido!\nÉ necessário o motivo da exclusão do produto!')
	} else {
		$.ajax({
			url: link[5] + operacao,
			method: 'DELETE',
			dataType: 'json',
			success:  () => {
				alert('Produto Excluído!')
				mostraProduto();
			}
		})
	}
}

function mostraProduto(){

	// Requisição GET
	$.get(link[5], (retorno) => {

		// Parâmetro e Instância de Tabela
		var nQuarto =  $("#quarto_painel").text()
		var prateleira = document.getElementById('listaProdutosComprados');
		prateleira.innerHTML = '';

		// Filtro
		var dados = retorno.filter(quartos => quartos.quarto == nQuarto)

		// Percorrendo o Array e Formantando uma Tabela
		dados.forEach( (resultado) => {

			var id = resultado.id
			var quarto = resultado.quarto
			var descricao = resultado.descricao
			var quantidade = resultado.quantidade
			var valorUnitario = resultado.valor_unitario
			var valorTotal = resultado.valor_total

			prateleira.innerHTML += '<tr>'+
										//'<td>'+ quarto + '</td>' +
										'<td>'+ descricao + '</td>' +
										'<td>'+ quantidade + '</td>' +
										'<td>'+ valorUnitario + '</td>' +
										'<td>'+ valorTotal + '</td>' +
										'<td><button type="button" onclick="removeProduto('+ id +')" class="btn btn-danger">Remover</button></td>'+
									'</tr>';
		})
	})
}
