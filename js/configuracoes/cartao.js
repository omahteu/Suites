import { link } from "../setup/index.js"

export async function lista_cartoes_credito() {
    const req = await fetch(link[4])
    const res = await req.json()
    let tcredito = document.getElementById("tabela_credito")
    tcredito.innerHTML = ""
    res.forEach(e => {
        tcredito.innerHTML += '<tr>' +
            `<td value="${e.id}">Crédito</td>` +
            `<td>${e.bandeira}</td>` +
            `<td>${e.porcentagem}</td>` +
            `<td><button type="button" class="btn btn-primary" id="editar_cartoes" value="${e.id},c">Editar</button></td>` +
            '</tr>'
    });
}

export async function lista_cartoes_debito() {
    const reqs = await fetch(link[8])
    const rest = await reqs.json()
    let tdebito = document.getElementById("tabela_debito")
    tdebito.innerHTML = ""
    rest.forEach(e => {
        tdebito.innerHTML += '<tr>' +
            `<td value="${e.id}">Débito</td>` +
            `<td>${e.bandeira}</td>` +
            `<td>${e.porcentagem}</td>` +
            `<td><button type="button" class="btn btn-primary" id="editar_cartoes" value="${e.id},d">Editar</button></td>` +
            '</tr>'
    });
}