$(document).ready(function(){
    var status = localStorage.getItem("usuarioLogado")
    if (status != "admin"){
        location.href = "http://127.0.0.1:5501/html/home.html"
    }
})
