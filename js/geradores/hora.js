function zeroFill(n) {
    return n < 9 ? `0${n}` : `${n}`;
}

export function hora_atual(){
    var base = new Date();
    var hora = zeroFill(base.getHours())
    var minuto = zeroFill(base.getMinutes())
    //var segundo = base.getSeconds()
    return `${hora}:${minuto}`
}
