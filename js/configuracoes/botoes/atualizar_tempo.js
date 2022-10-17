import { link } from "../../setup/index.js"

$(document).on("click", "#atualizar_tempo", function(){
    let tempo = $("#tip_tempo :selected").text()
    let valor = $("#novo_tempo").val()
    
    switch (tempo) {
        case "Desistência":
            $.ajax({
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                url: `${link[19]}1/`,
                type: 'PATCH',
                data: JSON.stringify({ "desistencia": valor }),
                success: function () {
                    alert("Troca Com Sucesso!");
                },
                error: function (textStatus, errorThrown) {
                    console.log(`ERRO: ${textStatus} - ${errorThrown}`)
                }
            })
            break;

        case "Faxina":
            $.ajax({
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                url: `${link[19]}1/`,
                type: 'PATCH',
                data: JSON.stringify({ "faxina": valor }),
                success: function () {
                    alert("Troca Com Sucesso!");
                },
                error: function (textStatus, errorThrown) {
                    console.log(`ERRO: ${textStatus} - ${errorThrown}`)
                }
            })
            break

        case "Limpeza":
            $.ajax({
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                url: `${link[19]}1/`,
                type: 'PATCH',
                data: JSON.stringify({ "limpeza": valor }),
                success: function () {
                    alert("Troca Com Sucesso!");
                },
                error: function (textStatus, errorThrown) {
                    console.log(`ERRO: ${textStatus} - ${errorThrown}`)
                }
            })
            break

        case "Manutenção":
            $.ajax({
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                url: `${link[19]}1/`,
                type: 'PATCH',
                data: JSON.stringify({ "manutencao": valor }),
                success: function () {
                    alert("Troca Com Sucesso!");
                    location.reload()
                },
                error: function (textStatus, errorThrown) {
                    console.log(`ERRO: ${textStatus} - ${errorThrown}`)
                }
            })
            break

        case "Troca de Quarto":
            $.ajax({
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                url: `${link[19]}1/`,
                type: 'PATCH',
                data: JSON.stringify({ "troca": valor }),
                success: function () {
                    alert("Troca Com Sucesso!");
                },
                error: function (textStatus, errorThrown) {
                    console.log(`ERRO: ${textStatus} - ${errorThrown}`)
                }
            })
            break
    
        default:
            break;
    }
})
