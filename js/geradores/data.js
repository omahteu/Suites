import { numero } from "../geradores/numero.js"

export function data_atual(){
    var base = new Date();
    var dia = numero(base.getDate())
    var mes = numero(base.getMonth() + 1)
    var ano = numero(base.getFullYear())
    return `${String(dia)}/${String(mes)}/${String(ano)}`
}
