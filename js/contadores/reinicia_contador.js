import { link } from "../setup/index.js"
import { _crnmtra1 } from "../contadores/restart/c1.js"
import { _crnmtra2 } from "../contadores/restart/c2.js"

$(document).one("click", '[class="card"]', function() {
    console.log(this)
    definindo_tempo()
})

function zeroFill(n) {
    return n < 9 ? `0${n}` : `${n}`;
}

function horas_para_minutos(f0) {
    return ((Number(f0[0]) * 60) + Number(f0[1]))
}

const minutos_para_hora = (minutos) => {
    const horas = Math.floor(minutos / 60);
    const min = minutos % 60;
    const textoHoras = (`00${horas}`).slice(-2);
    const textoMinutos = (`00${min}`).slice(-2);
    return `${textoHoras}:${textoMinutos}`;
}

const base = new Date()
const h = zeroFill(base.getHours())
const mi = zeroFill(base.getMinutes())
const s = zeroFill(base.getSeconds())
const hmi = `${h}:${mi}`

async function definindo_tempo(){
    const search = await fetch(link[11])
    const retorno = await search.json()
    retorno.forEach(e => {
        var quarto = e.quarto
        var hora_salva = e.datahora
        var hora_salva_formatada = String(hora_salva).split(":")
        var hora_atual_formatada = String(hmi).split(":")
        var hora_salva_formatada_minutos = horas_para_minutos(hora_salva_formatada)
        var hora_atual_formatada_minutos = horas_para_minutos(hora_atual_formatada)
        var diferenca = hora_atual_formatada_minutos - hora_salva_formatada_minutos
        var diferenca_formatada_horas = minutos_para_hora(diferenca)
        var diferenca_formatada_horas_texto = String(diferenca_formatada_horas).split(":")

        if(quarto == "1"){
            _crnmtra1(quarto, diferenca_formatada_horas_texto[0], diferenca_formatada_horas_texto[1], s)
        } else if(quarto == "2"){
            _crnmtra2(quarto, diferenca_formatada_horas_texto[0], diferenca_formatada_horas_texto[1], s)
        }
    })
}
