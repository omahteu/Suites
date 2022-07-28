import { link } from "../setup/index.js"

$("#peQuartos").click(function(){
    $.get(link[17], function(e){
        e.forEach(element => {
            var janela = window.open()
            janela.document.write(
                "<html>"+
                    "<head>"+
                        "<title>Relatório de Quartos | PDF</title>"+
                    "</head>"+
                    "<body>"+
                        "<table border='1'>"+
                            "<thead>"+
                                "<tr>"+
                                    "<th>Código</th>"+
                                    "<th>Número</th>"+
                                    "<th>Tipo Quarto</th>"+
                                    "<th>Tipo Tabela</th>"+
                                    "<th>Percentual</th>"+
                                "</tr>"+
                            "</thead>"+
                            "<tbody"+
                                '<tr>'+
                                    '<td>' + element.codigo + '</td>'+
                                    '<td>' + element.numero + '</td>'+
                                    '<td>' + element.tipo_quarto + '</td>'+
                                    '<td>' + element.tipo_tabela + '</td>'+
                                    '<td>' + element.percentual + '</td>'+
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
