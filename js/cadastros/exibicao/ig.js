import { link } from "../../setup/index.js"

$(document).ready(function() {
    relatorioIg()
})

async function relatorioIg(){
    const resposta = await fetch(link[10])
    const dados = await resposta.json()
    dados.forEach(elemento => {
        $("#razaoSocialIg").attr("placeholder", elemento.social)
        $("#nomeFantasiaIg").attr("placeholder", elemento.fantasia)
        $("#cnpjIg").attr("placeholder", elemento.cnpj)
        $("#cidadeIg").attr("placeholder", elemento.cidade)
        $("#enderecoIg").attr("placeholder", elemento.endereco)
        $("#numeroIg").attr("placeholder", elemento.numero)
        $("#bairroIg").attr("placeholder", elemento.bairro)
        $("#telefoneIg").attr("placeholder", elemento.telefone)
        $("#telefone2Ig").attr("placeholder", elemento.telefone2)
        $("#telefone3Ig").attr("placeholder", elemento.telefone3)
    });
}
