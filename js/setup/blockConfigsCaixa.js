$(document).ready(function() {
    bloqueioConfig()
})

function bloqueioConfig(){
    let info = localStorage.getItem("usuarioLogado")
    if(info === 'caixa'){
        $("[name='config_tempo']").css('display', 'none')
        $("[name='config_pernoite']").css('display', 'none')
        $("[name='config_cartoes']").css('display', 'none')
        $("[name='config_valor']").css('display', 'none')
        $("[name='config_quartos']").css("display", "none")
        //$("[name='cadPernoite']").css('display', 'none')
        //$("[name='cadCartoes']").css('display', 'none')
    }
}
