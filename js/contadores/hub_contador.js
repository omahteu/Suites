"use strict";

let hour
let minute
let second
let millisecond = 0
let cron;


export function start_plusx(quarto, hora, minuto, segundo){
    hour = Number(hora)
    minute = Number(minuto)
    second = Number(segundo)
    cron = setInterval(() => { times_plus(quarto) }, 10);
}

export function pause_plus() {
    clearInterval(cron);
}

export function reset_plus(quarto) {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById(`hour${quarto}`).innerText = '00';
    document.getElementById(`minute${quarto}`).innerText = '00';
    document.getElementById(`second${quarto}`).innerText = '00';
}
  
export function times_plus(quarto){
    if ((millisecond += 10) == 1000) {
        millisecond = 0;
        second++;
    }
    if (second == 60) {
        second = 0;
        minute++;
    }
    if (minute == 60) {
        minute = 0;
        hour++;
    }
    $(`hour${quarto}`).text("")
    $(`hour${quarto}`).text(returnData(hour))
    $(`minute${quarto}`).text("")
    $(`minute${quarto}`).text(returnData(minute))
    $(`minute${quarto}`).text("")
    $(`second${quarto}`).text(returnData(second))
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
