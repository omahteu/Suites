import { fimModal }             from "../setup/camareiras.js"
import { index }                from "../tags/particao.js"
import { iniciar }              from "../contadores/cronometros/c1.js"
import { iniciar2 }             from "../contadores/cronometros/c2.js"
import { iniciarValor }         from "../quartos/ajax/inserir.js"
import { link }                 from "../setup/index.js"
import { locado }               from "../tags/locacao.js"
import { registraLimiteTroca }  from "../../qwertyu.js"
import { tick }                 from "../setup/box.js"

$(document).on("click", ".locado", function(){
    const suite = $('#quarto_painel').text()
    if (confirm(`Iniciar a Suíte ${suite}?`) == true){
        let t = tick[`${suite}`]
        setTimeout ( () => {locado(suite, "", t[0], t[1], t[2])     }, 1)
        /*setTimeout ( () => {ligar_luz(suite)
                        localStorage.setItem("luz", "ligada")       }, 100)*/
        setTimeout ( () => {registraLimiteTroca(suite, "a", "troca")}, 200)
        setTimeout ( () => {fimModal()                              }, 300)
        setTimeout ( () => {index()                                 }, 400)
        setTimeout ( () => {
            suite == "1" ? iniciar(suite) : 
            suite == "2" ? iniciar2(suite) : ""
                                                                    }, 500)
        setTimeout( () => {
            $.get(link[17], e => {
                let filtroSuite =   e.filter(i => i.numero == suite)
                let condicaoUm =    filtroSuite[0].cobranca == "hora"
                let condicaoDois =  filtroSuite[0].cobranca == "fixa"
                let horasInciais = filtroSuite[0].horas_locacao
                if (condicaoUm){
                    $.get(link[21], i => {
                        let ValorLocacao = parseInt(i[0].valor_locacao)
                        let ValorInicial = ValorLocacao * horasInciais
                        iniciarValor(suite, ValorInicial)
                    })
                } else if (condicaoDois){
                    $.get(link[21], i => {
                        let ValorLocacao = parseInt(i[0].valor_locacao)
                        let ValorInicial = ValorLocacao * horasInciais
                        iniciarValor(suite, ValorInicial)
                    })
                }
            })
                                                                    }, 600)
    }
})

// REFATORAR AJAX DENTRO DAS CONDIÇÕES