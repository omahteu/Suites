"use strict";

export let hora = 0;
export let minuto = 0;
export let segundo = 0;
export let msegundo = 0;

export let kronos;
export let id

export  function crnmtra1(id) {
  crnmtrb1();
  kronos = setInterval(() => { crnmtrd1(id); }, 10);
}

export function crnmtrb1() {
  clearInterval(kronos);
}

export function crnmtrc1(id) {
  hora = 0;
  minuto = 0;
  segundo = 0;
  msegundo = 0;
  document.getElementById(`hora${id}`).innerText = '00';
  document.getElementById(`minuto${id}`).innerText = '00';
  document.getElementById(`segundo${id}`).innerText = '00';
}

export function crnmtrd1(id) {
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
  document.getElementById(`hora${id}`).innerText = crnmtre1(hora);
  document.getElementById(`minuto${id}`).innerText = crnmtre1(minuto);
  document.getElementById(`segundo${id}`).innerText = crnmtre1(segundo);
}

export function crnmtre1(input) {
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
