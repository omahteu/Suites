import { link } from "../setup/index.js"

$("#peEmails").click(function(){
    $.get(link[9], function(e){
        e.forEach(element => {
            var janela = window.open()
            janela.document.write(
                "<html>"+
                    "<head>"+
                        "<title>Relatório de Produtos | PDF</title>"+
                    "</head>"+
                    "<body>"+
                        "<table border='1'>"+
                            "<thead>"+
                                "<tr>"+
                                    "<th>Usuário</th>"+
                                    "<th>Senha</th>"+
                                    "<th>Smtp</th>"+
                                    "<th>Porta</th>"+
                                    "<th>Timeout</th>"+
                                    "<th>Email Destino</th>"+
                                    "<th>Email Contabilidade</th>"+
                                    "<th>Autênticacao</th>"+
                                "</tr>"+
                            "</thead>"+
                            "<tbody"+
                                '<tr>'+
                                    '<td>' + element.usuario + '</td>'+
                                    '<td>' + element.senha + '</td>'+
                                    '<td>' + element.smtp + '</td>'+
                                    '<td>' + element.porta + '</td>'+
                                    '<td>' + element.timeout + '</td>'+
                                    '<td>' + element.email_destino + '</td>'+
                                    '<td>' + element.email_contabilidade + '</td>'+  
                                    '<td>' + element.autenticacao + '</td>'+          
                                '</tr>'+
                            "</tbody"+
                        "</table>"+
                    "</body>"+
                "</html>"
            )
            janela.document.close()
            janela.print()
        });
    })
})
