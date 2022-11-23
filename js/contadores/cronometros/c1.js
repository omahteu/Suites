"use strict";

let hora = 0;
let minuto = 0;
let segundo = 0;
let msegundo = 0;
let contagem;
let suite

export function iniciar(suite) {
  parar();
  contagem = setInterval(() => { correr(suite); }, 10);
}

export function parar() {
  clearInterval(contagem);
}

export function zerar(suite) {
  hora = 0;
  minuto = 0;
  segundo = 0;
  msegundo = 0;
  document.getElementById(`hora${suite}`).innerText = '00';
  document.getElementById(`minuto${suite}`).innerText = '00';
  document.getElementById(`segundo${suite}`).innerText = '00';
}

export function correr(suite) {
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
  document.getElementById(`hora${suite}`).innerText = formatar(hora);
  document.getElementById(`minuto${suite}`).innerText = formatar(minuto);
  document.getElementById(`segundo${suite}`).innerText = formatar(segundo);
}

export function formatar(input) {
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
