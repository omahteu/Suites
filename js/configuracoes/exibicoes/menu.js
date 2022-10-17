export function abrirMenu(modalID){
    const modal = document.getElementById(modalID)
    modal.classList.add('mostrar')

    modal.addEventListener('click', (e) => {
        if(e.target.id == modalID || e.target.className == 'fechar'){
            modal.classList.remove('mostrar')
        }
    })
}

export function fecharMenu(){
    $('#modau-menu').removeClass('modau-container mostrar').addClass('modau-container')
    document.getElementById('menu').reset()
}
