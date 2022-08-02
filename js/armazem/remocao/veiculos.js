import { leituraVeiculos } from "../leitura/veiculos.js"
import { link } from "../../setup/index.js"

$(document).on("click", "#remocaoVeiculo", function(){
	var id = $(this).attr("name")
	$.ajax({
		url: link[15] + id,
		method: 'DELETE',
		dataType: 'json',
		success:  () => {
			alert('Veículo Excluído!')
			leituraVeiculos()
		}
	})
})
