import { link } from "../setup/index.js"
import { hora_atual_segundos } from "../geradores/hora.js"
import { numero } from "../geradores/numero.js"
import { pernoite } from "../tags/pernoite.js"
import { modos } from "../setup/box.js"
import { desfazer } from "../tags/desfazer.js"

$(document).ready(function(){
    setInterval( () => {
        async function pernoitex(){
            const tolerancia = JSON.parse(sessionStorage.getItem("dq"))
            const requisicao = await fetch(link[35])
            const retorno = await requisicao.json()
            if (retorno.length > 0){
                retorno.forEach(e => {
                    let tipo = e.tipo
                    if (tipo == "Automática"){
                        $.get(link[11], (el) => {
                            el.forEach(ele => {
                                let id = ele.id
                                let suite = ele.quarto
                                let hora = ele.datahora
                                let valor = ele.valor

                                var flags = modos.slice(0, 3)
                                let tempoTolerancia = tolerancia.filter(i => i.numero == suite)
                                let minutoTolerancia = tempoTolerancia[0].tolerancia
                                let agora = hora_atual_segundos()
                                let datahoraLocacao = ele.datahora
                                var ms = moment(agora, "HH:mm:ss").diff(moment(datahoraLocacao, "HH:mm:ss"));
                                var d = moment.duration(ms);
                                var tempoPassado = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");
                                if (Number(tempoPassado.charAt(0)) > 0){
                                    pernoite(suite, "", flags[0], flags[1], flags[2])
                                    var dados = {
                                        datahora: hora,
                                        valor: valor,
                                        quarto: suite,
                                        tipo: "pernoite"
                                    }
                                    $.ajax({
                                        url: `${link[11]}${id}/`,
                                        type: "PUT",
                                        dataType: "json",
                                        data: dados,
                                        success:  () => {
                                            console.log("Atualizado.")
                                        }
                                    })
                                }
                            })
                        })
                    }
                })
            }
        }
        pernoitex()
    }, 1000)
})
