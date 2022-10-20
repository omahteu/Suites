"use strict";

let hora = 0;
let minuto = 0;
let segundo = 0;
let msegundo = 0;
let contagem;
let suite

export  function iniciar2(suite) {
  parar2();
  contagem = setInterval(() => { correr2(suite); }, 10);
}

export function parar2() {
  clearInterval(contagem);
}

export function zerar2(suite) {
  hora = 0;
  minuto = 0;
  segundo = 0;
  msegundo = 0;
  document.getElementById(`hora${suite}`).innerText = '00';
  document.getElementById(`minuto${suite}`).innerText = '00';
  document.getElementById(`segundo${suite}`).innerText = '00';
}

export function correr2(suite) {
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
  document.getElementById(`hora${suite}`).innerText = formatar2(hora);
  document.getElementById(`minuto${suite}`).innerText = formatar2(minuto);
  document.getElementById(`segundo${suite}`).innerText = formatar2(segundo);
}

export function formatar2(input) {
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
