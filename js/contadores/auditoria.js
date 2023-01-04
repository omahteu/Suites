import { hora_atual_segundos } from "../geradores/hora.js"
import { data_atual } from "../geradores/data.js";

var lp = []

function handleVisibilityChange() {
    if (document.visibilityState === "hidden") {
        var agora = hora_atual_segundos()
        var inicio = $(lp).get(-1)
        var ms = moment(agora, "HH:mm:ss").diff(moment(inicio, "HH:mm:ss"));
        var d = moment.duration(ms);
        var tempoPassado = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");
        var dados = {
            tempo: tempoPassado,
            nome: "Tony",
            data: data_atual()
        }
       //$.post(link[0], dados, () => {})
    } else {
        lp.push(hora_atual_segundos())
        location.reload()
    }
}

document.addEventListener("visibilitychange", handleVisibilityChange, false);
