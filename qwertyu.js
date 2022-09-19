import { hora_atual_segundos } from "./js/geradores/hora.js"
import { link } from "./js/setup/index.js"

$(document).ready(function(){
    //const d = new Date()
    
    //console.log(d.setMonth(4))

    //let hora = d.getHours()
    //let minuto = d.getMinutes()
    //let segundo = d.getSeconds()

    //ar horario = new Date()


    //let data = '15 de Abril de 2019';

    // Criamos um objeto com os meses do ano
    //const months = { "Janeiro": 1, "Fevereiro": 2, "Março": 3, "Abril": 4 }; // ...

    // Podemos quebrar as strings ' de ' para retornar ['15', 'Abril', '2019']
    //const dataSplit = data.split(' de ');

    //const day = dataSplit[0]; // 15
    //const month = months[dataSplit[1]]; // Abril -> 4
    //const year = dataSplit[2]; // 2019

    // Agora podemos inicializar o objeto Date, lembre-se que o mês começa em 0, então mês - 1.
    //data = new Date(hou);
    //console.log(data)

    /*
    var dtChegada = "14:25:00";
    var dtPartida = "16:46:00";
  
    var ms = moment(dtChegada,"HH:mm:ss").diff(moment(dtPartida,"HH:mm:ss"));
    var d = moment.duration(ms);
    var s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");
  
    console.log(s);
    */

    var requisicao = $.get(link[11])

    requisicao.done(function (data) {
        $(data).each(function (index, tweet) {
          //ul.append($("<li>").text(tweet.text));
          console.log(`${index} | ${tweet.text}`)
        });
      });
    //console.log(requisicao)

    setInterval( () =>  {

        //console.log(dadosx())
        //dadosx()
      

        $.get(link[11], (e) => {
            var entrada = e[0].datahora
            

            let agora = hora_atual_segundos()
            let locao = `${entrada}:00`
            //console.log(entrada)
            //console.log(e)
    
            var ms = moment(agora,"HH:mm:ss").diff(moment(locao,"HH:mm:ss"));
            var d = moment.duration(ms);
            var s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");
    
            //console.log(s)

        })




    }, 1000)

})