$(document).ready(function() {
    var usuarioLogado = localStorage.getItem('usuarioLogado');
    if (!usuarioLogado) {
        window.location = "../index.html"
    }
})

$("#fecharCaixa").click(function() {
    localStorage.removeItem('usuarioLogado')
    setTimeout( () => {
        document.location.reload(true)
        localStorage.removeItem("id")
        localStorage.removeItem("data")
        localStorage.removeItem("entrada")
        localStorage.removeItem("usuario")
        localStorage.removeItem("fundo")
        localStorage.removeItem("caixa")
        localStorage.removeItem("nome")             
    }, 4000)
})
