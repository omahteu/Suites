import { link } from "../setup/index.js"

export function envia_dados_manutencao(caixa, data, hora, quarto, motivo, duracao){
    var dados = {
        caixa: caixa,
        data: data,
        hora: hora,
        quarto: quarto,
        motivo: motivo,
        tempo: duracao
    }
    $.post(link[24], dados, function(){
        console.log("Registrado")
    })
}
