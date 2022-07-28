import { link } from "../setup/index.js"

export function ultima_limpeza(quartx){
    localStorage.removeItem("dadosQuarto")
    localStorage.removeItem(`codigo${quartx}`)
    localStorage.removeItem("quarto")
    $.get(link[11], (e) =>{
        var dados = e.filter(quartos => quartos.quarto == quartx)
        var id = dados[0].id
        $.ajax({
            url: link[11] + id + "/",
            type: 'DELETE'
        });
    })
}
