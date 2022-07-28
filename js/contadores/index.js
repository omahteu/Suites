/*
"use strict";

export let hora = 0;
export let minuto = 0;
export let segundo = 0;
export let msegundo = 0;

export let kronos;
export let id

export  function iniciar(id) {
  parar();
  kronos = setInterval(() => { tempo(id); }, 10);
}

export function parar() {
  clearInterval(kronos);
}

export function reiniciar(id) {
  hora = 0;
  minuto = 0;
  segundo = 0;
  msegundo = 0;
  document.getElementById(`hora${id}`).innerText = '00';
  document.getElementById(`minuto${id}`).innerText = '00';
  document.getElementById(`segundo${id}`).innerText = '00';
}

export function tempo(id) {
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
  document.getElementById(`hora${id}`).innerText = retorno(hora);
  document.getElementById(`minuto${id}`).innerText = retorno(minuto);
  document.getElementById(`segundo${id}`).innerText = retorno(segundo);
}

export function retorno(input) {
  if(input >= 10){
    return input
  } else if(input >= 1 && input <= 9){
      return `0${input}`
  } else if(input == 0 || String(input) == "00"){
      return `0${input}`
  } else {
      return `0${input}`
  }

  //return input > 10 ? input : `0${input}`
}
*/

export let hora = 0;
export let minuto = 0;
export let segundo = 0;
export let msegundo = 0;
export let kronos;


export class Temporizador{
    constructor(id){
        this._id = id
    }
    crnmtra1(){
        this.crnmtrb1();
        kronos = setInterval(() => { this.crnmtrd1(this._id); }, 10);
    } // -> START
    crnmtrb1(){
        clearInterval(kronos);
    } // -> STOP
    crnmtrc1(){
        hora = 0;
        minuto = 0;
        segundo = 0;
        msegundo = 0;
        document.getElementById(`hora${this._id}`).innerText = '00';
        document.getElementById(`minuto${this._id}`).innerText = '00';
        document.getElementById(`segundo${this._id}`).innerText = '00';
    } // -> RESTART
    crnmtrd1(){
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
          document.getElementById(`hora${this._id}`).innerText = this.crnmtre1(hora);
          document.getElementById(`minuto${this._id}`).innerText = this.crnmtre1(minuto);
          document.getElementById(`segundo${this._id}`).innerText = this.crnmtre1(segundo);
    }
    crnmtre1(input){
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
    crnmtra2(){
      this.crnmtrb2();
      kronos = setInterval(() => { this.crnmtrd2(this._id); }, 10);
    }
    crnmtrb2(){
        clearInterval(kronos);
    }
    crnmtrc2(){
        hora = 0;
        minuto = 0;
        segundo = 0;
        msegundo = 0;
        document.getElementById(`hora${this._id}`).innerText = '00';
        document.getElementById(`minuto${this._id}`).innerText = '00';
        document.getElementById(`segundo${this._id}`).innerText = '00';
    }
    crnmtrd2(){
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
          document.getElementById(`hora${this._id}`).innerText = this.crnmtre2(hora);
          document.getElementById(`minuto${this._id}`).innerText = this.crnmtre2(minuto);
          document.getElementById(`segundo${this._id}`).innerText = this.crnmtre2(segundo);
    }
    crnmtre2(input){
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
}

/*
A -> START
B -> STOP
C -> RESTART
D -> TIMER
E -> FORMAT
*/

// CLASSE ASSÍNCRONA