import link from "../../../setup/index.js"
import { data_atual } from "../../../geradores/data.js"
import { hora_atual_segundos } from "../../../geradores/hora.js"

export function registra_troca(caixa, antigo, novo){
    let agora = hora_atual_segundos()
    let hoje = data_atual()
    let dados = {
        caixa: caixa,
        data: hoje,
        hora: agora,
        antigo: antigo,
        novo: novo
    }
    $.post(link[26], dados, () => {})
}
