import { link } from "./index.js"
import { recupera_permanencia } from "../quartos/ajax/get/permanencia.js"
import { atualizaValores } from "../quartos/calculos/porHora.js"

$(document).ready(function () {
	informacaoes()
})

function informacaoes() {
	var numero_quarto = JSON.parse(localStorage.getItem('last'))
	$.get(link[5], (retorno) => {
		var sum = 0
		var valor_quarto
		var adicionalQuarto = JSON.parse(localStorage.getItem('dadosQuarto'))
		var prateleira = document.getElementById('comanda')
		prateleira.innerHTML = ''
		try {
			var dados = retorno.filter(quartos => quartos.quarto == numero_quarto)
			var existe = dados.length
			if (existe == 0) {
				InfosPrimario()
			} else {
				dados.forEach(elemento => {
					var id = elemento.id
					var descricao = elemento.descricao
					var quantidade = elemento.quantidade
					var valor_total = elemento.valor_total
					var valor_unitario = elemento.valor_unitario
					valor_quarto = elemento.valor_quarto
					prateleira.innerHTML += '<tr>' +
												'<td>' + descricao + '</td>' +
												'<td>' + quantidade + '</td>' +
												'<td>' + valor_unitario + '</td>' +
												'<td id="total">' + valor_total + '</td>' +
												`<td><button type="button" id="removerProduto" value="${id}" class="btn btn-danger">Remover</button></td>`+
											'</tr>';

				});
			}
		} catch (error) {
			localStorage.setItem('produtos', JSON.stringify([]))
		}

		var precoProdutos = $("[id=total]").text()
		var somaPrecoProdutos = precoProdutos.split('R$')

		var totalPrecoProdutos = somaPrecoProdutos.filter((i) => {
			return i;
		})

		for (var a = 0; a < totalPrecoProdutos.length; a++) {
			sum += parseFloat(totalPrecoProdutos[a])
		}

		var preco_quarto = adicionalQuarto[0].valor
		
		$("#valorItens").text(parseFloat(sum).toFixed(2))
		$("#valorQuarto").text(preco_quarto)
		
		recupera_permanencia(numero_quarto)
		atualizaValores(numero_quarto)
	
		var add = $("#valor_addPermanencia").text()
		var ttgeral = parseFloat(preco_quarto) + parseFloat(sum) + parseFloat(add)

		$("#valor_subtotal").text(ttgeral.toFixed(2))
		$("#totalGeral").text(ttgeral.toFixed(2))

		$(document).one('change', '#modo_desconto', () => {
			var tipo_desconto = $('#modo_desconto').find(":selected").index()
			if (tipo_desconto == "1") {
				$(document).one("click", "#aplicar_desconto", () => {
					var codigoDeconto = $("#valor_desconto").val()
					var total_ausar = ttgeral = ttgeral - parseFloat(codigoDeconto)
					$("#totalGeral").text(total_ausar.toFixed(2))
					$("#valor_desconto").val('')
					var descont = document.getElementById('valor_desconto')
					descont.disabled = true
					$("#valor_desconto").attr("placeholder", codigoDeconto)
					$("#valorDesconto").text(codigoDeconto)
					$("#aplicar_desconto").attr("disabled", true)
				})
			} else if (tipo_desconto == "2") {
				$(document).one("click", "#aplicar_desconto", () => {
					var codigoDeconto = $("#valor_desconto").val()
					let valor_decimal = parseFloat(codigoDeconto) / 100
					let valor_para_descontar = ttgeral * valor_decimal
					var total_ausar2 = ttgeral = ttgeral - valor_para_descontar
					$("#totalGeral").text(total_ausar2.toFixed(2))
					$("#valor_desconto").val('')
					var descont = document.getElementById('valor_desconto')
					descont.disabled = true
					$("#valor_desconto").attr("placeholder", codigoDeconto + "%")
					$("#valorDesconto").text(codigoDeconto + "%")
					$("#aplicar_desconto").attr("disabled", true)
				})
			}
		})
	})
}

async function InfosPrimario() {
	const resposta = await fetch(link[11])
	const data = await resposta.json()
	var prateleira = document.getElementById('comanda');
	prateleira.innerHTML = '';
	var valor_quarto
	var sum = 0
	data.forEach(elemento => {
		valor_quarto = elemento.valor
	});
	$("#valorQuarto").text(valor_quarto)
	$("#valorItens").text(parseFloat(sum).toFixed(2))
	var add = $("#valor_addPermanencia").text()
	var ttgeral = parseFloat(valor_quarto) + parseFloat(sum) + parseFloat(add)
	$("#totalGeral").text(ttgeral.toFixed(2))
}
