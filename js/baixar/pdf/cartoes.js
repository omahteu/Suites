import { link } from "../../setup/index.js"

$("#p_cartoes").click(function(){

    var janela = window.open()
    janela.document.write("<html>")
    janela.document.write("<head>")
    janela.document.write("<title>Suits | Relatórios | PDF</title>")
    janela.document.write("</head>")
    janela.document.write("<body>")
    janela.document.write(
        '<h1>Relatório de Cartões</h1>'+
        "<table border='1'>"+
            "<thead>"+
                "<tr>"+
                    "<th>Bandeira</th>"+
                    "<th>Porcentagem</th>"+
                    "<th>Tipo</th>"+
                "</tr>"+
            "</thead>"
    )
    $.get(link[4], function(e){
        e.forEach(el => {
            janela.document.write(
                `<tbody>`+
                    '<tr>'+
                        `<td>${el.bandeira}</td>`+
                        `<td>${el.porcentagem}</td>`+
                        `<td>Crédito</td>`+
                    '</tr>'+
                `</tbody>`
            )
        });
    })
    $.get(link[8], function(e){
        e.forEach(el => {
            janela.document.write(
                `<tbody>`+
                    '<tr>'+
                        `<td>${el.bandeira}</td>`+
                        `<td>${el.porcentagem}</td>`+
                        `<td>Débito</td>`+
                    '</tr>'+
                `</tbody>`
            )
        });
    })
    janela.document.write("</body>")
    janela.document.write("</html>")
    setTimeout(() => {
        janela.print()
    }, 500);
})
