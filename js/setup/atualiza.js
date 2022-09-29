import { link } from "./index.js"
import { hora_atual_segundos } from "../geradores/hora.js"

export function atualiza_status(quarto, status){
    $.get(link[11], (e) =>{
        var dados = e.filter(quartos => quartos.quarto == quarto)
        let id = dados[0].id
        let datahora = hora_atual_segundos()
        let valor = dados[0].valor
        let quartx = dados[0].quarto
        $.ajax({
            url: link[11] + id + "/",
            type: "PUT",
            dataType: "json",
            data: {
                datahora: datahora,
                valor: valor,
                quarto: quartx,
                tipo: status
            }
        })
    })
}