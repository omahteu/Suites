import { link } from "./index.js"
import { recupera_permanencia } from "../quartos/ajax/get/permanencia.js"
import { atualizaValores } from "../quartos/calculos/porHora.js"

$(document).ready(function () {
	var suite = JSON.parse(localStorage.getItem('last'))
	informacaoes(suite)
	comanda(suite)
	somaComanda(suite)
	quarto(suite)
	recupera_permanencia(suite)
	atualizaValores(suite)
	subtotal(suite)
	adicionais(suite)
	desconto()
})



function desconto(){
	$(document).on("change", "#modo_desconto", function(){
		let tpd = $("#modo_desconto :selected").text()
		if (tpd == "Valor"){
			$(document).on("click", "#aplicar_desconto", function(){
				let sub = parseFloat($("#valor_subtotal").text())
				let descontar = parseFloat($("#valor_desconto").val().replace(",", "."))
				//let descontado = sub - descontar
				$("#valorDesconto").text(descontar)
				$("#valor_desconto").attr("disabled", true)
				$("#aplicar_desconto").attr("disabled", true)
			})
		} else if (tpd == "Percentual"){
			console.log("maria")
		}
	})
}





function informacaoes(suite) {
	$.get(link[5], (retorno) => {
		var sum = 0
		
		var ttgeral = parseFloat(preco_quarto) + parseFloat(sum) + parseFloat(add)

		$("#totalGeral").text(ttgeral.toFixed(2))
/*
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
		})*/
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

function comanda(suite){
	$.get(link[5], e => {
		let ficha = e.filter(i => i.quarto == suite)
		let nota = document.getElementById("comanda")
		nota.innerHTML = ""
		ficha.forEach(el => {
			let infos = [el.id, el.descricao, el.quantidade, el.valor_total, el.valor_unitario]
			nota.innerHTML +=	'<tr>'+
									`<td>${infos[1]}</td>`+
									`<td>${infos[2]}</td>`+
									`<td>${infos[4]}</td>`+
									`<td id="total">${infos[3]}</td>`+
									`<td><button type="button" id="removerProduto" value="${infos[0]}" class="btn btn-danger">Remover</button></td>`+
								'</tr>'
		})
	})
}

function somaComanda(suite){
	let total = 0
	$.get(link[5], e => {
		let ficha = e.filter(i => i.quarto == suite)
		ficha.forEach(el => {
			const valores = el.valor_total
			total += parseFloat(valores.slice(3))
		})
		$("#valorItens").text(parseFloat(total).toFixed(2))
		
	})
}

function quarto(suite){
	$.get(link[11], e => {
		let ficha = e.filter(i => i.quarto == suite)
		$("#valorQuarto").text(parseFloat(ficha[0].valor).toFixed(2))
	})
}

function adicionais(suite){
	setTimeout(() => {
		let quarto = $("#valorQuarto").text()
		$.get(link[36], e => {
			let ficha = e.filter(i => i.suite == suite)
			let atual = ficha[0].valor
			let adicionado = parseFloat(atual) - parseFloat(quarto)
			$("#valor_addPermanencia").text(adicionado)
		})
	}, 1000);
}

function subtotal(suite){
	setTimeout(() => {
		let quarto = parseFloat($("#valorQuarto").text())
		let comanda = parseFloat($("#valorItens").text())
		let adicional = parseFloat($("#valor_addPermanencia").text())
		let subTotal = quarto + comanda + adicional
		$("#valor_subtotal").text(subTotal.toFixed(2))
	}, 1500);
}