import { link } from "../setup/index.js"

$("#peOcupacoes").click(function(){

    var janela = window.open()
    janela.document.write("<html>")
    janela.document.write("<head>")
    janela.document.write("<title>Suits | Relatórios | PDF</title>")
    janela.document.write("</head>")
    janela.document.write("<body>")
    janela.document.write(
        '<h1>Relatório de Ocupações</h1>'+
        '<table border="1">'+
            '<thead>'+
                '<tr>'+
                    "<th>Data</th>"+
                    "<th>Código</th>"+
                    "<th>Quarto</th>"+
                    "<th>Entrada</th>"+
                    "<th>Saída</th>"+
                    "<th>Total</th>"+ 
                '</tr>'+
            '</thead>'
    )
    $.get(link[13], function(e){
        e.forEach(el => {
            janela.document.write(
                `<tbody>`+
                    '<tr>'+
                        `<td>${el.data}</td>`+
                        `<td>${el.codigo}</td>`+
                        `<td>${el.quarto}</td>`+
                        `<td>${el.entrada}</td>`+
                        `<td>${el.saida}</td>`+
                        `<td>${el.total}</td>`+
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
