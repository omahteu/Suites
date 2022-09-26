import { link } from "../../setup/index.js"

$("#p_sangrias").click(function(){
    var janela = window.open()
    janela.document.write("<html>")
    janela.document.write("<head>")
    janela.document.write("<title>Suits | Relatórios | PDF</title>")
    janela.document.write("</head>")
    janela.document.write("<body>")
    janela.document.write(
        '<h1>Relatório de Sangrias</h1>'+
        '<table border="1">'+
            '<thead>'+
                '<tr>'+
                    '<th>Dia</th>'+ 
                    '<th>Hora</th>'+ 
                    '<th>Usuário</th>'+ 
                    '<th>Valor</th>'+ 
                    '<th>Antigo Caixa</th>'+
                    '<th>Novo Caixa</th>'+
                '</tr>'+
            '</thead>'
    )
    $.get(link[32], function(e){
        e.forEach(el => {
            janela.document.write(
                `<tbody>`+
                    '<tr>'+
                        `<td>${el.dia}</td>`+
                        `<td>${el.hora}</td>`+
                        `<td>${el.usuario}</td>`+
                        `<td>${el.valor}</td>`+
                        `<td>${el.ac}</td>`+
                        `<td>${el.ns}</td>`+
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
