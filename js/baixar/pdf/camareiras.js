import { link } from "../../setup/index.js"

$("#p_camareiras").click(function(){
    var janela = window.open()
    janela.document.write("<html>")
    janela.document.write("<head>")
    janela.document.write("<title>Suits | Relatórios | PDF</title>")
    janela.document.write("</head>")
    janela.document.write("<body>")
    janela.document.write(
        '<h1>Relatório de Camareiras</h1>'+
        '<table border="1">'+
            '<thead>'+
                '<tr>'+
                    '<th>Nome</th>'+ 
                    '<th>Código</th>'+ 
                '</tr>'+
            '</thead>'
    )
    $.get(link[3], function(e){
        console.log(e)
        e.forEach(el => {
            janela.document.write(
                `<tbody>`+
                    '<tr>'+
                        `<td>${el.nome}</td>`+
                        `<td>${el.codigo}</td>`+
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
