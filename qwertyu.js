import { link } from "./js/setup/index.js"
import { hora_atual_segundos } from "./js/geradores/hora.js"

function formatarData(data){
    const hora = data.getHours()
    const minuto = data.getMinutes()
    const segundo = data.getSeconds()
    return `${hora}:${minuto}:${segundo}`
}

async function limite(suite, tipo){
    const requisicao = await fetch(link[19])
    const retorno = await requisicao.json()

    
    switch (tipo) {
        case "Desistência":
            console.log(retorno[0].desistencia)

            break;
    
        default:
            break;
    }
}

$(document).ready(function(){
    const data = new Date()
    data.setMinutes(data.getMinutes() + 10)

    console.log(formatarData(data))
    limite("0", "Desistência")
})

export function registraLimite(suite, modo, tarefa){
    let dados = {
        suite: suite,
        modo: modo,
        tipo: tipo
    }
    $.post(link[34], dados, () => {
        console.log("Registrado")
    })
}