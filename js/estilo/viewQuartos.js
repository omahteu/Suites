import { modos } 				from '../setup/box.js'
import { locado } 				from "../tags/locacao.js"
import { aguardando } 			from "../tags/aguardo.js"
import { limpeza } 				from "../tags/limpeza.js"
import { manutencao } 			from "../tags/manutencao.js"
import { faxina } 				from "../tags/faxina.js"
import { pernoite } 			from '../tags/pernoite.js'
import { link } 				from "../setup/index.js"
import { leituraProdutosPlus } 	from "../armazem/leitura/produtos.js"
import { leituraVeiculosPlus } 	from "../armazem/leitura/veiculos.js"
import { atualizaValores } 		from "../quartos/calculos/porHora.js"
import { tick } 				from '../setup/box.js'

var rotax = "btn aguardando"
var rotal = "btn limpeza"

$(document).ready(function(){
	setTimeout( () => {
		let id = $("[id='suite']").text()
		const suites = id.split('')
		suites.forEach(e => {
			let t = tick[`${e}`]
			atualizaValores(e)
			$(`#intervalo${e}`).text(String(t)) // VERIFICAR A NECESSIDADE DE AINDA USAR ISSO
			backupInfos(e, t[0], t[1], t[2])
		})
	}, 2000)
})

$(document).on('click', '[class="card"]', function() {
	var ind = $(this)
	var ind2 = $(ind[0].children[0])
	var ind3 = $(ind2[0].children[1])
	var identificador = ind3.text()
	setTimeout( () => {
		var cor = $(`.cardBox .card:nth-child(${identificador})`).css("background-color")
		// console.log(cor)
		if(cor == 'rgb(169, 169, 169)'){
			$("#tipo").text('manutencao')
		} else if(cor == 'rgb(255, 0, 0)'){
			$("#tipo").text('locado')
		} else if(cor == 'rgb(255, 228, 196)'){
			$("#tipo").text('faxina')
		} else if(cor == 'rgb(75, 192, 192)'){
			$("#tipo").text('livre')
		} else if(cor == 'rgb(255, 255, 255)'){
			$("#tipo").text("aguardando")
		} else if(cor  == "rgb(255, 255, 0)"){
			$("#tipo").text("limpeza")
		} else if(cor == "rgb(139, 0, 139)"){
			$("#tipo").text("pernoite")
		}

		if(identificador == '1'){
			atualizaValores(identificador)
			var flags = modos.slice(0, 3)
			$("#intervalo").text(modos.slice(0, 3))
			backupInfos(identificador, flags[0], flags[1], flags[2])
		} else if(identificador == '2'){
			atualizaValores(identificador)
			var flags = modos.slice(3, 6)
			$("#intervalo").text(modos.slice(3, 6))
			backupInfos(identificador, flags[0], flags[1], flags[2])
		} else if(identificador == '3'){
			atualizaValores(identificador)
			var flags = modos.slice(6, 9)
			$("#intervalo").text(modos.slice(6, 9))
			backupInfos(identificador, flags[0], flags[1], flags[2])
		} else if(identificador == '4'){
			atualizaValores(identificador)
			var flags = modos.slice(9, 12)
			$("#intervalo").text(modos.slice(9, 12))
			backupInfos(identificador, flags[0], flags[1], flags[2])
		}
		let tipo = $("#tipo").text()
		let tipos = ['locado']
		if(tipos.includes(tipo)){
			leituraProdutosPlus(identificador)
			leituraVeiculosPlus(identificador)
		}
	}, 800);
})

