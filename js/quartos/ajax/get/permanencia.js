import link from "../../../setup/index.js"
import { hora_atual_segundos } from "../../../geradores/hora.js"

export function recupera_permanencia(suite){
    $.get(link[11], resposta => {
        var dados = resposta.filter(e => e.quarto == suite)
        dados.forEach(e => {
            let inicio = e.datahora
            let agora = hora_atual_segundos()
            var ms = moment(agora, "HH:mm:ss").diff(moment(inicio, "HH:mm:ss"));
            var d = moment.duration(ms);
            var tempoPassado = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");
            $("#tempoPermanencia").text(tempoPassado)
        });
    })
}
