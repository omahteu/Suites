import {link} from "../setup/index.js"

export function envia_dados_limpeza(caixa, data, hora, quarto, tempo, camareira){
    var dados = {
        caixa: caixa,
        data: data,
        hora: hora,
        quarto: quarto,
        tempo: tempo,
        camareira: camareira
    }
    $.post(link[12], dados, function(){
        console.log("Registrado")
    })
}
