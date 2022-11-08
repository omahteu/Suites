import { link } from "../../setup/index.js"


export function iniciarValor(suite, valor){
    let mensagem = `Cofre aberto para a Suíte ${suite}!`
    let dados = {
        suite: suite,
        valor: valor,
        tipo: "locacao"
    }
    $.post(link[36], dados, () => {console.log(mensagem)})
}
