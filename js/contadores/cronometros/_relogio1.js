"use strict";

let hora
let minuto
let segundo
let msegundo = 0
let contagem;
let suite

export function inicia(id, h, m, s) {
    suite = id
    hora = parseInt(h)
    minuto = parseInt(m)
    segundo = parseInt(s)
    para();
    contagem = setInterval(() => { corre(suite); }, 10);
}

export function para() {
    clearInterval(contagem);
}

export function zera(suite) {
    hora = 0;
    minuto = 0;
    segundo = 0;
    msegundo = 0;
    document.getElementById(`hora${suite}`).innerText = '00';
    document.getElementById(`minuto${suite}`).innerText = '00';
    document.getElementById(`segundo${suite}`).innerText = '00';
}

export function corre(suite) {
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
    document.getElementById(`hora${suite}`).innerText = formata(hora);
    document.getElementById(`minuto${suite}`).innerText = formata(minuto);
    document.getElementById(`segundo${suite}`).innerText = formata(segundo);
}

export function formata(input) {
    if (input >= 10) {
        return input
    } else if (input >= 1 && input <= 9) {
        return `0${input}`
    } else if (input == 0 || String(input) == "00") {
        return `0${input}`
    } else {
        return `0${input}`
    }
}
