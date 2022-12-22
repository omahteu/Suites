import link from "../setup/index.js"

export default async function desligar_luz(quarto) {
    const requisicao = await fetch(link[27])
    const resposta = await requisicao.json()
    var dados = resposta.filter(e => e.quarto == quarto)
    var url = `http://${dados[0].placa}/?${dados[0].rele}d`
    $.ajax({ url: url, success: function (data) { location.reload(true); } });
    localStorage.setItem("luz", "apagada")
    $("#botao_inferior_tres").val("Ligar Luz")
    localStorage.setItem("status_botao", "desligado")
}
