import { link } from "../setup/index.js"

$("#peOcupacoes").click(function(){
    $.get(link[13], function(e){
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
                                    "<th>Data</th>"+
                                    "<th>Código</th>"+
                                    "<th>Quarto</th>"+
                                    "<th>Entrada</th>"+
                                    "<th>Saída</th>"+
                                    "<th>Total</th>"+
                                "</tr>"+
                            "</thead>"+
                            "<tbody"+
                                '<tr>'+
                                    '<td>' + element.data + '</td>'+
                                    '<td>' + element.codigo + '</td>'+
                                    '<td>' + element.quarto + '</td>'+
                                    '<td>' + element.entrada + '</td>'+
                                    '<td>' + element.saida + '</td>'+
                                    '<td>' + element.total + '</td>'+         
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
