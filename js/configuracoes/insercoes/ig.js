import { link } from "../../setup/index.js"


$(document).on("click", "#salvarIg", function(){
    let social = $("#ig_social").val()
    let fantasia = $("#ig_fantasia").val()
    let cnpj = $("#ig_cnpj").val()
    let cidade = $("#ig_cidade").val()
    let endereco = $("#ig_endereco").val()
    let numero = $("#ig_numero").val()
    let bairro = $("#ig_bairro").val()
    let telefone = $("#ig_telefone").val()
    let telefone2 = $("#ig_telefone2").val()
    let telefone3 = $("#ig_telefone3").val()
    let dados = {
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
        url: `${link[10]}1/`,
        type: "PUT",
        dataType: "json",
        data: dados,
        success: () => {
            alert("Alterações Realizadas!")
            location.reload()
        }
    })
})
