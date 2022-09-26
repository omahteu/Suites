import { link } from "../../setup/index.js"
import { data_atual } from "../../geradores/data.js"
import  { hora_atual_segundos } from "../../geradores/hora.js"

$(document).on("click", "#retirarSangria", function() {
    let usuario = $("#usuario_sistema").text()
    let retirada = $("#retirada").val()
    let hoje = data_atual()
    let agora = hora_atual_segundos()
    let valor_retirada = retirada.replace(",", ".")
    let id = "2"
    let teto = sessionStorage.getItem("teto")
    let caixa = sessionStorage.getItem("diaCaixa")
    let novo_caixa = parseFloat(teto).toFixed(2) - parseFloat(valor_retirada).toFixed(2)

    let dados = {
        dia: hoje,
        hora: agora,
        usuario: usuario,
        valor: valor_retirada,
        ac: caixa,
        ns: novo_caixa
    }

    $.ajax({
        url: link[30] + id + "/",
        type: "PUT",
        dataType: "json",
        data: {caixa: novo_caixa},
        success: () => {
            $.post(link[32], dados, () =>{
                alert("Sangria Com Sucesso!")
                location.reload()
            })
        }
    })
})
