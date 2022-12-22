import link from "../setup/index.js"

export function comanda(suite) {
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
