$(document).ready(function(){
    saudacao()
})

function saudacao(){
    var base = new Date()
    var hora = base.getHours()
    if(hora >= 0 && hora < 12){
        $("#periodo").text("Bom dia")
    } else if(hora >= 12 && hora <= 18){
        $("#periodo").text("Boa tarde")
    } else{
        $("#periodo").text("Boa noite")
    }
}