import { link } from "../setup/index.js"

$("#peCartoes").click(function(){


    var jan = window.open()
    janela.document.write(
        "<html>"+
            "<head>"+
                "<title>Relatório de Produtos | PDF</title>"+
            "</head>"+
            "<body>"+
                "<table border='1'>"+
                    "<thead>"+
                        "<tr>"+
                            "<th>bandeira</th>"+
                            "<th>porcentagem</th>"+
                        "</tr>"+
                    "</thead>"+
                    "<tbody id='pdf_rel_cartoes'>"+
                    "</tbody>"+
                "</table>"+
            "</body>"+
        "</html>"
    )
    jan.innerHTML = tab
    //rel_pdf_credito()
})

function rel_pdf_credito(){
    /*
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
                            "<th>bandeira</th>"+
                            "<th>porcentagem</th>"+
                        "</tr>"+
                    "</thead>"+
                    "<tbody id='pdf_rel_cartoes'>"+
                    "</tbody>"+
                "</table>"+
            "</body>"+
        "</html>"
    )
    */

    $.get(link[4], function(){
        var lista = document.getElementById("pdf_rel_cartoes")
        lista.innerHTML = ''
        dados.forEach(e => {
            console.log(e)
            lista.innerHTML += '<tr>'+
                                    '<td>' + e.bandeira + '</td>'+
                                    '<td>' + e.porcentagem + '</td>'+        
                                '</tr>'
        });
    })


}