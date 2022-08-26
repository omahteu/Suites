import { link } from "../setup/index.js"

$("#peIgs").click(function(){

    var janela = window.open()
    janela.document.write("<html>")
    janela.document.write("<head>")
    janela.document.write("<title>Suits | Relatórios | PDF</title>")
    janela.document.write("</head>")
    janela.document.write("<body>")
    janela.document.write(
        '<h1>Relatório de Informações Gerais</h1>'+
        '<table border="1">'+
            '<thead>'+
                '<tr>'+
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
                '</tr>'+
            '</thead>'
    )
    $.get(link[10], function(e){
        e.forEach(el => {
            janela.document.write(
                `<tbody>`+
                    '<tr>'+
                        `<td>${el.social}</td>`+
                        `<td>${el.fantasia}</td>`+
                        `<td>${el.cnpj}</td>`+
                        `<td>${el.cidade}</td>`+
                        `<td>${el.endereco}</td>`+
                        `<td>${el.numero}</td>`+
                        `<td>${el.bairro}</td>`+
                        `<td>${el.telefone}</td>`+
                        `<td>${el.telefone2}</td>`+
                        `<td>${el.telefone3}</td>`+
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
