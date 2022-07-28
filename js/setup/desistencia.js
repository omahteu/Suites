import { data_atual } from "../geradores/data.js"
import { hora_atual } from "../geradores/hora.js"
import { link } from "./index.js"

$("#aceitar_desistencia").click(function() {
    setTimeout( () => {desistir()}, 300)
    setTimeout( () => {registrando_desistencia()}, 500)
    setTimeout( () => {limpando_desistencia()}, 800)
    setTimeout( () => {
        window.close()
    }, 1000)
})

var texto = []

function desistir(){
    var motivo = prompt("Informe o motivo da desistência!")
    if(motivo == ""){
        alert("campo vazio")
    } else {
        texto.push(motivo)
        let usuario = $("#usuario_sistema").text()
        let quarto = localStorage.getItem("quarto")
        var box = JSON.parse(localStorage.getItem("dadosQuarto"))
        let dataAtual = data_atual()
        let codigo_ocupacao = gera_codigo()
        let entrada = box[0].tempo
        let saida = hora_atual()
        localStorage.setItem(`codigo${quarto}`, codigo_ocupacao)
        dados = {
            usuario: usuario,
            data: dataAtual,
            codigo: codigo_ocupacao,
            quarto: quarto,
            entrada: entrada,
            saida: saida,
            total: "0"
        }
        $.post(link[13], dados, () => {
            console.log("Relatório Criado")
        })
    }
}

function limpando_desistencia(){
    var quartx = localStorage.getItem("quarto")
    $.get(link[5], (e) =>{
        var dados = e.filter(quartos => quartos.quarto == quartx)
        var id = dados[0].id
        $.ajax({
            url: link[5] + id + "/",
            type: 'DELETE'
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

function registrando_desistencia(){
    var quarto = localStorage.getItem("quarto")
    var codigo = localStorage.getItem(`codigo${quarto}`)
    var caixa = localStorage.getItem("caixa")
    var motiv = texto[texto.length - 1]
    dados = {
        codigo: codigo,
        quarto: quarto,
        caixa: caixa,
        motivo: motiv
    }
    $.post(link[7], dados, () => {
        console.log("Registrado...")
    })
}
