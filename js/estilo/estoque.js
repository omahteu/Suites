$(document).ready(function () {
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
                sessionStorage.setItem("estoque.js", "[LOGS] | Falha ao buscar OS de calendário!")
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