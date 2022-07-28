$(document).ready(function() {
    bloqueioCadastros()
})

function bloqueioCadastros(){
    let info = localStorage.getItem("usuarioLogado")
    if(info === 'caixa'){
        $("[name='codProdutos']").css("display", "none")
        $("[name='cadQuartos']").css('display', 'none')
        $("[name='cadIgs']").css('display', 'none')
        $("[name='cadEmail']").css('display', 'none')
        $("[name='cadCamareiras']").css('display', 'none')
        $("[name='cadPernoite']").css('display', 'none')
        $("[name='cadCartoes']").css('display', 'none')
    }
}
