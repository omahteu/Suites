import { link } from "../../setup/index.js"

export async function exibe_placas(){
    const req = await fetch(link[28])
    const res = await req.json()
    res.forEach(e => {
        $("#lista_placa").append(`<option>${e.ip}</option>`)
    });
}