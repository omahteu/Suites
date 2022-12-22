import link from "../../setup/index.js"

export function leituraObservacoes(){
    $.get(link[14], (retorno) => {
        var numero_quarto =  $("#quarto_painel").text()
        var dados = retorno.filter(quartos => quartos.quarto == numero_quarto)
        dados.forEach(elemento => {
            $("#numquarto").text(elemento.quarto)
            $("#pes").val(elemento.pessoas)
            $("#muralObs").val(elemento.texto)
        });
    })
}
