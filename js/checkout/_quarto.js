import { link } from "../setup/index.js"

export function quarto(suite, id) {
	$.get(link[11], e => {
		let ficha = e.filter(i => i.quarto == suite)
		$(`#${id}`).text(parseFloat(ficha[0].valor).toFixed(2))
	})
}
