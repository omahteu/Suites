function inicioModalCaixa(modalID){
    const modal = document.getElementById(modalID)
    modal.classList.add('mostrar')

    modal.addEventListener('click', (e) => {
        if(e.target.id == modalID || e.target.className == 'fechar'){
            modal.classList.remove('mostrar')
        }
    })
}

$(document).ready(function(){
    const modal = document.getElementById("modau-caixa")
    modal.classList.add('mostrar')
})

export function fimModalCaixa(){
    $('#modau-caixa').removeClass('modau-container mostrar').addClass('modau-container')
    document.getElementById('FormMainCaixa').reset()
}


