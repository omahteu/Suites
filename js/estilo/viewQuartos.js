import aguardando from "../tags/aguardo.js"
import atualizaValores from "../quartos/calculos/porHora.js"
import faxina from "../tags/faxina.js"
import { leituraProdutosPlus } from "../armazem/leitura/produtos.js"
import { leituraVeiculosPlus } from "../armazem/leitura/veiculos.js"
import limpeza from "../tags/limpeza.js"
import link from "../setup/index.js"
import locado from "../tags/locacao.js"
import manutencao from "../tags/manutencao.js"
import pernoite from '../tags/pernoite.js'
import { tick } from '../setup/box.js'
import quarto from "../checkout/_quarto.js"
import adicionais from "../checkout/_adicionais.js"
import padrao from "../tags/default.js"

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
	valorComanda(id)
	quarto(id, "vq_painel")
	adicionais(id, "vq_painel", "vh_painel")
	restoreBotoes(id)
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
		valorParcial(id)
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
			modo == "locado" ? locado(suite, x, y, z) :
			modo == "manutencao" ? manutencao(suite, x, y, z) :
			modo == "faxina" ? faxina(suite, _rota, x, y, z) :
			modo == "aguardando" ? aguardando(suite, x, y, z) :
			modo == "limpeza" ? limpeza(suite, x, y, z) :
			modo == "pernoite" ? pernoite(suite, x, y, z) : ""
		} catch (error) {
			sessionStorage.setItem(error, [{}])
		}
	})
}

function valorComanda(suite){
	$.get(link[5], e => {
		let filtroComanda = e.filter(i => i.quarto == suite)
		let sum = 0
		filtroComanda.forEach(el => {
			sum += parseFloat(el.valor_total)
		})
		$("#consumo_painel").text(sum.toFixed(2))
	})
}

function valorParcial(suite){
	let consumo = parseFloat($("#consumo_painel").text())
	$.get(link[36], l => {
		let filtroValores = l.filter(x => x.suite == suite)
		let sum = 0
		for (var f = 0; f < filtroValores.length; f++){
			sum += parseFloat(filtroValores[f].valor)
		}
		let total = sum + consumo
		$("#parcial_painel").text(total.toFixed(2))

	})
}

async function restoreBotoes(suite){
	var lista_suites = []
	var home = suite

	$.get(link[17], i => {
		i.forEach(x => {
			lista_suites.push(x.numero)
		})
	})

	$.get(link[11], e => {
		let infos = e.filter(l => l.tipo == "locado")
		infos.forEach( k => {
			var indexes = lista_suites.indexOf(k.quarto)
			if (indexes > -1){
				lista_suites.splice(indexes, 1)
			}
		})
		lista_suites.forEach( r => {
			let t = tick[`${r}`]
			padrao(r)
		})

		console.log(infos)

		try {
			let dados = infos.filter(i => i.quarto == home)
			let modo = dados[0].tipo
			let suite = dados[0].quarto
			let t = tick[`${suite}`]

			console.log(modo)
			
			modo == "locado" ? locado(suite, t[0], t[1], t[2]) :
			modo == "manutencao" ? manutencao(suite, x, y, z) :
			modo == "faxina" ? faxina(suite, _rota, x, y, z) :
			modo == "aguardando" ? aguardando(suite, x, y, z) :
			modo == "limpeza" ? limpeza(suite, x, y, z) :
			modo == "pernoite" ? pernoite(suite, x, y, z) : ""
		} catch (error) {
			sessionStorage.setItem(error, [{}])
		}
	})
}
