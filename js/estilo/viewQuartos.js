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
	//console.log(id)
	valorComanda(id)
	quarto(id, "vq_painel")
	adicionais(id, "vq_painel", "vh_painel")
	//restoreBotoes(id)
	normal()


	setTimeout(() => {
		var cor = $(`.cardBox .card:nth-child(${id})`).css("background-color")
		cor == "rgb(255, 0, 0)" ? $("#tipo").text('locado') :
			cor == "rgb(139, 0, 139)" ? $("#tipo").text("pernoite") :
				cor == "rgb(255, 255, 255)" ? $("#tipo").text("aguardando") : ""
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
			sessionStorage.setItem("viewquartos.js", `[LOGS] | ${error}`)
		}
	})
}

function valorComanda(suite) {
	$.get(link[5], e => {
		let filtroComanda = e.filter(i => i.quarto == suite)
		let sum = 0
		filtroComanda.forEach(el => {
			sum += parseFloat(el.valor_total)
		})
		$("#consumo_painel").text(sum.toFixed(2))
	})
}

function valorParcial(suite) {
	let consumo = parseFloat($("#consumo_painel").text())
	$.get(link[36], l => {
		let filtroValores = l.filter(x => x.suite == suite)
		let sum = 0
		for (var f = 0; f < filtroValores.length; f++) {
			sum += parseFloat(filtroValores[f].valor)
		}
		let total = sum + consumo
		$("#parcial_painel").text(total.toFixed(2))

	})
}

async function restoreBotoes(suite) {
	var lista_suites = []
	var home = suite

	// Armazena o número de suites na lista
	$.get(link[17], i => {
		i.forEach(x => {
			lista_suites.push(x.numero)
		})
	})

	$.get(link[11], e => {
		/*
		e.forEach(ei => {
			let on_suites = ei.quarto
			let off_suites = lista_suites.indexOf(on_suites)
			console.log(off_suites)
			if (off_suites > -1){
				lista_suites.splice(off_suites, 1)
			}
		})

		// let off = e.filter(v => v.tipo == "locado" || v.tipo == "aguardando" || v.tipo == "manutencao" || v.tipo == "faxina" || v.tipo == "limpeza")

		let infos = e.filter(l => l.tipo == "locado")
		let boxA = e.filter(b => b.tipo == "aguardando")
		
		// Separa suítes locadas e não locadas
		infos.forEach( k => {
			var indexes = lista_suites.indexOf(k.quarto)
			if (indexes > -1){
				lista_suites.splice(indexes, 1)
			}
		})

		// Coloca os botões das suítes disponíveis em padrão
		boxA.forEach(box => {
			let suite = box.quarto
			let boxD = lista_suites.filter(d => d != suite)
			boxD.forEach(item => {
				console.log(item)
				padrao(item)
			});
		})
		*/


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
			let t = tick[`${suite}`]
			//console.log(suite)
			modo == "locado" ? locado(suite, t[0], t[1], t[2]) :
				modo == "manutencao" ? manutencao(suite, t[0], t[1], t[2]) :
					modo == "faxina" ? faxina(suite, _rota, t[0], t[1], t[2]) :
						modo == "aguardando" ? aguardando(suite, t[0], t[1], t[2]) :
							modo == "limpeza" ? limpeza(suite, t[0], t[1], t[2]) :
								modo == "pernoite" ? pernoite(suite, t[0], t[1], t[2]) : padrao(suite)
		} catch (error) {
			sessionStorage.setItem("viewquartos.js", `[LOGS] | ${error}`)
		}
	})
}


async function normal() {

	let off_suites = []
	var lista_suites = []

	const rqs = await fetch(link[17])
	const rss = await rqs.json()

	const rq = await fetch(link[11])
	const rs = await rq.json()


	rss.forEach(element => {
		lista_suites.push(element)
	});





	off_suites.forEach(off => {
		let t = tick[`${off}`]
		restoreStatus(off, t[0], t[1], t[2])
	});
	console.log(lista_suites)
	
	setTimeout(() => {

		off_suites.forEach(el => {
			var indexes = lista_suites.indexOf(element.quarto)
			if (indexes > -1) {
				lista_suites.splice(indexes, 1)
			}
		});
		console.log(off_suites)
	}, 200);

	/*
	setTimeout(() => {
		$.get(link[17], i => {
			i.forEach(x => {
				lista_suites.push(x.numero)
			})
		})
	}, 200);

	setTimeout(() => {
		rs.forEach(it => {
			let suites = it.quarto
			off_suites.push(suites)

		});
	}, 400);

	setTimeout(() => {
		rs.forEach(k => {
			var indexes = lista_suites.indexOf(k.quarto)
			if (indexes > -1) {
				lista_suites.splice(indexes, 1)
			}
		})
	}, 600);

	setTimeout(() => {
		lista_suites.forEach(element => {
			//padrao(element)
		});
	}, 800);*/
}

