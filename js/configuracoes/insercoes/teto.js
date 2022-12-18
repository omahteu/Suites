import { link } from "../../setup/index.js"

// ALTERAR PARA ID 1 EM PRODUÇÃO

$(document).on("click", "#salvarTeto", function(){
    let teto = $("#teto_valor").val()
    $.ajax({
        url: `${link[31]}2/`,
        type: "PUT",
        dataType: "json",
        data: {teto: teto},
        success: () => {
            alert("Alterações Realizadas!")
            location.reload()
        }
    })
})
