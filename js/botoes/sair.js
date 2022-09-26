$(document).on("click", "#sair", () => {
    let status = localStorage.getItem("usuarioLogado")
    console.log(status)

    if (status == "admin"){
        localStorage.removeItem("usuarioLogado")
        localStorage.removeItem("nome")
        localStorage.removeItem("caixa")
        localStorage.removeItem("permanencia")
        window.location.href = "http://127.0.0.1:5501/index.html"
    } else if (status == "caixa"){
        window.location.href = "http://127.0.0.1:5501/html/caixa.html"
    }
})
