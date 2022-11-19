import { leituraProdutos } from "../leitura/produtos.js"
import { hora_atual } from "../../geradores/hora.js"
import { link } from "../../setup/index.js"

export function registroProdutos(){
	var descricao = $("#descricao").val()
    var quantidade = $("#quantidade").val()
	var valorTotal = $("#valor_total").val().slice(3)
    var quarto =  $("#quarto_painel").text()
    var valorUnitario = $("#valor_unitario").val()
	var valor = $("#valor-quarto").text()
	var hora = hora_atual()
	var produto = {
		quarto: quarto,
		descricao: descricao,
		quantidade: quantidade,
		valor_total: valorTotal,
		valor_unitario: valorUnitario,
		datahora: hora,
		valor_quarto: valor
	}
	$.post(link[5], produto,  () => {
		alert('Produto Adicionado!')
		leituraProdutos();
    })
	document.getElementById('formCadastros').reset();
}
