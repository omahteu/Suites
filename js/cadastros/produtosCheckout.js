import { link } from "../setup/index.js"

$(document).ready(function() {

    produtoCodigo()

    $.get(link[16], (resultado) => {

    resultado.forEach( (item) => {
        $('#listaCheckout').append('<option>' + item.descricao + '</option>');
    });

    $('#listaCheckout').change( () => {
        var option = $('#listaCheckout').find(":selected").index()

        var db = option - 1
    
        $(".descricaoCheckout").val(resultado[db].descricao)
        $(".unitarioCheckout").val('R$ ' + resultado[db].valorunitario)
    
        $('.quantidadeCheckout').keyup( () => {
            var qtd = $(this).val()
            var total = Number(resultado[db]['valorunitario']) * Number(qtd)
            $(".totalCheckout").val('R$ ' + total)
        });
    });
})
})

function produtoCodigo(){

    $('.codigoCheckout').keypress( (event) => {

        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){

            $.get(link[16], (resultado) => {

                var db = 0
    
                $(".descricaoCheckout").val(resultado[db].descricao)
                $(".unitarioCheckout").val('R$ ' + resultado[db].valorunitario)
            
                $('.quantidadeCheckout').keyup( () => {
                    var qtd = $(this).val()
                    var total = Number(resultado[db]['valorunitario']) * Number(qtd)
                    $(".totalCheckout").val('R$ ' + total)
                });
            })
        }
    });
}

$("#addLista").click(function() {

    var quarto = sessionStorage.getItem('quarto')
	var descricao = $(".descricaoCheckout").val()
    var quantidade = $(".quantidadeCheckout").val()
	var valorTotal = $(".totalCheckout").val()
    var valorUnitario = $("unitarioCheckout").val()

	var produto = {
		quarto: quarto,
		descricao: descricao,
		quantidade: quantidade,
		valor_total: valorTotal,
		valor_unitario: valorUnitario,
        datahora: '',
        valor_quarto: ''
	}

	if(produto.valor_quarto === ''){
		alert('Não é possível adicionar produto vázio!')
	} else {
		$.post(lin[5], produto, () => {
			calcular()
			document.getElementById('FormPostProdutosCheckout').reset()
		})
	}
})

function exibirProduto(){

	// Requisição GET
	$.get(link[5], (retorno) => {

		// Parâmetro e Instância de Tabela
		//var nQuarto =  $("#numquarto").text()
        var nQuarto = sessionStorage.getItem('quarto')
        console.log(nQuarto)
		var prateleira = document.getElementById('itensComprados');
		prateleira.innerHTML = '';

		// Filtro
		var dados = retorno.filter(quartos => quartos.quarto == nQuarto)
        console.log(dados)

		// Percorrendo o Array e Formantando uma Tabela
		dados.forEach( (resultado) => {

			var id = resultado.id
			var descricao = resultado.descricao
			var quantidade = resultado.quantidade
			var valorUnitario = resultado.valor_unitario
			var valor_total = resultado.valor_total

            prateleira.innerHTML += '<tr>'+
                                        '<td>'+
                                            '<div class="product-cart d-flex">'+
                                                '<div class="product-content media-body">'+
                                                    '<h5 class="title">' + descricao + '</h5>'+
                                                    '<span>Unidade Custa R$ ' + valorUnitario + '</span>'+
                                                '</div>'+
                                            '</div>'+
                                        '</td>'+
                                        '<td>'+
                                            '<p>' + quantidade + '</p>'+
                                        '</td>'+
                                        '<td>'+
                                            '<p class="price" id="total">' + valor_total + '</p>'+
                                        '</td>'+
                                        '<td><button onclick="removeProduto(' + id  + ')" class="btn btn-danger" id="removeritens">Remover</button></td>'+
                                    '</tr>';
		})
	})
}

function calcular(){

    var nql = []
    var numero_quarto = JSON.parse(sessionStorage.getItem('quarto'))

	$.get(link[5], (retorno) => {

		var sum = 0
		var valor_quarto

		var adicionalQuarto = JSON.parse(localStorage.getItem('dadosQuarto'))
		let tempo = adicionalQuarto[0].tempo
	    var prateleira = document.getElementById('itensComprados');
		prateleira.innerHTML = '';

		try {
			var dados = retorno.filter(quartos => quartos.quarto == numero_quarto)

			dados.forEach(elemento => {

				var id = elemento.id
				var descricao =  elemento.descricao
				var quantidade =  elemento.quantidade
				var valor_total = elemento.valor_total
				var valor_unitario = elemento.valor_unitario
				valor_quarto = elemento.valor_quarto
                
                nql.push(valor_quarto)

				prateleira.innerHTML += '<tr>'+
											'<td>'+
												'<div class="product-cart d-flex">'+
													'<div class="product-content media-body">'+
														'<h5 class="title">' + descricao + '</h5>'+
														'<span>Unidade Custa R$ ' + valor_unitario + '</span>'+
													'</div>'+
												'</div>'+
											'</td>'+
											'<td>'+
												'<p>' + quantidade + '</p>'+
											'</td>'+
											'<td>'+
												'<p class="price" id="total">' + valor_total + '</p>'+
											'</td>'+
											'<td><button onclick="removeItens(' + id  + ')" class="btn btn-danger">Remover</button></td>'+
										'</tr>';
			});
		} catch (error) {
			localStorage.setItem('produtos', JSON.stringify([]))
		}

		var precoProdutos = $("[id=total]").text()
		var somaPrecoProdutos = precoProdutos.split('R$')

		var totalPrecoProdutos = somaPrecoProdutos.filter( (i) => {
			return i;
		});

		for(var a = 0; a < totalPrecoProdutos.length; a++){
			sum += parseFloat(totalPrecoProdutos[a])
		}

		$("#valorItens").text(sum)
		$("#valorQuarto").text(nql[0])
		$("#tempoPermanencia").text(tempo)
		
		var ttgeral = Number(valor_quarto) + Number(sum)

		$("#totalGeral").text(ttgeral)
		$("#desconto").click( () => {
			
			var codigoDeconto = $("#codigoDesconto").val()
			$("#totalGeral").text(ttgeral = ttgeral - codigoDeconto)
			$("#codigoDesconto").val('')
			var descont = document.getElementById('codigoDesconto')
			descont.disabled = true
			$("#valorDesconto").text(codigoDeconto)
			
		})
	})
}
