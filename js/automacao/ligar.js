import link from "../setup/index.js"

export default async function ligar_luz(quarto) {
    const requisicao = await fetch(link[27])
    const resposta = await requisicao.json()
    var dados = resposta.filter(e => e.quarto == quarto)
    var url = `http://${dados[0].placa}/?${dados[0].rele}*`
    $.ajax({ url: url, success: function (data) { location.reload(true); } });
}
