let hora = 0;
let minuto = 0;
let segundo = 0;
let msegundo = 0;

let kronos;
let id


class Temporizador{
    constructor(id){
        this.is = id
    }
    start(){
        this.stop();
        kronos = setInterval(() => { this.time(id); }, 10);
    }
    stop(){
        clearInterval(kronos);
    }
    restart(id){
        hora = 0;
        minuto = 0;
        segundo = 0;
        msegundo = 0;
        document.getElementById(`hora${id}`).innerText = '00';
        document.getElementById(`minuto${id}`).innerText = '00';
        document.getElementById(`segundo${id}`).innerText = '00';
    }
    time(id){
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
          document.getElementById(`hora${id}`).innerText = this.formate(hora);
          document.getElementById(`minuto${id}`).innerText = this.formate(minuto);
          document.getElementById(`segundo${id}`).innerText = this.formate(segundo);
    }
    formate(input){
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

const t1 = new Temporizador('1')
t1.start()

setTimeout( () => {
    const t2 = new Temporizador("3")
    t2.start()
}, 900)
