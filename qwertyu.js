$("#escolhe_tempo").change(function(){
    var item = $(this).val()
    var formConfTempo = document.forms.namedItem("formTempo")[1]

    switch (item) {
        case "troca":
            $(formConfTempo).removeAttr("style")
            $(formConfTempo).attr("placeholder", "Novo Tempo")
            $(formConfTempo).attr("id", "novo_tempo")
            break;
        
        case "desistencia":
            break
        
        case "limpeza":
            break

        case "faxina":
            break

        case "manutencao":
            break
    
        default:
            break;
    }
})