import { aguardando } from "../tags/aguardo.js"
import { desfazer } from "../tags/desfazer.js"
import { faxina } from "../tags/faxina.js"
import { limpeza } from "../tags/limpeza.js"
import { camareiras } from "../tags/camareira.js"
import { fimModal } from "../setup/camareiras.js"
import { atualiza_status } from "../setup/atualiza.js"
import { ultima_limpeza } from "../botoes/limpar.js"
import { data_atual } from "../geradores/data.js"
import { hora_atual } from "../geradores/hora.js"
import { envia_dados_limpeza } from "../caixa/limpeza.js"
import { envia_dados_faxina } from "../caixa/faxina.js"
import { envia_dados_manutencao } from "../caixa/manutencao.js"
import { inicioModalTroca } from "../setup/troca.js"
import { ver_quartos_disponiveis } from "../relatorios/quartosDisponiveis.js"
import { iniciar, parar, zerar } from "../contadores/cronometros/c1.js"
import { iniciar2, parar2, zerar2 } from "../contadores/cronometros/c2.js"
import { desligar_luz } from "../automacao/desligar.js"
import { ligar_luz } from "../automacao/ligar.js"
import { tempo_pausado } from "../quartos/ajax/post/decorrido.js"
import { abrirMenu } from "../quartos/estrutural/caixas.js"
import { fecharMenu } from "../quartos/estrutural/caixas.js"
import { camareira_faxina } from "../quartos/estrutural/camareira_faxina.js"
import { listar_camareiras } from "../quartos/estrutural/lista_camareiras.js"
import { finalizaTarefa } from "../../qwertyu.js"

var rota = 'rota'

