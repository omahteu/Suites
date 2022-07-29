import { link } from "../setup/index.js"
import { _crnmtra1 } from "../contadores/restart/c1.js"
import { _crnmtra2 } from "../contadores/restart/c2.js"
import { modos } from "../setup/box.js"
import { locado } from "../tags/locacao.js"
import { fimModal } from "../setup/camareiras.js"
import { fimModalTroca } from "../setup/troca.js"
import { aguardando } from "../tags/aguardo.js"
import { desfazer } from "../tags/desfazer.js"

$("#substituir").click(function(){

    var pers = []

    $.get(link[5], function(e){
        var quarto = $("#quarto_antigo").val()
        var novo = $("#quartos_disponiveis").val()
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
        var quarto = $("#quarto_antigo").val()
        var novo = $("#quartos_disponiveis").val()
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

    var quarto = $("#quarto_antigo").val()
    var novo = $("#quartos_disponiveis").val()
    var hora = $(`#hora${quarto}`).text()
    var minutos = $(`#minuto${quarto}`).text()
    var segundos = $(`#segundo${quarto}`).text()
    var permanencia = [hora, minutos, segundos]
    var rota = $(this).attr('class')
    
    switch (quarto) {
        case "1":
            var flags = modos.slice(0, 3)
            _crnmtra1(novo, permanencia[0], permanencia[1], permanencia[2])
            locado(quarto, rota,  flags[0], flags[1], flags[2])
            setTimeout( () => {
                fimModalTroca()
                $.get(link[11], function(e){
                    var dados = e.filter(item => item.quarto === quarto)
                    dados.forEach(el => {
                        pers.push(el)
                        var id = el.id
                        $.ajax({
                            headers : {
                                'Accept' : 'application/json',
                                'Content-Type' : 'application/json'
                            },
                            url : link[11] + id + "/",
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
            }, 1000)
            setTimeout( () => {desfazer(quarto, flags[0], flags[1], flags[2])}, 1000)
            setTimeout( () => {aguardando(quarto, rota, flags[0], flags[1], flags[2])}, 1500)
            setTimeout( () => {
                var dados = {
                    datahora: pers[0].datahora,
                    valor: pers[0].valor,
                    quarto: pers[0].quarto,
                    tipo: "aguardando"
                }
                $.post(link[11], dados, function(){})
            }, 1550)
            break
        case "2":
            var flags = modos.slice(3, 6)
            _crnmtra2(novo, permanencia[0], permanencia[1], permanencia[2])
            locado(quarto, rota,  flags[0], flags[1], flags[2])
            setTimeout( () => {
                fimModalTroca()
                $.get(link[11], function(e){
                    var dados = e.filter(item => item.quarto === quarto)
                    dados.forEach(el => {
                        pers.push(el)
                        var id = el.id
                        $.ajax({
                            headers : {
                                'Accept' : 'application/json',
                                'Content-Type' : 'application/json'
                            },
                            url : link[11] + id + "/",
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
            }, 1000)
            setTimeout( () => {desfazer(quarto, flags[0], flags[1], flags[2])}, 1000)
            setTimeout( () => {aguardando(quarto, rota, flags[0], flags[1], flags[2])}, 1500)
            setTimeout( () => {
                var dados = {
                    datahora: pers[0].datahora,
                    valor: pers[0].valor,
                    quarto: pers[0].quarto,
                    tipo: "aguardando"
                }
                $.post(link[11], dados, function(){})
            }, 1550)
            break
        default:
            break;
    }
})
