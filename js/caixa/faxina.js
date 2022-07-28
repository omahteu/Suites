import { link } from "../setup/index.js"

export function envia_dados_faxina(caixa, data, hora, quarto, duracao){
    var dados = {
        caixa: caixa,
        data: data,
        hora: hora,
        quarto: quarto,
        tempo: duracao
    }
    $.post(link[23], dados, function(){
        console.log("Registrado")
    })
}
