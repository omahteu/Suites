var mensagem = `[SUCESSO] | Item Excluído`

export function livia_exclui(url, identificador){
    $.ajax({
		url: url + identificador,
		method: 'DELETE',
		dataType: 'json',
		success: () => {
			console.log(mensagem)
		}
	})
}
