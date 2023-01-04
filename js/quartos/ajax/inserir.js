import link from "../../setup/index.js"
import { data_atual } from "../../geradores/data.js"
import { hora_atual } from "../../geradores/hora.js"


export function iniciarValor(suite, valor){
    let mensagem = `[SUCESSO] | Cofre aberto para a Suíte ${suite}! | ${hora_atual()}`
    let dados = {
        suite: suite,
        valor: valor,
        tipo: "locacao"
    }
    $.post(link[36], dados, () => {console.log(mensagem)})
}
