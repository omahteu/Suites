import { link } from "../setup/index.js"
import { _crnmtra1 } from "../contadores/restart/c1.js"
import { _crnmtra2 } from "../contadores/restart/c2.js"
import { hora_atual_segundos } from "../geradores/hora.js"

$(document).ready(function(){
    recuperando_tempo()
})

async function recuperando_tempo(){
    const requisicao = await fetch(link[11])
    const resposta = await requisicao.json()
    resposta.forEach(e => {
        let inicio = e.datahora
        let agora = hora_atual_segundos()
        var ms = moment(agora, "HH:mm:ss").diff(moment(inicio, "HH:mm:ss"));
        var d = moment.duration(ms);
        var tempoPassado = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");
        var stp = tempoPassado.split(":")
        _crnmtra1(e.quarto, stp[0], stp[1], stp[2])
    });
}
