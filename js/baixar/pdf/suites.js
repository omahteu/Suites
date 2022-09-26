import { link } from "../../setup/index.js"

$("#p_suites").click(function(){
    var janela = window.open()
    janela.document.write("<html>")
    janela.document.write("<head>")
    janela.document.write("<title>Suits | Relatórios | PDF</title>")
    janela.document.write("</head>")
    janela.document.write("<body>")
    janela.document.write(
        '<h1>Relatório de Suítes</h1>'+
        '<table border="1">'+
            '<thead>'+
                '<tr>'+
                    '<th>Código</th>'+ 
                    '<th>Número</th>'+ 
                    '<th>Nome</th>'+ 
                    '<th>Horas Locação</th>'+ 
                    '<th>Tolerância</th>'+ 
                    '<th>Cobrança</th>'+ 
                    '<th>Excedente</th>'+ 
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
                        `<td>${el.nome}</td>`+
                        `<td>${el.horas_locacao}</td>`+
                        `<td>${el.tolerancia}</td>`+
                        `<td>${el.cobranca}</td>`+
                        `<td>${el.excedente}</td>`+
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
