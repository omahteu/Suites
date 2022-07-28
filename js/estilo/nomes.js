$(document).ready(function() {
    usuario()
    saudacao()
})

function usuario(){
    let nome = localStorage.getItem('nome')
    $("#usuario_sistema").text(nome)
}

function saudacao(){
    let hoje = new Date()
    let hora = hoje.getHours()
    if(hora >= 0 && hora < 12){
        $("#saudacao_usuario").text('Bom Dia,')
    } else if(hora >= 12 && hora < 18) {
        $("#saudacao_usuario").text('Boa Tarde,')
    } else {
        $("#saudacao_usuario").text('Boa Noite,')
    }
}
