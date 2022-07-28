import { data_atual } from "../geradores/data.js"
import { hora_atual } from "../geradores/hora.js"
import { link } from "../setup/index.js"

$("#encerrar").click(function() {
    setTimeout( () => {registrando()}, 300)
    setTimeout( () => {ocupacao()}, 500)
    setTimeout( () => {limpando()}, 800)
    setTimeout( () => {
        window.close()
    }, 1000)
})

function clean(id){
    $.ajax({
        url: link[5] + id + "/",
        type: 'DELETE',
        success: () => {
            console.log("apagado")
        },
        async: true
    })
}

function limpando(){
    var quartx = localStorage.getItem("quarto")
    $.get(link[5], (e) =>{
        var dados = e.filter(quartos => quartos.quarto == quartx)
        dados.forEach(element => {
            var id = element.id
            clean(id)
        });
    })
    $.get(link[15], (e) =>{
        var dados = e.filter(quartos => quartos.quarto == quartx)
        if(dados.length == 0){
            console.log("Pátio Vázio!")
        } else {
            var id = dados[0].id
            $.ajax({
                url: link[15] + id + "/",
                type: 'DELETE'
            });
        }
    })
    localStorage.removeItem(quartx)
    localStorage.removeItem("dadosQuarto")
    localStorage.removeItem(quartx)
    localStorage.removeItem("quarto")
}

function registrando(){
    let quarto = localStorage.getItem("quarto")
    var box = []
    $.get(link[5], (e) =>{
        var dados_comanda = e.filter(quartos => quartos.quarto == quarto)
        dados_comanda.forEach(elemento => {
            let descricao = elemento.descricao
            let quantidade = elemento.quantidade
            box.push(descricao, quantidade)
        });
    })
    $.get(link[16], (e) =>{
        var resultado_produtos = box.filter( estadosComS  => (estadosComS.length > 2));
        var resultado_quantidade = box.filter( estadosComS  => (estadosComS.length < 3));
        for(var i = 0; i <= resultado_produtos.length; i++){
            var conjunto = [resultado_produtos[i], resultado_quantidade[i]]
            var produto = conjunto[0]
            var produto_quantidade = conjunto[1]
            var dados = e.filter(quartos => quartos.descricao == produto)
            dados.forEach(el => {
                var estoque = el.quantidade
                var id_estoque = el.id
                var codigo_estoque = el.codigo
                var descricao_estoque = el.descricao
                var valorunitario_estoque = el.valorunitario
                var categoria_estoque = el.categoria
                var novo_estoque = parseInt(estoque) - parseInt(produto_quantidade)
                var data_estoque = el.data
                $.ajax({
                    url: link[16] + id_estoque + "/",
                    type: "PUT",
                    dataType: "json",
                    data: {
                        codigo: codigo_estoque,
                        descricao: descricao_estoque,
                        valorunitario: valorunitario_estoque,
                        quantidade: novo_estoque,
                        categoria: categoria_estoque,
                        data: data_estoque
                    }
                })
            });
        }
    })
}

function gera_codigo(){
	var size = 5
	var randomized = Math.ceil(Math.random() * Math.pow(10,size))
	return randomized
}

function ocupacao(){
    let usuario = $("#usuario_sistema").text()
    let quarto = localStorage.getItem("quarto")
    var box = JSON.parse(localStorage.getItem("dadosQuarto"))
    let dataAtual = data_atual()
    let codigo_ocupacao = gera_codigo()
    let entrada = box[0].tempo
    let saida = hora_atual()
    let total = $("#totalGeral").text()
    localStorage.setItem(`codigo${quarto}`, codigo_ocupacao)
    var dados = {
        usuario: usuario,
        data: dataAtual,
        codigo: codigo_ocupacao,
        quarto: quarto,
        entrada: entrada,
        saida: saida,
        total: total
    }
    $.post(link[13], dados, () => {
        console.log("Relatório Criado")
    })
}
