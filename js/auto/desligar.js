export function desligar_luz() {
    $.ajax({ url: "http://192.168.0.3/?8d", success: function (data) { location.reload(true); } });
}
