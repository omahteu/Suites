import { hora_atual } from "../geradores/hora.js"
import { valoresIniciais } from "../quartos/calculos/inicial.js"
import link from "../setup/index.js"

export default function locado(q, x, y, z) {
    $(`.cardBox .card:nth-child(${q})`).css({
        "background": "#FF0000"
    })
    $(`[name=${q}]`).css('display', 'none')

    valoresIniciais(q)
    var hora = hora_atual()
    $("#tipo").text('locado')
    $("#quarto_painel").text(q)
    //$("#intervalo").text(`${x},${y},${z}`)
    //$("#entrada").text(hora)

    $.get(link[34], e => {
        let travas = e.filter(i => i.suite == q)
        travas.forEach(el => {
            let modo = el.modo
            if (modo == "at") {
                $(".acoes1").css('display', 'none')
                $(".acoes1").val('Trocar Suíte')
                $(".acoes2").css('display', 'inline-block')
                $(".acoes2").val('Encerrar')
            } else {
                $(".acoes1").css('display', 'inline-block')
                $(".acoes1").val('Trocar Suíte')
                $(".acoes2").css('display', 'inline-block')
                $(".acoes2").val('Encerrar')
            }
        })
    })
}
