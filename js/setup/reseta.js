import { fimModal } from "./camareiras.js"

var tempoDeEspera = 5 * 10 * 100;
var timeout = setTimeout(inativo, tempoDeEspera);

function actividade(e) {
  clearInterval(timeout);
  timeout = setTimeout(inativo, tempoDeEspera);
}

function inativo() {
  $("#quarto_painel").text('0')
	$("#intervalo").text('0')
  $("#valor-quarto").text('0')
  $("#preco_quarto").text('0')
  $("#consumo_painel").text("0")
  $("#parcial_painel").text("0")
  $("#vq_painel").text("0")
  $("#vh_painel").text("0")
  $("#tipo").text('0')
  $("#entrada").text('')
  $("#atualizacaoPreco").text("0")
	var prateleiraResultado = document.getElementById('listaProdutosComprados')
	prateleiraResultado.innerHTML = '';
  var patioResultado = document.getElementById('listaveiculosguardados')
  patioResultado.innerHTML = ''
  var fm = document.forms['botoes']
  var el = fm.elements
  el[0].setAttribute("name", '')
  el[1].setAttribute("name", '')
  el[2].setAttribute("name", '')
  fimModal()
}

['keyup', 'touchmove' in window ? 'touchmove' : 'mousemove', "onwheel" in document.createElement("div") ? "wheel" : document.onmousewheel !== undefined ? "mousewheel" : "DOMMouseScroll"].forEach( (ev) => {
  window.addEventListener(ev, actividade);
});