function backupInfos(instance, x, y, z){
	$.get(link[11], (retorno) => {
		try {
			var dados = retorno.filter(quartos => quartos.quarto == instance)

			if(dados.length == 0){
				$(`[name=${instance}]`).css('display', 'inline-block')
				$(".acoes1").removeAttr('style')
				$(".acoes2").removeAttr('style')
				$(".acoes3").removeAttr('style')
			}

			var modo = dados[0].tipo

			if(modo == "locado"){
				$(`[name=${instance}]`).css('display', 'none')
				$(".acoes1").css('display', 'inline-block')
				$(".acoes1").val('Trocar Suíte')
				$(".acoes2").css('display', 'inline-block')
				$(".acoes2").val('Encerrar')
				$(".acoes3").css('display', 'none')
				$(".acoes3").val('Cancelar Reserva')
				var rota = $(".locado").attr("class")
				locado(instance, rota, x, y, z)
			} else if(modo == "manutencao"){
				$(`[name=${instance}]`).css('display', 'none')
				$(".acoes1").css('display', 'inline-block')
				$(".acoes1").val('Iniciar Faxina')		
				$(".acoes2").css('display', 'inline-block')
				$(".acoes2").val('Disponibilizar Quarto')		
				$(".acoes3").css('display', 'inline-block')
				$(".acoes3").val('Ligar Luz')
				var rotam = $(".manutencao").attr("class")
				manutencao(instance, rotam, x, y, z)
			} else if(modo == "faxina"){
				$(`[name=${instance}]`).css('display', 'none')
				$(".acoes1").css('display', 'inline-block')
				$(".acoes1").val('Disponibilizar Quarto')
				$(".acoes2").css('display', 'none')
				$(".acoes2").val('')
				$(".acoes3").css('display', 'none')
				$(".acoes3").val('')
				var rotaf = $(".faxina").attr("class")
				faxina(instance, rotaf, x, y, z)
			} else if(modo == "aguardando"){
				$(`[name=${instance}]`).css('display', 'none')
				$(".acoes1").css('display', 'inline-block')
				$(".acoes1").val('Iniciar Limpeza')
				$(".acoes2").css('display', 'none')
				$(".acoes2").val('')
				$(".acoes3").css('display', 'none')
				$(".acoes3").val('')
				aguardando(instance, rotax, x, y, z)
			} else if(modo == "limpeza"){
				$(`[name=${instance}]`).css('display', 'none')
				$(".acoes1").css('display', 'inline-block')
				$(".acoes1").val('Encerrar Limpeza')
				$(".acoes2").css('display', 'none')
				$(".acoes2").val('')
				$(".acoes3").css('display', 'none')
				$(".acoes3").val('')
				limpeza(instance, rotal, x, y, z)
			} else if(modo == "pernoite"){
				$(`[name=${instance}]`).css('display', 'none')
				$(".acoes1").css('display', 'inline-block')
				$(".acoes1").val('Encerrar')
				$(".acoes2").css('display', 'none')
				$(".acoes2").val('')
				$(".acoes3").css('display', 'none')
				$(".acoes3").val('')
				pernoite(instance, "", x, y, z)
			}
			dados.forEach( (resultado) => {
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
	
			})
		} catch (error) {
			localStorage.setItem('produtos', JSON.stringify([]))
		}
	})
    setTimeout( () => {
		$.get(link[5], (e) => {
			var dados = e.filter(quartos => quartos.quarto == instance)
			var sum = 0;
			for(var a = 0; a < dados.length; a++){
				sum += parseFloat(dados[a].valor_total.slice(2).trim())
			}
			$("#consumo_painel").text(sum.toFixed(2))
		})
        
    }, 500)
	setTimeout( () => {
		var valor_quarto = $("#valor-quarto").text()
		var valor_consumo = $("#consumo_painel").text()
		var atualizacao_preco = $("#atualizacaoPreco").text() == "" ? "0" : $("#atualizacaoPreco").text()
		var novo_valor = atualizacao_preco == 0 ? valor_quarto : parseFloat(atualizacao_preco) + parseFloat(valor_quarto)
		var resultado = parseFloat(valor_consumo) + parseFloat(novo_valor)
		$("#parcial_painel").text(resultado.toFixed(2))
	}, 670)
}
