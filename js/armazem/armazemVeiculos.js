import { link } from "../setup/index.js"

$("#registrar_veiculo").click(function() {
	var tipos = ['locado']
	var tipo = $("#tipo").text()
	// Verificação se o quarto está em Pernoite ou Locação
	if(tipos.includes(tipo)){
		registroVeiculo()
	} else (
		alert('Selecione um Quarto!')
	)
})

function registroVeiculo(){
	var quarto =  $("#quarto_painel").text()
	var veiculo = $("#veiculo").val()
    var modelo = $("#modelo").val()
    var placa = $("#placa").val()
	var patio = {
		quarto: quarto,
		veiculo: veiculo,
		modelo: modelo,
		placa: placa
    }
	// Requisição POST
	$.post(link[15], patio,  () => {
		alert('Veículo Registrado!')
		mostraVeiculo();
	})
	document.getElementById('formCadastros').reset();
}

function removeVeiculo(operacao){

	$.ajax({
		url: link[15] + operacao,
		method: 'DELETE',
		dataType: 'json',
		success:  () => {
			alert('Veículo Excluído!')
			mostraVeiculo();
		}
	})
}

function mostraVeiculo(){

	// Requisição GET
	$.get(link[15], (retorno) => {

		// Parâmetro e Instância de Tabela
		var nQuarto =  $("#quarto_painel").text()
		var patio = document.getElementById('listaveiculosguardados');
		patio.innerHTML = '';

		// Filtro
		var dados = retorno.filter(quartos => quartos.quarto == nQuarto)

		// Percorrendo o Array e Formantando uma Tabela
		dados.forEach( (resultado) => {

			var id = resultado.id
			var modelo = resultado.modelo
			var placa = resultado.placa

			patio.innerHTML += '<tr>'+
									'<td>'+ placa + '</td>' +
									'<td>'+ modelo + '</td>' +
									'<td><button type="button" onclick="removeVeiculo('+ id +')" class="btn btn-danger">Remover</button></td>'+
								'</tr>';
		})
	})
}
