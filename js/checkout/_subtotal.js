export function subtotal() {
	setTimeout(() => {
		let quarto = parseFloat($("#valorQuarto").text())
		let comanda = parseFloat($("#valorItens").text())
		let adicional = parseFloat($("#valor_addPermanencia").text())
		let subTotal = quarto + comanda + adicional
		$("#valor_subtotal").text(subTotal.toFixed(2))
	}, 1500);
}
