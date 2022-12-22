import link from "../setup/index.js"
import { hora_atual_segundos } from "../geradores/hora.js"
import { inicia, para } from "../contadores/cronometros/_relogio1.js"
import { inicia2 } from "../contadores/cronometros/_relogio2.js"

$(document).ready(function () {
    reiniciando()
})

function reiniciando() {
    setTimeout(() => {
        $.get(link[11], e => {
            e.forEach(el => {
                let inicio = el.datahora
                let tipo = el.tipo
                let suite = el.quarto
                if (tipo != "aguardando") {
                    let agora = hora_atual_segundos()
                    var ms = moment(agora, "HH:mm:ss").diff(moment(inicio, "HH:mm:ss"));
                    var d = moment.duration(ms);
                    var tempoPassado = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");
                    var stp = tempoPassado.split(":")
                    suite == "1" ? inicia(suite, stp[0], stp[1], stp[2]) :
                    suite == "2" ? inicia2(suite, stp[0], stp[1], stp[2]) : ""
                } else {
                    let pausado = localStorage.getItem(`_${suite}`)
                    $(`#hora${suite}`).text(pausado.split(",")[0])
                    $(`#minuto${suite}`).text(pausado.split(",")[1])
                    $(`#segundo${suite}`).text(pausado.split(",")[2])
                }
            });
        })
    }, 1000);
}
