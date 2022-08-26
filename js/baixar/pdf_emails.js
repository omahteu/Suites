import { link } from "../setup/index.js"

$("#peEmails").click(function(){

    var janela = window.open()
    janela.document.write("<html>")
    janela.document.write("<head>")
    janela.document.write("<title>Suits | Relatórios | PDF</title>")
    janela.document.write("</head>")
    janela.document.write("<body>")
    janela.document.write(
        '<h1>Relatório de Emails</h1>'+
        '<table border="1">'+
            '<thead>'+
                '<tr>'+
                    "<th>Usuário</th>"+
                    "<th>Senha</th>"+
                    "<th>Smtp</th>"+
                    "<th>Porta</th>"+
                    "<th>Timeout</th>"+
                    "<th>Email Destino</th>"+
                    "<th>Email Contabilidade</th>"+
                    "<th>Autênticacao</th>"+
                '</tr>'+
            '</thead>'
    )
    $.get(link[9], function(e){
        e.forEach(el => {
            janela.document.write(
                `<tbody>`+
                    '<tr>'+
                        `<td>${el.usuario}</td>`+
                        `<td>${el.senha}</td>`+
                        `<td>${el.smtp}</td>`+
                        `<td>${el.porta}</td>`+
                        `<td>${el.timeout}</td>`+
                        `<td>${el.email_destino}</td>`+
                        `<td>${el.email_contabilidade}</td>`+
                        `<td>${el.autenticacao}</td>`+
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
