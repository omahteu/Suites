import { link } from "../../setup/index.js"

$(document).ready(function(){
    dados_ig()
})

async function dados_ig(){
    const req = await fetch(link[10])
    const res = await req.json()
    res.forEach(e => {
        $("#ig_social").attr("placeholder", e.social)
        $("#ig_fantasia").attr("placeholder", e.fantasia)
        $("#ig_cnpj").attr("placeholder", e.cnpj)
        $("#ig_cidade").attr("placeholder", e.cidade)
        $("#ig_endereco").attr("placeholder", e.endereco    )
        $("#ig_numero").attr("placeholder", e.numero)
        $("#ig_bairro").attr("placeholder", e.bairro)
        $("#ig_telefone").attr("placeholder", e.telefone)
        $("#ig_telefone2").attr("placeholder", e.telefone2)
        $("#ig_telefone3").attr("placeholder", e.telefone3)
    })
}