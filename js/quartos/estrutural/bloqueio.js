export function bloqueio(tempo, id){
    const time = parseInt(tempo) * 1000
    setTimeout( () => {
        $(id).css('display', 'none')
    }, time)
}
