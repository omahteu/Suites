import { link } from "../../setup/index.js"

$(document).on("click", "#editar_cartoes", function() {
    let base = $(this).attr("value")
    let id = String(base).split(",")[0]
    let tipo = String(base).split(",")[1]
    $(document).one("click", "#atualizar_cartoes", function(){
        let nova_taxa = $("#nova_taxa").val()
        tipo == "c" ? cred(id, nova_taxa) : debi(id, nova_taxa)
    })

})

function cred(id, taxa){
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: `${link[4]}${id}/`,
        type: 'PATCH',
        data: JSON.stringify({ porcentagem: taxa }),
        success: function () {
            alert("Porcentagem Alterada!")
            location.reload()
        },
        error: function (textStatus, errorThrown) {
            console.log(`ERRO: ${textStatus} - ${errorThrown}`)
        }
    })
}

function debi (id, taxa){
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: `${link[8]}${id}/`,
        type: 'PATCH',
        data: JSON.stringify({ porcentagem: taxa }),
        success: function () {
            alert("Porcentagem Alterada!")
            location.reload()
        },
        error: function (textStatus, errorThrown) {
            console.log(`ERRO: ${textStatus} - ${errorThrown}`)
        }
    })
}
