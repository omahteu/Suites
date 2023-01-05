import { data_atual } from "../geradores/data.js"
import { hora_atual } from "../geradores/hora.js"
import link from "../setup/index.js"
import desligar_luz from "../automacao/desligar.js"

$(document).on("click", "#encerrar", function () {
    setTimeout(() => { registrar_pagamento() }, 100)
    setTimeout(() => { registrando() }, 200)
    setTimeout(() => { ocupacao() }, 300)/*
    setTimeout(() => {
        let id = localStorage.getItem("last")
        desligar_luz(id)
        localStorage.setItem("luz", "desligada")
    }, 400)*/
    setTimeout(() => { limpando() }, 500)
    setTimeout(() => {
        window.close()
    }, 600)
})

function clean(id, indice) {
    $.ajax({
        url: `${link[indice]}${id}/`,
        type: 'DELETE',
        success: () => {
            console.log(`[SUCESSO] | Item Excluído | ${hora_atual()}`)
        },
        async: true
    })
}

function limpando() {
    let suite = localStorage.getItem("last")
    $.get(link[5], (e) => {
        let dados = e.filter(quartos => quartos.quarto == suite)
        dados.forEach(element => {
            var id = element.id
            clean(id, "5")
        });
    })
    $.get(link[15], (e) => {
        let dados = e.filter(quartos => quartos.quarto == suite)
        if (dados.length != 0) {
            clean(id, 15)
        }
    })
    localStorage.removeItem("last")
    localStorage.removeItem(`troca${suite}`)
    localStorage.removeItem(`codigo${suite}`)
}

function registrando() {
    let quarto = localStorage.getItem("last")
    var box = []
    $.get(link[5], (e) => {
        var dados_comanda = e.filter(quartos => quartos.quarto == quarto)
        dados_comanda.forEach(elemento => {
            let descricao = elemento.descricao
            let quantidade = elemento.quantidade
            box.push(descricao, quantidade)
        });
    })
    $.get(link[16], (e) => {
        var resultado_produtos = box.filter(estadosComS => (estadosComS.length > 2));
        var resultado_quantidade = box.filter(estadosComS => (estadosComS.length < 3));
        for (var i = 0; i <= resultado_produtos.length; i++) {
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
                    url: `${link[16]}${id_estoque}/`,
                    type: "PUT",
                    dataType: "json",
                    data: {
                        codigo: codigo_estoque,
                        descricao: descricao_estoque,
                        valorunitario: valorunitario_estoque,
                        quantidade: novo_estoque,
                        categoria: categoria_estoque,
                        data: data_estoque
                    },
                    success: function () {
                        console.log(`[SUCESSO] | Estoque Atualizado | ${hora_atual()}`)
                    }
                })
            });
        }
    })
}

function gera_codigo() {
    var size = 5
    var randomized = Math.ceil(Math.random() * Math.pow(10, size))
    return randomized
}

function ocupacao() {
    let usuario = $("#usuario_sistema").text()
    let quarto = localStorage.getItem("last")
    var box = JSON.parse(sessionStorage.getItem("bl"))
    let dataAtual = data_atual()
    let codigo_ocupacao = gera_codigo()
    let entrada = box[0].datahora
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
        console.log(`[SUCESSO] | Ocupação Registrada | ${hora_atual()}`)
    })
}

function registrar_pagamento() {
    let metodo_pagamento = $("#modo_pagamento :selected").text()
    let parcelas = $("#numero_parcelas").val()
    let pagamento = $("#totalGeral").text()
    let dados = {
        valor: parseFloat(pagamento).toFixed(2),
        forma: metodo_pagamento,
        parcelas: parcelas,
        data: data_atual(),
        usuario: $("#usuario_sistema").text()
    }
    $.post(link[33], dados, () => { 
        console.log(`[SUCESSO] | Pagamento Registrado | ${hora_atual()}`) 
    })
    $.post(link[30], { caixa: parseFloat(pagamento).toFixed(2) }, () => { 
        console.log(`[SUCESSO] | Saldo Adicionado ao Caixa | ${hora_atual()}`) 
    })
}
