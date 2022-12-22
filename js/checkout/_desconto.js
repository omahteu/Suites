export function desconto() {
	$(document).on("change", "#modo_desconto", function () {
		let tpd = $("#modo_desconto :selected").text()
		if (tpd == "Valor") {
			$(document).on("click", "#aplicar_desconto", function () {
				let camareira = $("#selecionaCamareira :selected").text()
				if (camareira == "Camareira") {
					alert("selecione camareira")
				} else {
					let descontar = parseFloat($("#valor_desconto").val().replace(",", "."))
					$("#valorDesconto").text(`R$ ${descontar}`)
					$("#aplicar_desconto").css("background", "black")
					$("#nao_aplicavel").attr("disabled", "true")
					$("#nao_aplicavel").css("background", "black")
				}

			})
		} else if (tpd == "Percentual") {
			$(document).on("click", "#aplicar_desconto", function () {
				let camareira = $("#selecionaCamareira :selected").text()
				if (camareira == "Camareira") {
					alert("selecione camareira")
				} else {
					let descontar = parseFloat($("#valor_desconto").val().replace(",", "."))
					$("#valorDesconto").text(`${descontar}%`)
					$("#aplicar_desconto").css("background", "black")
					$("#nao_aplicavel").attr("disabled", "true")
					$("#nao_aplicavel").attr("disabled", "true")
					$("#nao_aplicavel").css("background", "black")
				}
			})
		}
	})
}
