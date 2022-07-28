"use strict";

let hora
let minuto
let segundo
let msegundo = 0
let cron;


export function start_plus(id, a, b, c){
    hora = Number(a)
    minuto = Number(b)
    segundo = Number(c)
    cron = setInterval(() => { times_plus(id) }, 10);
}

export function pause_plus() {
    clearInterval(cron);
}

export function reset_plus(id) {
    hora = 0;
    minuto = 0;
    segundo = 0;
    msegundo = 0;
    document.getElementById(`hora${id}`).innerText = '00';
    document.getElementById(`minuto${id}`).innerText = '00';
    document.getElementById(`segundo${id}`).innerText = '00';
}
  
export function times_plus(id){
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
    $(`hora${id}`).text("")
    $(`hora${id}`).text(returnData(hora))
    $(`minuto${id}`).text("")
    $(`minuto${id}`).text(returnData(minuto))
    $(`minuto${id}`).text("")
    $(`segundo${id}`).text(returnData(segundo))
}
  
export function returnData(input) {
    if(input >= 10){
        return input
    } else if(input >= 1 && input <= 9){
        return `0${input}`
    } else if(input == 0){
        return `0${input}`
    }
}
