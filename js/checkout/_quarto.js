import link from "../setup/index.js"

export default function quarto(suite, id) {
	$.get(link[11], e => {
		let ficha = e.filter(i => i.quarto == suite)
		try {
			$(`#${id}`).text(parseFloat(ficha[0].valor).toFixed(2))
		} catch (error) {
			sessionStorage.setItem('_quarto.js', `[LOGS] | ${error}`)
		}
	})
}
