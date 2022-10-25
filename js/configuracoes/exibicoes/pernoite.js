import { link } from "../../setup/index.js"

export async function exibir_pernoite(){
    const requisicao = await fetch(link[35])
    const resposta = await requisicao.json()
    resposta.forEach(e => {
        let auto = e.auto
        let permanencia = e.permanencia
        let inicio = e.inicio
        let fim = e.fim
        let tipo = e.tipo
        $("#pernoiteauto")
    });
}