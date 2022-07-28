"use strict";

let hora
let minuto
let segundo
let msegundo = 0
let kronos
let suite


export  function _crnmtra1(id, a, b, c) {
    suite = id
    hora = Number(a)
    minuto = Number(b)
    segundo = Number(c)
    _crnmtrb1()
    kronos = setInterval(() => { _crnmtrd1(suite); }, 10);
}

export function _crnmtrb1() {
    clearInterval(kronos);
}

export function _crnmtrc1(id) {
    hora = 0;
    minuto = 0;
    segundo = 0;
    msegundo = 0;
    document.getElementById(`hora${id}`).innerText = '00';
    document.getElementById(`minuto${id}`).innerText = '00';
    document.getElementById(`segundo${id}`).innerText = '00';
}

export function _crnmtrd1(id) {
    if ((msegundo += 10) == 1000) {
        msegundo = 0;
        segundo++;
    }
    if (segundo == 60) {
        segundo = 0;
        minuto++;
    }
    if (minuto == 60) {
        minuto = 0;
        hora++;
    }
    document.getElementById(`hora${id}`).innerText = _crnmtre1(hora)
    document.getElementById(`minuto${id}`).innerText = _crnmtre1(minuto)
    document.getElementById(`segundo${id}`).innerText = _crnmtre1(segundo)
    console.log(document.getElementById(`segundo${id}`).innerText = _crnmtre1(segundo))
}

export function _crnmtre1(input) {
    if(input >= 10){
        return input
    } else if(input >= 1 && input <= 9){
        return `0${input}`
    } else if(input == 0 || String(input) == "00"){
        return `0${input}`
    } else {
        return `0${input}`
    }
}
