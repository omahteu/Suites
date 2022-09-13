function ligar_ahluz(quarto){
    var dados = JSON.parse(localStorage.getItem("autos"))
    var url = `http://${dados.placa}/?${dados.rele}*`
    //$.ajax({ url: url, success: function (data) { location.reload(true); } });
}

