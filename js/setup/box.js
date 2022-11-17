export var tick = {
	"1": ["x1", "x2", "x3"],
	"2": ["x4", "x5", "x6"],
	"3": ["x7", "x8", "x9"],
	"4": ["x10", "x11", "x12"],
	"5": ["x13", "x14", "x15"]
}

export var acao = [
	"Disponibilizar Quarto",	// 0
	"Iniciar Faxina",			// 1
	"Iniciar Limpeza",			// 2
	"Trocar Suíte",				// 3
	"Encerrar",					// 4
	"Encerrar Limpeza",			// 5
	"OK",						// 6
	"Apagar Luz",				// 7
	"Ligar Luz",				// 8
	"Encerrar Faxina",			// 9
	"Selecionar"				// 10
]

export function rg(){
	var size = 3
	var randomized = Math.ceil(Math.random() * Math.pow(10,size))
	return randomized
}

export function liviaExclui(url, identificador){
    $.ajax({
		url: url + identificador,
		method: 'DELETE',
		dataType: 'json',
		success: () => {
			console.log('excluídos!')
		}
	})
}

export function listaCamareiras(camareira){
    $.get(url, (resultado) => {
        var dados = resultado.filter(nomes => nomes.nome == camareira)
        dados.forEach(element => {
            sessionStorage.setItem('camareira'+element.nome, element.nome)
        });
    })
}

export function ret(){
    var nome_camareira = $("#camareira").text()
    return nome_camareira
}
