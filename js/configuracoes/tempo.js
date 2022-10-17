import { link } from "../setup/index.js"

export async function seleciona_tempo() {
    const resposta = await fetch(link[19])
    const dados = await resposta.json()
    var tabela = document.getElementById("tabelaTempos")
    tabela.innerHTML = ""
    dados.forEach(e => {
        tabela.innerHTML += '<tr>' +
            `<td><h5>${e.desistencia}</h5></td>` +
            `<td><h5>${e.faxina}</h5></td>` +
            `<td><h5>${e.limpeza}</h5></td>` +
            `<td><h5>${e.manutencao}</h5></td>` +
            `<td><h5>${e.troca}</h5></td>` +
            `<td><buttoon type="button" class="btn btn-primary" id="scet">Alterar</button></td>` +
            '</tr>'
    })
}
