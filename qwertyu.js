import { link } from "./js/setup/index.js"
import { ligar_luz } from './js/automacao/ligar.js'
import { bloqueio } from "./js/quartos/estrutural/bloqueio.js"
import { hora_atual_segundos } from "./js/geradores/hora.js"

function formatarData(data) {
    const hora = data.getHours()
    const minuto = data.getMinutes()
    const segundo = data.getSeconds()
    return `${hora}:${minuto}:${segundo}`
}







$(document).ready(function () {
    //const data = new Date()
    //data.setMinutes(data.getMinutes() + 10)

    // console.log(formatarData(data))
    // limite("0", "Desistência")

    setInterval(() => {
        async function et() {
            const requisicao = await fetch(link[34])
            const retorno = await requisicao.json()
            retorno.forEach(e => {
                // pegar todas as tarefas
                let id = e.id
                let suite = e.suite
                let modo = e.modo
                let tipo = e.tipo

                // buscar as funções que realizaram as tarefas
                /*
                    função que desliga a luz
                    função que bloqueia o campo/botão
                                                        */

                ligar_luz()
                bloqueio()

                // executar as tarefas

                // dar baixa na tarefa
            });
        }

        et()
    }, 100000)

})

export function registraLimite(suite, modo, tipo) {
    let dados = {
        suite: suite,
        modo: modo,
        tipo: tipo,
        horario: hora_atual_segundos()
    }
    $.post(link[34], dados, () => {
        console.log("Registrado")
    })
}