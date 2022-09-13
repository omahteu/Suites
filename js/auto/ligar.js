export function ligar_luz() {
    $.ajax({ url: "http://192.168.0.3/?8*", success: function (data) { location.reload(true); } });
}
