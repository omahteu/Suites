import { link } from "../setup/index.js"

export async function ver_tabela_tempos(){
    const resposta = await fetch(link[19])
    const dados = await resposta.json()
    dados.forEach(e => {
        $("#tempo_faxina").attr("placeholder", e.faxina)
        $("#tempo_limpeza").attr("placeholder", e.limpeza)
        $("#tempo_troca_quarto").attr("placeholder", e.troca)
        $("#tempo_manutencao").attr("placeholder", e.manutencao)
        $("#tempo_desistencia").attr("placeholder", e.desistencia)
    });
}

export function seleciona_tempo(){
    $("#escolhe_tempo").change(function() {
        var option = $(this).find(":selected").text()
        if(option == "Troca de Quarto"){
            $("#tempo_troca_quarto").css("display", "inline-block")
            $("#tempo_desistencia").css("display", "none")
            $("#tempo_limpeza").css("display", "none")
            $("#tempo_faxina").css("display", "none")
            $("#tempo_manutencao").css("display", "none")
        } else if(option == "Desistência"){
            $("#tempo_troca_quarto").css("display", "none")
            $("#tempo_desistencia").css("display", "inline-block")
            $("#tempo_limpeza").css("display", "none")
            $("#tempo_faxina").css("display", "none")
            $("#tempo_manutencao").css("display", "none")
        } else if(option == "Limpeza"){
            $("#tempo_troca_quarto").css("display", "none")
            $("#tempo_desistencia").css("display", "none")
            $("#tempo_limpeza").css("display", "inline-block")
            $("#tempo_faxina").css("display", "none")
            $("#tempo_manutencao").css("display", "none")
        } else if(option == "Faxina"){
            $("#tempo_troca_quarto").css("display", "none")
            $("#tempo_desistencia").css("display", "none")
            $("#tempo_limpeza").css("display", "none")
            $("#tempo_faxina").css("display", "inline-block")
            $("#tempo_manutencao").css("display", "none")
        } else if(option == "Manutenção"){
            $("#tempo_troca_quarto").css("display", "none")
            $("#tempo_desistencia").css("display", "none")
            $("#tempo_limpeza").css("display", "none")
            $("#tempo_faxina").css("display", "none")
            $("#tempo_manutencao").css("display", "inline-block")
        }
    })
}
