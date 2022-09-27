import { link } from "../setup/index.js"
import { _crnmtra1, _crnmtrb1 } from "../contadores/restart/c1.js"
import { _crnmtra2, _crnmtrb2 } from "../contadores/restart/c2.js"
import { crnmtrb1 } from "../contadores/cronometros/c1.js"
import { crnmtrb2 } from "../contadores/cronometros/c2.js"
import { modos } from "../setup/box.js"
import { locado } from "../tags/locacao.js"
import { fimModalTroca } from "../setup/troca.js"
import { aguardando } from "../tags/aguardo.js"
import { desfazer } from "../tags/desfazer.js"



$("#substituir").click(function(){

    var pers = []
    var quarto = $("#quarto_antigo").val()
    var novo = $("#quartos_disponiveis").val()

    $.get(link[5], function(e){
        var dados = e.filter(item => item.quarto === quarto)
        dados.forEach(el => {
            var id = el.id
            $.ajax({
                headers : {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                url : link[5] + id + "/",
                type : 'PATCH',
                data : JSON.stringify({quarto: novo}),
                success : function() {
                    console.log("Troca Com Sucesso!");
                },
                error : function(textStatus, errorThrown) {
                    console.log(`ERRO: ${textStatus} - ${errorThrown}`)
                }
            })    
        })
    })
    $.get(link[15], function(e){
        var dados = e.filter(item => item.quarto === quarto)
        dados.forEach(e => {
            var id = e.id
            $.ajax({
                headers : {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                url : link[15] + id + "/",
                type : 'PATCH',
                data : JSON.stringify({quarto: novo}),
                success : function() {
                    console.log("Troca Com Sucesso!");
                },
                error : function(textStatus, errorThrown) {
                    console.log(`ERRO: ${textStatus} - ${errorThrown}`)
                }
            })
        })
    })
    setTimeout( () => {iniciando(novo)}, 1000)
    setTimeout( () => {finalizando(quarto)}, 1500)
    

})

function iniciando(suite){
    var quarto = $("#quarto_antigo").val()
    var hora = $(`#hora${quarto}`).text()
    var minutos = $(`#minuto${quarto}`).text()
    var segundos = $(`#segundo${quarto}`).text()
    var permanencia = [hora, minutos, segundos]
    let flags = suite == "1" ? modos.slice(0, 3) : modos.slice(3, 6)
    setTimeout( () => {locado(suite, flags[0], flags[1], flags[2])}, 200)
    setTimeout( () => {suite == "1" ? _crnmtra1(suite, permanencia[0], permanencia[1], permanencia[2]) : _crnmtra2(suite, permanencia[0], permanencia[1], permanencia[2])}, 300)
    setTimeout( () => {fimModalTroca()}, 400)
    setTimeout( () => {
        $.get(link[11], function(e){
            var dados = e.filter(item => item.quarto === quarto)
            dados.forEach(e => {
                sessionStorage.setItem("ficha", JSON.stringify(e))
            })
        })

    }, 500)
    setTimeout( () => {
        var card = JSON.parse(sessionStorage.getItem("ficha"))
        var ficha = {
            datahora: card.datahora,
            valor: card.valor,
            quarto: suite,
            tipo: "locado"
        }
        $.post(link[11], ficha, function(){})
    }, 700)
}

function finalizando(suite){
    let flags = suite == "1" ? modos.slice(0, 3) : modos.slice(3, 6)
    suite == "1" ? crnmtrb1() : crnmtrb2()
    setTimeout( () => {desfazer(suite, flags[0], flags[1], flags[2])}, 200)
    setTimeout( () => {aguardando(suite, flags[0], flags[1], flags[2])}, 300)
    setTimeout( () => {
        $.get(link[11], function(e){
            var dados = e.filter(item => item.quarto === suite)
            dados.forEach(e => {
                sessionStorage.setItem("fichas", JSON.stringify(e))
            })
        })

    }, 500)
    setTimeout( () => {
        var card = JSON.parse(sessionStorage.getItem("fichas"))
        var id = card.id
        $.ajax({
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            url : link[11] + id + "/",
            type : 'PATCH',
            data : JSON.stringify({tipo: "aguardando"}),
            success : function() {
                console.log("Troca Com Sucesso!");
            },
            error : function(textStatus, errorThrown) {
                console.log(`ERRO: ${textStatus} - ${errorThrown}`)
            }
        })
    }, 700)
}
