import { registroProdutos } from "./registros/produtos.js"
import { registroVeiculos } from "./registros/veiculos.js"
import { registroObservacao } from "./registros/observacao.js"

$("#registrar_produto").click(function() {
	var tipos = ['locado']
	var tipo = $("#tipo").text()
	if(tipos.includes(tipo)){
		registroProdutos()
	} else (
		alert('Selecione um Quarto!')
	)
})

$("#registrar_veiculo").click(function() {
	var tipos = ['locado']
	var tipo = $("#tipo").text()
	if(tipos.includes(tipo)){
		registroVeiculos()
	} else (
		alert('Selecione um Quarto!')
	)
})

$("#registrar").click(function() {
    registroObservacao()
})
