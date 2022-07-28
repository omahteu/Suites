function zeroFill(n) {
    return n < 9 ? `0${n}` : `${n}`;
}

export function data_atual(){
    var base = new Date();
    var dia = zeroFill(base.getDate())
    var mes = zeroFill(base.getMonth() + 1)
    var ano = zeroFill(base.getFullYear())
    return `${String(dia)}/${String(mes)}/${String(ano)}`
}
