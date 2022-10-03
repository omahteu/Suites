import { link } from "../setup/index.js"
import { dateToEN } from "../geradores/data.js"


$(document).on("click", "#buscar_dados", function () {
    let usuario = $("#codigo_caixa").val()
    let inicio = $("#inicio_filtro").val()
    let fim = $("#final_filtro").val()
    dados_atividade(usuario, inicio, fim)
})

async function dados_atividade(user, inicio, fim) {
    const requisicao = await fetch(link[22])
    const resposta = await requisicao.json()
    var prontuario = document.getElementById("dados_produtos")
    prontuario.innerHTML = ""
    let ficha = resposta.filter(e => e.nome == user)
    ficha.forEach(e => {
        var dts = dateToEN(e.data)
        var datas = new Date(dts)
        var date1 = new Date(inicio)
        var date2 = new Date(fim)
        if (datas > date1 && datas < date2) {
            prontuario.innerHTML += `<tr>` +
                                        `<td>${e.codigo}</td>` +
                                        `<td>${e.nome}</td>` +
                                        `<td>${e.data}</td>` +
                                        `<td>${e.tipo}</td>` +
                                        `<td>${e.quantidade}</td>` +
                                    `</tr>`
        }
    });
}
