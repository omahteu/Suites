$(document).ready(function() {
    historicoUrls()
})

function historicoUrls(){
    let info = localStorage.getItem("usuarioLogado")
    let status = localStorage.getItem('caixa')
    if(info === 'caixa'){
        $("#home").attr('href', './home.html')
        $("#urlCadastrosCaixa").attr('href', './homecaixa.html')
        $("#urlQuartosCaixa").attr('href', './homecaixa.html')
        $("#urlCaixaCaixa").attr('href', './homecaixa.html')
    } else if(info === 'admin'){
        $("#home").attr('href', './home.html')
        $("#urlCadastrosCaixa").attr('href', './home.html')
        $("#urlQuartosCaixa").attr('href', './home.html')
        $("#urlConfiguracoesAdmin").attr('href', './home.html')
    }
    if(status == 'aberto'){
        $("#abrirCaixa").css('display', 'none')
        $("#usarFundoCaixa").css('display', 'none')
        $("#fecharCaixa").css('display', 'inline')
    } else if(status == "fechado"){
        $("#abrirCaixa").css('display', 'inline')
        $("#usarFundoCaixa").css('display', 'inline')
        $("#fecharCaixa").css('display', 'none')
    }
}
