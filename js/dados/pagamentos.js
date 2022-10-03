import { link } from "../setup/index.js"
import { dateToEN } from "../geradores/data.js"


$(document).on("click", "#buscar_dados", function () {
    let usuario = $("#codigo_caixa").val()
    let inicio = $("#inicio_filtro").val()
    let fim = $("#final_filtro").val()
    dados_pagamento(usuario, inicio, fim)
})

async function dados_pagamento(user, inicio, fim) {
    const requisicao = await fetch(link[33])
    const resposta = await requisicao.json()
    var prontuario = document.getElementById("dados_pagamentos")
    prontuario.innerHTML = ""
    let ficha = resposta.filter(e => e.usuario == user)
    ficha.forEach(e => {
        var dts = dateToEN(e.data)
        var datas = new Date(dts)
        var date1 = new Date(inicio)
        var date2 = new Date(fim)
        if (datas > date1 && datas < date2) {
            prontuario.innerHTML += `<tr>` +
                                        `<td>${e.valor}</td>` +
                                        `<td>${e.forma}</td>` +
                                        `<td>${e.parcela}</td>` +
                                        `<td>${e.data}</td>` +
                                    `</tr>`
        }
    });
}
