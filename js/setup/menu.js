export function inicioMenu(modalID){
    const modal = document.getElementById(modalID)
    modal.classList.add('mostrar')

    modal.addEventListener('click', (e) => {
        if(e.target.id == modalID || e.target.className == 'fechar'){
            modal.classList.remove('mostrar')
        }
    })
}

export function fimMenu(){
    $('#modau-menu').removeClass('modau-container mostrar').addClass('modau-container')
    document.getElementById('FormMain').reset()
}