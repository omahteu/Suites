import { link } from "../../setup/index.js"


export async function teto(){
    const req = await fetch(link[31])
    const res = await req.json()
    res.forEach(e => {
        $("#teto_valor").attr("placeholder", e.teto)
    });
}