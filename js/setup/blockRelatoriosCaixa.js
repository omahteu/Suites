$(document).ready(function() {
    bloqueioRelatorios()
})

function bloqueioRelatorios(){
    let info = localStorage.getItem("usuarioLogado")
    if(info === 'caixa'){
        $("#relQuartos").css('display', 'none')
        $("#relIg").css('display', 'none')
        $("#relEmail").css('display', 'none')
        $("#relOcupacoes").css('display', 'none')
        $("#relCartoes").css('display', 'none')
        $("[id='relAuditoria']").css("display", "none")
    }
}
