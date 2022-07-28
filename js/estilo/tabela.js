$(document).ready(function () {
    var dataTableEnabled = '1';
    if (dataTableEnabled == '1') {
        $('#tabela').dataTable({
            "ordering": false,
            "language": {
                "url": "https://osmaster.scriptphp.ru/assets/js/dataTable_pt-br.json"
            }
        });
    }
});