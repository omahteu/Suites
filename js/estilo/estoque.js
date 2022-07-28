$(document).ready(function () {
    $(document).on('click', 'a', function (event) {
        var produto = $(this).attr('produto');
        var estoque = $(this).attr('estoque');
        $('.idProduto').val(produto);
        $('#estoqueAtual').val(estoque);
    });

    $('#formEstoque').validate({
        rules: {
            estoque: {
                required: true,
                number: true
            }
        },
        messages: {
            estoque: {
                required: 'Campo Requerido.',
                number: 'Informe um número válido.'
            }
        },
        errorClass: "help-inline",
        errorElement: "span",
        highlight: function (element, errorClass, validClass) {
            $(element).parents('.control-group').addClass('error');
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).parents('.control-group').removeClass('error');
            $(element).parents('.control-group').addClass('success');
        }
    });

    var srcCalendarEl = document.getElementById('source-calendar');
    var srcCalendar = new FullCalendar.Calendar(srcCalendarEl, {
        locale: 'pt-br',
        height: 500,
        editable: false,
        selectable: false,
        businessHours: true,
        dayMaxEvents: true, // allow "more" link when too many events
        displayEventTime: false,
        events: {
            url: "https://osmaster.scriptphp.ru/index.php/mapos/calendario",
            method: 'GET',
            extraParams: function () { // a function that returns an object
                return {
                    status: $("#statusOsGet").val(),
                };
            },
            failure: function () {
                console.log('Falha ao buscar OS de calendário!');
            },
        },
        eventClick: function (info) {
            var eventObj = info.event.extendedProps;
            $('#modalId').html(eventObj.id);
            $('#modalIdVisualizar').attr("href", "https://osmaster.scriptphp.ru/index.php/os/visualizar/" + eventObj.id);
            if (eventObj.editar) {
                $('#modalIdEditar').show();
                $('#linkExcluir').show();
                $('#modalIdEditar').attr("href", "https://osmaster.scriptphp.ru/index.php/os/editar/" + eventObj.id);
                $('#modalIdExcluir').val(eventObj.id);
            } else {
                $('#modalIdEditar').hide();
                $('#linkExcluir').hide();
            }
            $('#modalCliente').html(eventObj.cliente);
            $('#modalDataInicial').html(eventObj.dataInicial);
            $('#modalDataFinal').html(eventObj.dataFinal);
            $('#modalGarantia').html(eventObj.garantia);
            $('#modalStatus').html(eventObj.status);
            $('#modalDescription').html(eventObj.description);
            $('#modalDefeito').html(eventObj.defeito);
            $('#modalObservacoes').html(eventObj.observacoes);
            $('#modalTotal').html(eventObj.total);
            $('#modalValorFaturado').html(eventObj.valorFaturado);

            $('#eventUrl').attr('href', event.url);
            $('#calendarModal').modal();
        },
    });

    srcCalendar.render();

    $('#btn-calendar').on('click', function () {
        srcCalendar.refetchEvents();
    });
});