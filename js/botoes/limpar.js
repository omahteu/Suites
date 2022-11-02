import { link } from "../setup/index.js"

export function ultima_limpeza(suite){
    localStorage.removeItem("dadosQuarto")
    localStorage.removeItem(`codigo${suite}`)
    localStorage.removeItem("quarto")
    $.get(link[11], (e) =>{
        var dados = e.filter(quartos => quartos.quarto == suite)
        var id =    dados[0].id
        $.ajax({
            url: link[11] + id + "/",
            type: 'DELETE'
        });
    })
    $.get(link[5], (e) => {
        var dados = e.filter(quartos => quartos.quarto == suite)
        for (var i = 0; i < dados.length; i++){
            $.ajax({
                url: link[5] + dados[i].id + "/",
                type: 'DELETE'
            });
        }
    })
}
