import { numero } from "../geradores/numero.js"

export function hora_atual(){
    var base = new Date();
    var hora = numero(base.getHours())
    var minuto = numero(base.getMinutes())
    //var segundo = base.getSeconds()
    return `${hora}:${minuto}`
}
