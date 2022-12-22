import link from "../../setup/index.js"

export function insereValor(suite, valor, tipo){
    let mensagem = `Valor de ${valor} referente a Pernoite da Suíte ${suite} adicionado!`
    let dados = {
        suite: suite,
        valor: valor,
        tipo: tipo
    }
    $.post(link[36], dados, ()=> {console.log(mensagem)})
}
