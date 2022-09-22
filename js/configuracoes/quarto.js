import { link } from "../setup/index.js"

export async function busca_quarto() {
    const query = await fetch(link[21])
    const dados = await query.json()
    dados.forEach(e => {
        $("#valorLocacaoQuarto").attr("placeholder", e.valor_locacao)
        $("#v1hQuarto").attr("placeholder", e.vh1)
        $("#v2hQuarto").attr("placeholder", e.vh2)
        $("#v3hQuarto").attr("placeholder", e.vh3)
        $("#v4hQuarto").attr("placeholder", e.vh4)
        $("#v5hQuarto").attr("placeholder", e.vh5)
        $("#v6hQuarto").attr("placeholder", e.vh6)
    });
}
