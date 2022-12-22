import link from "../setup/index.js"

export function envia_dados_faxina(caixa, data, hora, quarto, duracao, camareira){
    var dados = {
        caixa: caixa,
        data: data,
        hora: hora,
        quarto: quarto,
        tempo: duracao,
        camareira: camareira
    }
    $.post(link[23], dados, function(){
        console.log("Registrado")
    })
}
