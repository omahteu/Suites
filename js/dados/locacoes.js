import { link } from "../setup/index.js"
import { dateToEN } from "../geradores/data.js"


$(document).on("click", "#buscar_dados", function () {
    let usuario = $("#codigo_caixa").val()
    let inicio = $("#inicio_filtro").val()
    let fim = $("#final_filtro").val()
    dados_limpeza(usuario, inicio, fim)
})

async function dados_limpeza(user, inicio, fim) {
    const requisicao = await fetch(link[13])
    const resposta = await requisicao.json()
    var prontuario = document.getElementById("dados_locacoes")
    prontuario.innerHTML = ""
    let ficha = resposta.filter(e => e.usuario == user)
    ficha.forEach(e => {
        var dts = dateToEN(e.data)
        var datas = new Date(dts)
        var date1 = new Date(inicio)
        var date2 = new Date(fim)
        if (datas > date1 && datas < date2) {
            prontuario.innerHTML += `<tr>` +
                                        `<td>${e.codigo}</td>` +
                                        `<td>${e.usuario}</td>` +
                                        `<td>${e.data}</td>` +
                                        `<td>${e.quarto}</td>` +
                                        `<td>${e.entrada}</td>` +
                                        `<td>${e.saida}</td>` +
                                        `<td>${e.total}</td>`+
                                    `</tr>`
        }
    });
}
