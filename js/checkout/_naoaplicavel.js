export function naoAplicavel() {
	$(document).on("click", "#aplicar_desconto", function () {
		let forma = $("#modo_desconto :selected").text()
		if (forma == "Modo") {
			alert("Escolha um tipo de desconto")
		}
	})
	$(document).on("click", "#nao_aplicavel", function () {
		let camareira = $("#selecionaCamareira :selected").text()
		if (camareira == "Camareira") {
			alert("selecione camareira")
		} else {
			$(this).css("background", "black")
			$(this).attr("disabled", "true")
			$("#aplicar_desconto").attr("disabled", "true")
			$("#aplicar_desconto").css("background", "black")
			$("#valor_desconto").attr("disabled", "true")
		}
	})
}
