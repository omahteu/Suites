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

export async function seleciona_tempo(){
    const resposta = await fetch(link[19])
    const dados = await resposta.json()
    dados.forEach(e => {
        $("#escolhe_tempo").change(function() {
            var option = $(this).find(":selected").text()
            
            var card = document.forms.namedItem("formTempo")[1]
    
            console.log(card)
    
            if(option == "Troca de Quarto"){
                $(card).attr("placeholder", e.troca).removeAttr("style")
            } else if(option == "Desistência"){
                $(card).attr("placeholder", e.desistencia).removeAttr("style")
            } else if(option == "Limpeza"){
                $(card).attr("placeholder", e.limpeza).removeAttr("style")
            } else if(option == "Faxina"){
                $(card).attr("placeholder", e.faxina).removeAttr("style")
            } else if(option == "Manutenção"){
                $(card).attr("placeholder", e.manutencao).removeAttr("style")
            }
        })
    })

}
