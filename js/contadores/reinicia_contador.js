import { link } from "../setup/index.js"
import { _crnmtra1 } from "../contadores/restart/c1.js"
import { _crnmtra2 } from "../contadores/restart/c2.js"
import { horas_para_minutos } from "../conversores/hora_minutos.js"
import { minutos_para_hora } from "../conversores/minutos_hora.js"
import { numero } from "../geradores/numero.js"

$(document).on("click", '[class="card"]', function() {
    definindo_tempo()
})

const base = new Date()
const h = numero(base.getHours())
const mi = numero(base.getMinutes())
const s = numero(base.getSeconds())
const hmi = `${h}:${mi}`

async function definindo_tempo(){
    const search = await fetch(link[11])
    const retorno = await search.json()
    retorno.forEach(e => {
        var quarto = e.quarto
        var hora_salva = e.datahora
        var tipo = e.tipo
        var hora_salva_formatada = String(hora_salva).split(":")
        console.log(hora_salva_formatada)
        var hora_atual_formatada = String(hmi).split(":")
        var hora_salva_formatada_minutos = horas_para_minutos(hora_salva_formatada)
        var hora_atual_formatada_minutos = horas_para_minutos(hora_atual_formatada)
        var diferenca = hora_atual_formatada_minutos - hora_salva_formatada_minutos
        var diferenca_formatada_horas = minutos_para_hora(diferenca)
        var diferenca_formatada_horas_texto = String(diferenca_formatada_horas).split(":")

        /*
        if(quarto == "1" && tipo != "aguardando"){
            _crnmtra1(quarto, diferenca_formatada_horas_texto[0], diferenca_formatada_horas_texto[1], s)
        } else if(quarto == "2" && tipo != "aguardando"){
            _crnmtra2(quarto, diferenca_formatada_horas_texto[0], diferenca_formatada_horas_texto[1], s)
        }
        */
    })
}
