import { link } from "../setup/index.js"

$("#peQuartos").click(function(){
    var janela = window.open()
    janela.document.write("<html>")
    janela.document.write("<head>")
    janela.document.write("<title>Suits | Relatórios | PDF</title>")
    janela.document.write("</head>")
    janela.document.write("<body>")
    janela.document.write(
        '<h1>Relatório de Quartos</h1>'+
        '<table border="1">'+
            '<thead>'+
                '<tr>'+
                    '<th>Código</th>'+ 
                    '<th>Número</th>'+ 
                    '<th>Tipo Quarto</th>'+ 
                    '<th>Tipo Tabela</th>'+ 
                    '<th>Percentual</th>'+ 
                '</tr>'+
            '</thead>'
    )
    $.get(link[17], function(e){
        e.forEach(el => {
            janela.document.write(
                `<tbody>`+
                    '<tr>'+
                        `<td>${el.codigo}</td>`+
                        `<td>${el.numero}</td>`+
                        `<td>${el.tipo_quarto}</td>`+
                        `<td>${el.tipo_tabela}</td>`+
                        `<td>${el.percentual}</td>`+
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