export function reacao(status, id){
    var flags = $("#intervalo").text().split(",")
    let h = $(`#hora${id}`).text()
    let m = $(`#minuto${id}`).text()
    let s = $(`#segundo${id}`).text()
    let tempo = `${h}:${m}:${s}`

    if(status == "Disponibilizar Quarto"){
        var condicao = $("#tipo").text()
        var verificaoLuz = localStorage.getItem("luz")
        if(condicao == "manutencao"){
            var razao = localStorage.getItem("motivo")
            envia_dados_manutencao($("#usuario_sistema").text(), data_atual(), hora_atual(), $("#suite").text(), razao, tempo)
            finalizaTarefa($("#suite").text())
        }
        setTimeout( () => {ultima_limpeza(id)}, 200)
        if (verificaoLuz == "ligada"){
            setTimeout( () => {
                desligar_luz(id)
                localStorage.setItem("luz", "desligada")
            }, 500)
        }
        setTimeout( () => {desfazer(id, flags[0], flags[1], flags[2])}, 1000)
        setTimeout( () => {fimModal()}, 1001)
        setTimeout( () => {
            alert(`DESEJA DISPONIBILIZAR O QUARTO ${id}?`)
            id == "1" ? parar() : id == "2" ? parar2() : "casa"
            zerar(id)
        }, 500)
    } else if(status == "Iniciar Faxina"){
        var tipo = $("#tipo").text()
        if (tipo == "manutencao"){
            var razao = localStorage.getItem("motivo")
            envia_dados_manutencao($("#usuario_sistema").text(), data_atual(), hora_atual(), $("#suite").text(), razao, tempo)
            alert(`DESEJA INICIAR FAXINA NO QUARTO ${id}?`)
            id == "1" ? parar() : id == "2" ? parar2() : "casa"
            zerar(id)
            iniciar(id, "0", "0", "0")
            setTimeout( () => {
                ligar_luz(id)
                localStorage.setItem("luz", "ligada")
            }, 500)
            setTimeout( () => {atualiza_status(id, "faxina"), 800})
            setTimeout( () => {faxina(id, rota, flags[0], flags[1], flags[2])}, 1000)
            setTimeout( () => {fimModal()}, 1001)
        } else {    
            alert(`DESEJA INICIAR FAXINA NO QUARTO ${id}?`)
            id == "1" ? parar() : id == "2" ? parar2() : "casa"
            zerar(id)
            iniciar(id, "0", "0", "0")
            setTimeout( () => {
                ligar_luz(id)
                localStorage.setItem("luz", "ligada")
            }, 500)
            setTimeout( () => {atualiza_status(id, "faxina"), 800})
            setTimeout( () => {faxina(id, rota, flags[0], flags[1], flags[2])}, 1000)
            setTimeout( () => {fimModal()}, 1001)
        }
    } else if(status == "Iniciar Limpeza"){
        alert(`DESEJA INICIAR LIMPEZA NO QUARTO ${id}?`)
        localStorage.removeItem(`troca${id}`)
        zerar(id)
        iniciar(id, "0", "0", "0")
        setTimeout( () => {
            ligar_luz(id)
            localStorage.setItem("luz", "ligada")
        }, 500)
        setTimeout( () => {limpeza(id, rota, flags[0], flags[1], flags[2])}, 700)
        setTimeout( () => {atualiza_status(id, "limpeza"), 900})
        setTimeout( () => {fimModal()}, 1000)
    } else if(status == "Trocar Suíte"){
        inicioModalTroca("modau-troca")
        fimModal()
        setTimeout( () => {
            var antigo = $("#quarto_painel").text()
            $("#quarto_antigo").val(antigo)
        }, 100)
        ver_quartos_disponiveis()
    } else if(status == "Encerrar"){
        if(confirm(`DESEJA ENCERRAR o QUARTO ${id}?`)){
            id == "1" ? parar() : id == "2" ? parar2() : "casa"
            setTimeout( () => {localStorage.setItem("last", id)}, 100)
            setTimeout( () => {tempo_pausado(hour, minute, second, id)}, 300)
            setTimeout( () => {desfazer(id, flags[0], flags[1], flags[2])}, 1000)
            sessionStorage.setItem('quarto', id)
            window.open('../html/checkout.html', '_blank')
            setTimeout( () => {aguardando(id, rota, flags[0], flags[1], flags[2])}, 1500)
            setTimeout( () => {atualiza_status(id, "aguardando"), 1500})
            setTimeout( () => {fimModal()}, 1001)
        }
    } else if(status == "Encerrar Limpeza"){
        if(confirm('DESEJA DISPONIBILIZAR O QUARTO ' + id + ' ?') == true){
            camareiras()
            setTimeout( () => {
                var h = $(`#hora${id}`).text()
                var m = $(`#minuto${id}`).text()
                var s = $(`#segundo${id}`).text()
                var permanencia = h + ":" + m + ":" + s
                var dados = {
                    caixa: $("#usuario_sistema").text(),
                    data: data_atual(),
                    hora: hora_atual(),
                    quarto: $("#suite").text(),
                    tempo: permanencia,
                    camareira: ""
                }
                localStorage.setItem("limpeza", JSON.stringify(dados))
            }, 500)
        } else {
            console.log('cancelado')
        }
    } else if(status == "OK"){
        
        alert('Camareira Selecionada')

        id == "1" ? parar() : id == "2" ? parar2() : "casa"

        zerar(id)

        setTimeout( () => {
            var recebido = JSON.parse(localStorage.getItem("limpeza"))
            var cam = $("#selecionar_camareira").val()
            envia_dados_limpeza(recebido.caixa, recebido.data, recebido.hora, recebido.quarto, recebido.tempo, cam)
        }, 200)
        setTimeout( () => {fimModal()}, 500)
        setTimeout( () => {desfazer(id, flags[0], flags[1], flags[2])}, 600)

        setTimeout( () => {
            desligar_luz(id)
            localStorage.setItem("luz", "desligada")
        }, 650)

        setTimeout( () => {ultima_limpeza(id)}, 800)
    } else if(status == "Apagar Luz"){
        $("#botao_inferior_tres").val("Ligar Luz")
        desligar_luz(id)
        localStorage.setItem("status_botao", "desligado")
        localStorage.setItem("luz", "desligada")
    } else if(status == "Ligar Luz"){
        $("#botao_inferior_tres").val("Apagar Luz")
        ligar_luz(id)
        localStorage.setItem("status_botao", "ligado")
        localStorage.setItem("luz", "ligada")
    } else if(status == "Encerrar Faxina"){
        fimModal()
        abrirMenu("modau-menu")
        camareira_faxina()
        listar_camareiras()
    } else if(status == "Selecionar"){
        let camareira = $("#camareiras :selected").text()
        let usuario = $("#usuario_sistema").text()
        let suite = $("#suite").text()
        envia_dados_faxina(usuario, data_atual(), hora_atual(), suite, tempo, camareira)
        fecharMenu()
        setTimeout( () => {ultima_limpeza(id)}, 200)
        /*
        if (verificaoLuz == "ligada"){
            setTimeout( () => {
                desligar_luz(id)
                localStorage.setItem("luz", "desligada")
            }, 500)
        }
        */
        setTimeout( () => {desfazer(id, flags[0], flags[1], flags[2])}, 1000)
        setTimeout( () => {fimModal()}, 1001)
        setTimeout( () => {
            alert(`DESEJA DISPONIBILIZAR O QUARTO ${id}?`)
            id == "1" ? parar() : id == "2" ? parar2() : "casa"
            zerar(id)
        }, 500)
    }
}
