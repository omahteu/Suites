import { hora_atual } from "../geradores/hora.js"
import { link } from "../setup/index.js";

export function index(){
    var datahora = hora_atual()
    var valor = $("#valor-quarto").text()
    var quarto = $("#quarto_painel").text()
    var tipo = $("#tipo").text()
    var dados = {
        datahora: datahora,
        valor: valor,
        quarto: quarto,
        tipo: tipo
    }
    $.get(link[11], (retorno) => {
        if(retorno.length == 0){
            $.post(link[11], dados,  () => {})
        }
        retorno.forEach( (item) => {
            if(item.quarto == quarto){
                console.log('')
            } 
            if(item.quarto != quarto){
                $.post(link[11], dados,  () => {})
            }
        })
    })
}
