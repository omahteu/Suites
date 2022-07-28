export var modos = ['x1', 'x2', 'x3', 'x4', 'x5', 'x6', 'x7', 'x8', 'x9', 'x10', 'x11', 'x12']
export var quartoum = ['a1', 'a2', 'a3']
export var quartodois = ['a4', 'a5', 'a6']
export var nomeCamareiras = []

const url = "https://defmoteapi.herokuapp.com/camareiras/"

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

export function espera(){
    console.log('esperando')
}

export function ret(){
    var nome_camareira = $("#camareira").text()
    return nome_camareira
}

$("#limparFormPostQuarto").click(function() {
    document.getElementById('formPostQuarto').reset()
})

$("#limparFormPostProduto").click(function() {
    document.getElementById('formPostProduto').reset()
})

$("#limparFormPostIg").click(function() {
    document.getElementById('formPostIG').reset()
})

$("#limparFormPostEmail").click(function() {
    document.getElementById('formPostEmail').reset()
})

$("#limparFormPostCamareira").click(function() {
    document.getElementById('formPostCamareira').reset()
})
