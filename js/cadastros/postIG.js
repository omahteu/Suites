import { link } from "../setup/index.js"

$("#salvarFormPostIg").click(function() {
    let id_ig = "1"
    let social = $("#razaoSocialIg").val() == "" ? $("#razaoSocialIg").attr("placeholder") : $("#razaoSocialIg").val() 
    let fantasia = $("#nomeFantasiaIg").val() == "" ? $("#nomeFantasiaIg").attr("placeholder") : $("#nomeFantasiaIg").val()
    let cnpj = $("#cnpjIg").val() == "" ? $("#cnpjIg").attr("placeholder") : $("#cnpjIg").val()
    let cidade = $("#cidadeIg").val() == "" ? $("#cidadeIg").attr("placeholder") : $("#cidadeIg").val()
    let endereco = $("#enderecoIg").val() == "" ? $("#enderecoIg").attr("placeholder") : $("#enderecoIg").val()
    let numero = $("#numeroIg").val() == "" ? $("#numeroIg").attr("placeholder") : $("#numeroIg").val()
    let bairro = $("#bairroIg").val() == "" ? $("#bairroIg").attr("placeholder") : $("#bairroIg").val()
    let telefone = $("#telefoneIg").val() == "" ? $("#telefoneIg").attr("placeholder") : $("#telefoneIg").val()
    let telefone2 = $("#telefone2Ig").val() == "" ? $("#telefone2Ig").attr("placeholder") : $("#telefone2Ig").val()
    let telefone3 = $("#telefone3Ig").val() == "" ? $("#telefone3Ig").attr("placeholder") : $("#telefone3Ig").val() 
    var dados = {
        social: social,
        fantasia: fantasia,
        cnpj: cnpj,
        cidade: cidade,
        endereco: endereco,
        numero: numero,
        bairro: bairro,
        telefone: telefone,
        telefone2: telefone2,
        telefone3: telefone3
    }
    $.ajax({
        url: link[10] + id_ig + "/",
        type: "PUT",
        dataType: "json",
        data: dados,
        success:  () => {
            alert("Atualizado")
        }
    })
})
