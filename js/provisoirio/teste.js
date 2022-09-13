$(document).on("click", "#teste_placa", function(){
    //$("#testa_placa").removeAttr("style")
    $.ajax({
        url: "http://192.168.0.3/?L8",
        success: function(data, textStatus, xhr) {
            console.log(xhr.status);
        },
        complete: function(xhr, textStatus) {
            console.log(xhr.status);
        } 
    });
})