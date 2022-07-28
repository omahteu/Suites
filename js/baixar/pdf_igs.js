import { link } from "../setup/index.js"

$("#peIgs").click(function(){
    $.get(link[10], function(e){
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
                                    "<th>Social</th>"+
                                    "<th>Fantasia</th>"+
                                    "<th>CNPJ</th>"+
                                    "<th>Cidade</th>"+
                                    "<th>Endereco</th>"+
                                    "<th>Número</th>"+
                                    "<th>Bairro</th>"+
                                    "<th>Telefone</th>"+
                                    "<th>Telefone 2</th>"+
                                    "<th>Telefone 3</th>"+
                                "</tr>"+
                            "</thead>"+
                            "<tbody"+
                                '<tr>'+
                                    '<td>' + element.social + '</td>'+
                                    '<td>' + element.fantasia + '</td>'+
                                    '<td>' + element.cnpj + '</td>'+
                                    '<td>' + element.cidade + '</td>'+
                                    '<td>' + element.endereco + '</td>'+
                                    '<td>' + element.numero + '</td>'+
                                    '<td>' + element.bairro + '</td>'+  
                                    '<td>' + element.telefone + '</td>'+  
                                    '<td>' + element.telefone2 + '</td>'+  
                                    '<td>' + element.telefone3 + '</td>'+         
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
