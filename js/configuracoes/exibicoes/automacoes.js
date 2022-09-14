import { link } from "../../setup/index.js"

export async function exibir_automacoes_cadastradas(){
    const requisicao = await fetch(link[27])
    const resposta = await requisicao.json()
    var tabela = document.getElementById("tabelaAutomacao")
    tabela.innerHTML = ""
    resposta.forEach(e => {
        tabela.innerHTML += "<tr>"+
                                `<td>${e.quarto}</td>`+
                                `<td>${e.placa}</td>`+
                                `<td>${e.rele}</td>`+
                                `<td>`+
                                    `<button type="button" name="${e.quarto}" class="btn btn-primary" id="editar">Editar</button>`+
                                `</td>`+
                            "</tr>"
    });
}
