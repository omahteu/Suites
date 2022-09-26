import { link } from "../../setup/index.js"

$("#p_auditoria").click(function(){
    var janela = window.open()
    janela.document.write("<html>")
    janela.document.write("<head>")
    janela.document.write("<title>Suits | Relatórios | PDF</title>")
    janela.document.write("</head>")
    janela.document.write("<body>")
    janela.document.write(
        '<h1>Relatório de Auditorias</h1>'+
        '<table border="1">'+
            '<thead>'+
                '<tr>'+
                    "<th>Data</th>"+
                    "<th>Usuário</th>"+
                    "<th>Ativo</th>"+
                '</tr>'+
            '</thead>'
    )
    $.get(link[1], function(e){
        e.forEach(el => {
            janela.document.write(
                `<tbody>`+
                    '<tr>'+
                        `<td>${el.data}</td>`+
                        `<td>${el.nome}</td>`+
                        `<td>${el.tempo}</td>`+
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
