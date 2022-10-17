import { link } from "../setup/index.js"

export async function seleciona_tempo() {
    const resposta = await fetch(link[19])
    const dados = await resposta.json()
    var tabela = document.getElementById("tabelaTempos")
    tabela.innerHTML = ""
    dados.forEach(e => {
        tabela.innerHTML += '<tr>' +
            `<td><h5>${e.desistencia}</h5></td>` +
            `<td><h5>${e.faxina}</h5></td>` +
            `<td><h5>${e.limpeza}</h5></td>` +
            `<td><h5>${e.manutencao}</h5></td>` +
            `<td><h5>${e.troca}</h5></td>` +
            `<td><buttoon type="button" class="btn btn-primary" id="scet">Alterar</button></td>` +
            '</tr>'
    })
}

/*
        $("#escolhe_tempo").change(function () {
            var option = $(this).find(":selected").text()
            var card = document.forms.namedItem("formTempo")[1]
            if (option == "Troca de Quarto") {
                $(card)
                .attr("id", "troca")
                .attr("name", "troca")
                .attr("placeholder", e.troca)
                .removeAttr("style")
            } else if (option == "Desistência") {
                $(card)
                .attr("id", "desistencia")
                .attr("name", "desistencia")
                .attr("placeholder", e.desistencia)
                .removeAttr("style")
            } else if (option == "Limpeza") {
                $(card)
                .attr("id", "limpeza")
                .attr("name", "limpeza")
                .attr("placeholder", e.limpeza)
                .removeAttr("style")
            } else if (option == "Faxina") {
                $(card)
                .attr("id", "faxina")
                .attr("name", "faxina")
                .attr("placeholder", e.faxina)
                .removeAttr("style")
            } else if (option == "Manutenção") {
                $(card)
                .attr("id", "manutencao")
                .attr("name", "manutencao")
                .attr("placeholder", e.manutencao)
                .removeAttr("style")
            }
        })
        */



/*
        console.log(e)
        tabela.innerHTML += '<tr>'+
                                `<td>${e.desistencia}</td>`+
                                `<td>${e.faxina}</td>`+
                                `<td>${e.limpeza}</td>`+
                                `<td>${e.manutencao}</td>`+
                                `<td>${e.troca}</td>`+
                            '</tr>'*/