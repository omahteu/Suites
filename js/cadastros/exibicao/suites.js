import { link } from "../../setup/index.js"

export async function exibe_suites(){
    const req = await fetch(link[17])
    const res = await req.json()
    res.forEach(e => {
        $("#lista_quartos").append(`<option>${e.numero} | ${e.nome}</option>`)
    });
}