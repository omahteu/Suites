$(document).one("ready", function() {
    estar_logado()
})

function estar_logado(){
    var usuarioLogado = localStorage.getItem('usuarioLogado');
    if (!usuarioLogado) {
        window.location = "../index.html"
    } else {
        window.location = "./paginas/home.html"
    }
}
