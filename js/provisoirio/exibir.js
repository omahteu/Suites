$(document).ready(function(){
    var placas = JSON.parse(localStorage.getItem("placa"))
    $("#lista_placa").append(`<option value="${placas.ip}" >${placas.ip}</option>`)

    // 

    var autos = JSON.parse(localStorage.getItem("autos"))
    var tabela = document.getElementById("tabelaAutomacao")
    tabela.innerHTML = ""
    tabela.innerHTML += "<tr>"+
                            `<td>${autos.quarto}</td>`+
                            `<td>${autos.placa}</td>`+
                            `<td>${autos.rele}</td>`+
                            `<td>`+
                                `<button type="button" name="${autos.quarto}" class="btn btn-primary" id="editar">Editar</button>`+
                            `</td>`+
                        "</tr>"

})

