import { link } from "../setup/index.js"

$("#peCamareiras").click(function(){
    $.get(link[3], function(e){
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
                                    "<th>Nome</th>"+
                                    "<th>Código</th>"+
                                "</tr>"+
                            "</thead>"+
                            "<tbody"+
                                '<tr>'+
                                    '<td>' + element.nome + '</td>'+
                                    '<td>' + element.codigo + '</td>'+         
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
