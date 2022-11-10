import { aguardando } from "../tags/aguardo.js"
import { atualizaValores } from "../quartos/calculos/porHora.js"
import { faxina } from "../tags/faxina.js"
import { leituraProdutosPlus } from "../armazem/leitura/produtos.js"
import { leituraVeiculosPlus } from "../armazem/leitura/veiculos.js"
import { limpeza } from "../tags/limpeza.js"
import { link } from "../setup/index.js"
import { locado } from "../tags/locacao.js"
import { manutencao } from "../tags/manutencao.js"
import { pernoite } from '../tags/pernoite.js'
import { tick } from '../setup/box.js'

$(document).ready(function () {
	setTimeout(() => {
		let id = $("[id='suite']").text()
		const suites = id.split('')
		suites.forEach(e => {
			let t = tick[`${e}`]
			atualizaValores(e)
			$(`#intervalo${e}`).text(String(t)) // VERIFICAR A NECESSIDADE DE AINDA USAR ISSO
			restoreStatus(e, t[0], t[1], t[2])
		})
	}, 2000)
})

$(document).on('click', '[class="card"]', function () {
	var i1 = $(this)
	var i2 = $(i1[0].children[0])
	var i3 = $(i2[0].children[1])
	var id = i3.text()
	setTimeout(() => {
		var cor = $(`.cardBox .card:nth-child(${id})`).css("background-color")
		cor == "rgb(255, 0, 0)" ? $("#tipo").text('locado') :
			cor == "rgb(139, 0, 139)" ? $("#tipo").text("pernoite") : ""
		let tipo = $("#tipo").text()
		let condicaoUm = tipo == "locado" || tipo == "pernoite"
		if (condicaoUm) {
			leituraProdutosPlus(id)
			leituraVeiculosPlus(id)
		}
		backupInfos(id)
	}, 1000);
})

function restoreStatus(suite, x, y, z) {
	$.get(link[11], e => {
		try {
			let dados = e.filter(i => i.quarto == suite)
			let condicaoDois = dados.length == 0
			let modo = dados[0].tipo
			if (condicaoDois) {
				$(`[name=${suite}]`).css('display', 'inline-block')
				$(".acoes1").removeAttr('style')
				$(".acoes2").removeAttr('style')
				$(".acoes3").removeAttr('style')
			}
			if (modo == "locado") {
				$(`[name=${suite}]`).css('display', 'none')
				$(".acoes1").css('display', 'inline-block')
				$(".acoes1").val('Trocar Suíte')
				$(".acoes2").css('display', 'inline-block')
				$(".acoes2").val('Encerrar')
				$(".acoes3").css('display', 'none')
				$(".acoes3").val('Cancelar Reserva')
				locado(suite, x, y, z)
			} else if (modo == "manutencao") {
				$(`[name=${suite}]`).css('display', 'none')
				$(".acoes1").css('display', 'inline-block')
				$(".acoes1").val('Iniciar Faxina')
				$(".acoes2").css('display', 'inline-block')
				$(".acoes2").val('Disponibilizar Quarto')
				$(".acoes3").css('display', 'inline-block')
				$(".acoes3").val('Ligar Luz')
				manutencao(suite, x, y, z)
			} else if (modo == "faxina") {
				$(`[name=${suite}]`).css('display', 'none')
				$(".acoes1").css('display', 'inline-block')
				$(".acoes1").val('Disponibilizar Quarto')
				$(".acoes2").css('display', 'none')
				$(".acoes2").val('')
				$(".acoes3").css('display', 'none')
				$(".acoes3").val('')
				var rotaf = $(".faxina").attr("class")
				faxina(suite, rotaf, x, y, z)
			} else if (modo == "aguardando") {
				$(`[name=${suite}]`).css('display', 'none')
				$(".acoes1").css('display', 'inline-block')
				$(".acoes1").val('Iniciar Limpeza')
				$(".acoes2").css('display', 'none')
				$(".acoes2").val('')
				$(".acoes3").css('display', 'none')
				$(".acoes3").val('')
				aguardando(suite, x, y, z)
			} else if (modo == "limpeza") {
				$(`[name=${suite}]`).css('display', 'none')
				$(".acoes1").css('display', 'inline-block')
				$(".acoes1").val('Encerrar Limpeza')
				$(".acoes2").css('display', 'none')
				$(".acoes2").val('')
				$(".acoes3").css('display', 'none')
				$(".acoes3").val('')
				limpeza(suite, x, y, z)
			} else if (modo == "pernoite") {
				//$(`[name=${suite}]`).css('display', 'none')
				//(".acoes1").css('display', 'inline-block')
				//$(".acoes1").val('Encerrar')
				//$(".acoes2").css('display', 'none')
				//$(".acoes2").val('')
				//$(".acoes3").css('display', 'none')
				//$(".acoes3").val('')
				pernoite(suite, x, y, z)
			}
			/*
			dados.forEach( re => {
				if (modo != "pernoite"){
					$("#numquarto").text(resultado.quarto)
					$("#quarto_painel").text(resultado.quarto)
					$("#vq_painel").text(resultado.valor)
					$("#entrada").text(resultado.datahora)
					$("#valor-quarto").text(resultado.valor)
				} else {	
					$("#numquarto").text(resultado.quarto)
					$("#quarto_painel").text(resultado.quarto)	
					$("#entrada").text(resultado.datahora)
					$("#valor-quarto").text(resultado.valor)
					setTimeout( () => {
						$.get(link[21], (e) => {
							var avalor = $("#vh_painel").text()
							$("#vq_painel").text(parseFloat(avalor) + parseFloat(e[0].tempo_pernoite))
						})
					}, 100)
				}
	
			})*/
		} catch (error) {
			localStorage.setItem('erro', JSON.stringify([]))
		}
	})
}

function backupInfos(suite) {
	setTimeout(() => {
		$.get(link[5], e => {
			let dados = e.filter(i => i.quarto == suite)
			let sum = 0
			for (var a = 0; a < dados.length; a++) {
				sum += parseFloat(dados[a].valor_total.slice(2))
			}
			$("#consumo_painel").text(sum.toFixed(2))
		})

	}, 500)
	setTimeout(() => {
		// var valor_quarto = parseFloat($("#valor-quarto").text())
		var consumo = parseFloat($("#consumo_painel").text())
		// var atualizacao_preco = $("#atualizacaoPreco").text() == "" ? "0" : $("#atualizacaoPreco").text()
		// var novo_valor = atualizacao_preco == 0 ? valor_quarto : parseFloat(atualizacao_preco) + valor_quarto
		// var resultado = valor_consumo + parseFloat(novo_valor)
		// $("#parcial_painel").text(resultado.toFixed(2))

		$.get(link[36], l => {
			let filtroValores = l.filter(x => x.suite == suite)
			let sum = 0
			for (var f = 0; f < filtroValores.length; f++){
				sum += parseFloat(filtroValores[f].valor)
			}
			let total = sum + consumo
			$("#parcial_painel").text(total.toFixed(2))

		})


	}, 700)
}
