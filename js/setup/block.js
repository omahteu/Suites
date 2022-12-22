import { minuto_para_segundo } from "../conversores/minutos_milisegundos.js"
import link from "../setup/index.js"

$(".locado").click(function() {
    let suite = $(this).attr("name")
    $.get(link[19], e => {
        let tempo_troca = parseInt(e[0].troca)
        var millisegundos_troca = minuto_para_segundo(tempo_troca)
        setTimeout( () => {
            tempo_para_troca()
            trava(suite)
        }, millisegundos_troca)
    }) 
})

$(document).ready(function(){
    setTimeout(() => {
        let id = $("[id='suite']").text()
        const suites = id.split('')
        existeTrava(suites)
    }, 1000);
})

function tempo_para_troca(){
    $(".acoes1").css('display', 'none')
    $(".acoes1").val('Encerrar')
    $(".acoes2").css('visibility', 'visible')
    $(".acoes2").val('Encerrar')
}

function trava(suite) {
    let ficha = {
        suite: suite,
        modo: "t",
        tipo: "",
        horario: ""
    }
    $.post(link[34], ficha, () => {console.log(`Travada possibilidade de troca na Suíte ${suite}!`)})
}

function existeTrava(suite){
    suite.forEach(ele => {
        $.get(link[34], e => {
            let travas = e.filter(i => i.suite == ele)
            travas.forEach(el => {
                let modo = el.modo
                if (modo == "t"){
                    
                }
            });
        })
    });

}
