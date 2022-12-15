import { link } from "../setup/index.js"

export async function busca_cartao(){
    const query = await fetch(link[4])
    const dados = await query.json()
    const query2 = await fetch(link[8])
    const dados2 = await query2.json()
    let tdebito = document.getElementById("tabela_debito")
    tdebito.innerHTML = ""
    dados.forEach(d => {
        tdebito.innerHTML += '<tr>'+
                                `<td value="${d.id}">Débito</td>`+
                                `<td>${d.bandeira}</td>`+
                                `<td>${d.porcentagem}</td>`+
                                `<td><button type="button" class="btn btn-primary" id="editar_cartoes">Editar</button></td>`+
                            '</tr>'
    });
    let tcredito = document.getElementById("tabela_credito")
    tcredito.innerHTML = ""
    dados2.forEach(c => {
        tcredito.innerHTML += '<tr>'+
                                `<td value="${c.id}">Crédito</td>`+
                                `<td>${c.bandeira}</td>`+
                                `<td>${c.porcentagem}</td>`+
                                `<td><button type="button" class="btn btn-primary id="editar_cartoes">Editar</button></td>`+
                            '</tr>'
    });
}
