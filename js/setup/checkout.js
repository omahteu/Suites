import { link } from "./index.js"
import { recupera_permanencia } from "../quartos/ajax/get/permanencia.js"
import { atualizaValores } from "../quartos/calculos/porHora.js"

$(document).ready(function () {
	var suite = JSON.parse(localStorage.getItem('last'))
	comanda(suite)
	somaComanda(suite)
	quarto(suite)
	recupera_permanencia(suite)
	atualizaValores(suite)
	subtotal()
	adicionais(suite)
	desconto()
	naoAplicavel()
	total()
})

function comanda(suite) {
	$.get(link[5], e => {
		let ficha = e.filter(i => i.quarto == suite)
		let nota = document.getElementById("comanda")
		nota.innerHTML = ""
		ficha.forEach(el => {
			let infos = [el.id, el.descricao, el.quantidade, el.valor_total, el.valor_unitario]
			nota.innerHTML += '<tr>' +
				`<td>${infos[1]}</td>` +
				`<td>${infos[2]}</td>` +
				`<td>${infos[4]}</td>` +
				`<td id="total">${infos[3]}</td>` +
				`<td><button type="button" id="removerProduto" value="${infos[0]}" class="btn btn-danger">Remover</button></td>` +
				'</tr>'
		})
	})
}

function somaComanda(suite) {
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

function quarto(suite) {
	$.get(link[11], e => {
		let ficha = e.filter(i => i.quarto == suite)
		$("#valorQuarto").text(parseFloat(ficha[0].valor).toFixed(2))
	})
}

function adicionais(suite) {
	setTimeout(() => {
		let quarto = $("#valorQuarto").text()
		let valor = 0
		$.get(link[36], e => {
			let ficha = e.filter(i => i.suite == suite)
			ficha.forEach(el => {
				valor += parseFloat(el.valor)
			});
			let adicionado = parseFloat(valor) - parseFloat(quarto)
			$("#valor_addPermanencia").text(adicionado)
		})
	}, 1000);
}

function subtotal() {
	setTimeout(() => {
		let quarto = parseFloat($("#valorQuarto").text())
		let comanda = parseFloat($("#valorItens").text())
		let adicional = parseFloat($("#valor_addPermanencia").text())
		let subTotal = quarto + comanda + adicional
		$("#valor_subtotal").text(subTotal.toFixed(2))
	}, 1500);
}

function desconto() {
	$(document).on("change", "#modo_desconto", function () {
		let tpd = $("#modo_desconto :selected").text()
		if (tpd == "Valor") {
			$(document).on("click", "#aplicar_desconto", function () {
				let camareira = $("#selecionaCamareira :selected").text()
				if (camareira == "Camareira") {
					alert("selecione camareira")
				} else {
					let descontar = parseFloat($("#valor_desconto").val().replace(",", "."))
					$("#valorDesconto").text(`R$ ${descontar}`)
					$("#aplicar_desconto").css("background", "black")
					$("#nao_aplicavel").attr("disabled", "true")
					$("#nao_aplicavel").css("background", "black")
				}

			})
		} else if (tpd == "Percentual") {
			$(document).on("click", "#aplicar_desconto", function () {
				let camareira = $("#selecionaCamareira :selected").text()
				if (camareira == "Camareira") {
					alert("selecione camareira")
				} else {
					let descontar = parseFloat($("#valor_desconto").val().replace(",", "."))
					$("#valorDesconto").text(`${descontar}%`)
					$("#aplicar_desconto").css("background", "black")
					$("#nao_aplicavel").attr("disabled", "true")
					$("#nao_aplicavel").attr("disabled", "true")
					$("#nao_aplicavel").css("background", "black")
				}
			})
		}
	})
}

function naoAplicavel() {

	$(document).on("click", "#aplicar_desconto", function () {
		let forma = $("#modo_desconto :selected").text()
		if (forma == "Modo") {
			alert("Escolha um tipo de desconto")
		}
	})

	$(document).on("click", "#nao_aplicavel", function () {
		let camareira = $("#selecionaCamareira :selected").text()
		if (camareira == "Camareira") {
			alert("selecione camareira")
		} else {
			$(this).css("background", "black")
			$(this).attr("disabled", "true")
			$("#aplicar_desconto").attr("disabled", "true")
			$("#aplicar_desconto").css("background", "black")
			$("#valor_desconto").attr("disabled", "true")
		}
	})
}

function total() {
	$(document).on("click", "#confirma_parcelas", function () {
		let forma = $("#modo_pagamento :selected").text()
		if (forma == "Dinheiro") {
			let confirmacao = $("#nao_aplicavel").attr("disabled")
			if (confirmacao == undefined) {
				alert("Defina o desconto, ou Não Aplicável!")
			} else {
				let desconto = $("#valorDesconto").text()
				let sub = parseFloat($("#valor_subtotal").text())
				if (desconto.charAt(0) == "R") {
					let total = sub - parseFloat(desconto.slice(3))
					$("#totalGeral").text(total.toFixed(2))
					$("#confirma_parcelas").attr("disabled", "true")
					$("#confirma_parcelas").css("background", "black")
				} else if (desconto.charAt(0) == "0") {
					$("#totalGeral").text(sub.toFixed(2))
					$("#confirma_parcelas").attr("disabled", "true")
					$("#confirma_parcelas").css("background", "black")
				} else {
					let decimal = parseFloat(desconto.slice(0, -1)) / 100
					let descontando = sub * decimal
					let valor = sub - descontando
					$("#totalGeral").text(valor.toFixed(2))
					$("#confirma_parcelas").attr("disabled", "true")
					$("#confirma_parcelas").css("background", "black")
				}
			}
		} else if (forma == "Método de Pagamento") {
			alert("Método de Pagamento Inválido!")
		}
	})
}
