import link from "../setup/index.js"

export function somaComanda(suite) {
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
