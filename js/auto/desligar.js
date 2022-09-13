export function desligar_luz() {
    var dados = JSON.parse(localStorage.getItem("autos"))
    var url = `http://${dados.placa}/?${dados.rele}d`
    $.ajax({ url: url, success: function (data) { location.reload(true); } });
}
