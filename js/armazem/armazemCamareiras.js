import { desfazer } from "../tags/desfazer.js"
import { pause, reset } from '../contadores/contadorUm.js'
import { fimModal } from "../js/camareiras.js"

$("#selecionaCamareiraLimpeza").click(function() {

    // DECIDIR PRA ONDE VAI ESSE REGISTRO
    
    let camareira = $("#selecionaCamareira").val()
    var quarto = $("#quarto_painel").text()
    var flags = $("#intervalo").text().split(",")
    
    fimModal()
    pause()
    reset()
    setTimeout( () => {desfazer(quarto, flags[0], flags[1], flags[2])}, 1000)

    /*
    var dados = {
        nome: camareira,
        registro: gera_id()
    }

    $.post("https://defmoteapi.herokuapp.com/camareiras/", dados, function(msg){
        alert("Camareira Registrado!")

        document.getElementById('formPostCamareira').reset()
    })*/
})
