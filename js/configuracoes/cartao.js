import { link } from "../setup/index.js"

export async function busca_cartao(){
    const query = await fetch(link[4])
    const dados = await query.json()
    const query2 = await fetch(link[8])
    const dados2 = await query2.json()
    for(var i = 0; i < dados.length; i++){
        var string = dados[i].porcentagem
        var metade = Math.floor(string.length / 2);
        var resultado = string.substr(0,metade)+"."+string.substr(metade);
        // Setar a porcentagem no placeholder
        $("#cartoes").prepend(
            `<div class="control-group" name="">`+
                `<div class="controls">`+
                    `<input type="text" class="credito" id="${dados[i].bandeira}" placeholder="Crédito: ${resultado}">`+
                `</div>`+
            `</div>`
        )
    }
    for(var i = 0; i < dados2.length; i++){
        var string = dados2[i].porcentagem
        var metade = Math.floor(string.length / 2);
        var resultado2 = string.substr(0,metade)+"."+string.substr(metade);
        $("#cartoes").prepend(
            `<div class="control-group" name="">`+
                `<div class="controls">`+
                    `<input type="text" class="debito" id="${dados2[i].bandeira}" placeholder="Débito: ${resultado2}">`+
                `</div>`+
            `</div>`
        )
    }
}
/*
$("#tipo_cartao").change(function(){
    var selecionado = $(this).val()
    $("#bandeira_cartao").change(function(){
        var bandeira_selecionada = $(this).val()
        if(selecionado == "credito" && bandeira_selecionada == "master"){
            // crédito master
        } else if(selecionado == "credito" && bandeira_selecionada == "visa"){
            // crédito visa
        } else if(selecionado == "credito" && bandeira_selecionada == "elo"){
            // crédito elo
        } else if(selecionado == "debito" && bandeira_selecionada == "master"){
            // débito master
        } else if(selecionado == "debito" && bandeira_selecionada == "visa"){
            // débito visa
        } else if(selecionado == "debito" && bandeira_selecionada == "elo"){
            // débito elo
        }
    })
})

*/