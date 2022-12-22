import link from "../../setup/index.js"

export function leituraVeiculos(){
	$.get(link[15], (retorno) => {
		var numero_quarto =  $("#quarto_painel").text()
		var patio = document.getElementById('listaveiculosguardados');
		patio.innerHTML = '';
		var dados = retorno.filter(quartos => quartos.quarto == numero_quarto)
		dados.forEach( (resultado) => {
			var id = resultado.id
			var modelo = resultado.modelo
			var placa = resultado.placa
			patio.innerHTML += '<tr>'+
									'<td>'+ placa + '</td>' +
									'<td>'+ modelo + '</td>' +
									`<td><button type="button" id="remocaoVeiculo" name="${id}" class="btn btn-danger">Remover</button></td>`+
								'</tr>';
		})
	})
}

export function leituraVeiculosPlus(identificador){
	$.get(link[15], (retorno) => {
		var patio = document.getElementById('listaveiculosguardados');
		patio.innerHTML = '';
		try {
			var dados = retorno.filter(quartos => quartos.quarto == identificador)
			dados.forEach( (resultado) => {
				var id = resultado.id
				var modelo = resultado.modelo
				var placa = resultado.placa
				patio.innerHTML += '<tr>'+
										'<td>'+ placa + '</td>' +
										'<td>'+ modelo + '</td>' +
										`<td><button type="button" id="remocaoVeiculo" name="${id}" class="btn btn-danger">Remover</button></td>`+
									'</tr>';
			})
		} catch (error) {
			localStorage.setItem('produtos', JSON.stringify([]))
		}
	})
}
