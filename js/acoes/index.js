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
import { crnmtra1, crnmtrb1, crnmtrc1 } from "../contadores/cronometros/c1.js"
import { crnmtra2, crnmtrb2, crnmtrc2 } from "../contadores/cronometros/c2.js"
import { desligar_luz } from "../automacao/desligar.js"
import { ligar_luz } from "../automacao/ligar.js"
import { tempo_pausado } from "../quartos/ajax/post/decorrido.js"

var rota = 'rota'

export function reacao(status, id){
    var quarto = $("#quarto_painel").text()
    var flags = $("#intervalo").text().split(",")
    let hour = $(`#hora${quarto}`).text()
    let minute = $(`#minuto${quarto}`).text()
    let second = $(`#segundo${quarto}`).text()
    if(status == "Disponibilizar Quarto"){
        var condicao = $("#tipo").text()
        var verificaoLuz = localStorage.getItem("luz")
        if(condicao == "faxina"){
            var h = $(`#hora${id}`).text()
            var m = $(`#minuto${id}`).text()
            var s = $(`#segundo${id}`).text()
            var tempo = `${h}:${m}:${s}`
            envia_dados_faxina($("#usuario_sistema").text(), data_atual(), hora_atual(), $("#suite").text(), tempo)
        } else if(condicao == "manutencao"){
            var razao = localStorage.getItem("motivo")
            var h = $(`#hora${id}`).text()
            var m = $(`#minuto${id}`).text()
            var s = $(`#segundo${id}`).text()
            var tempo = `${h}:${m}:${s}`
            envia_dados_manutencao($("#usuario_sistema").text(), data_atual(), hora_atual(), $("#suite").text(), razao, tempo)
        }
        setTimeout( () => {ultima_limpeza(quarto)}, 200)
        if (verificaoLuz == "ligada"){
            setTimeout( () => {
                desligar_luz(quarto)
                localStorage.setItem("luz", "desligada")
            }, 500)
        }
        setTimeout( () => {desfazer(quarto, flags[0], flags[1], flags[2])}, 1000)
        setTimeout( () => {fimModal()}, 1001)
        setTimeout( () => {
            alert(`DESEJA DISPONIBILIZAR O QUARTO ${quarto}?`)
            quarto == "1" ? crnmtrb1() : quarto == "2" ? crnmtrb2() : "casa"
            crnmtrc1(quarto)
        }, 500)
    } else if(status == "Iniciar Faxina"){
        var tipo = $("#tipo").text()
        if (tipo == "manutencao"){
            var razao = localStorage.getItem("motivo")
            var h = $(`#hora${id}`).text()
            var m = $(`#minuto${id}`).text()
            var s = $(`#segundo${id}`).text()
            var tempo = `${h}:${m}:${s}`
            envia_dados_manutencao($("#usuario_sistema").text(), data_atual(), hora_atual(), $("#suite").text(), razao, tempo)
            alert(`DESEJA INICIAR FAXINA NO QUARTO ${quarto}?`)
            quarto == "1" ? crnmtrb1() : quarto == "2" ? crnmtrb2() : "casa"
            crnmtrc1(quarto)
            crnmtra1(quarto)
            setTimeout( () => {
                ligar_luz(quarto)
                localStorage.setItem("luz", "ligada")
            }, 500)
            setTimeout( () => {atualiza_status(quarto, "faxina"), 800})
            setTimeout( () => {faxina(quarto, rota, flags[0], flags[1], flags[2])}, 1000)
            setTimeout( () => {fimModal()}, 1001)
        } else {    
            alert(`DESEJA INICIAR FAXINA NO QUARTO ${quarto}?`)
            quarto == "1" ? crnmtrb1() : quarto == "2" ? crnmtrb2() : "casa"
            crnmtrc1(quarto)
            crnmtra1(quarto)
            setTimeout( () => {
                ligar_luz(quarto)
                localStorage.setItem("luz", "ligada")
            }, 500)
            setTimeout( () => {atualiza_status(quarto, "faxina"), 800})
            setTimeout( () => {faxina(quarto, rota, flags[0], flags[1], flags[2])}, 1000)
            setTimeout( () => {fimModal()}, 1001)
        }
    } else if(status == "Iniciar Limpeza"){
        alert(`DESEJA INICIAR LIMPEZA NO QUARTO ${quarto}?`)
        localStorage.removeItem(`troca${quarto}`)
        crnmtrc1(quarto)
        crnmtra1(quarto)
        setTimeout( () => {
            ligar_luz(quarto)
            localStorage.setItem("luz", "ligada")
        }, 500)
        setTimeout( () => {limpeza(quarto, rota, flags[0], flags[1], flags[2])}, 700)
        setTimeout( () => {atualiza_status(quarto, "limpeza"), 900})
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
        if(confirm(`DESEJA ENCERRAR o QUARTO ${quarto}?`)){
            quarto == "1" ? crnmtrb1() : quarto == "2" ? crnmtrb2() : "casa"
            setTimeout( () => {localStorage.setItem("last", quarto)}, 100)
            setTimeout( () => {tempo_pausado(hour, minute, second, quarto)}, 300)
            setTimeout( () => {desfazer(quarto, flags[0], flags[1], flags[2])}, 1000)
            sessionStorage.setItem('quarto', quarto)
            window.open('../html/checkout.html', '_blank')
            setTimeout( () => {aguardando(quarto, rota, flags[0], flags[1], flags[2])}, 1500)
            setTimeout( () => {atualiza_status(quarto, "aguardando"), 1500})
            setTimeout( () => {fimModal()}, 1001)
        }
    } else if(status == "Encerrar Limpeza"){
        if(confirm('DESEJA DISPONIBILIZAR O QUARTO ' + quarto + ' ?') == true){
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

        quarto == "1" ? crnmtrb1() : quarto == "2" ? crnmtrb2() : "casa"

        crnmtrc1(quarto)

        setTimeout( () => {
            var recebido = JSON.parse(localStorage.getItem("limpeza"))
            var cam = $("#selecionar_camareira").val()
            envia_dados_limpeza(recebido.caixa, recebido.data, recebido.hora, recebido.quarto, recebido.tempo, cam)
        }, 200)
        setTimeout( () => {fimModal()}, 500)
        setTimeout( () => {desfazer(quarto, flags[0], flags[1], flags[2])}, 600)

        setTimeout( () => {
            desligar_luz(quarto)
            localStorage.setItem("luz", "desligada")
        }, 650)

        setTimeout( () => {ultima_limpeza(quarto)}, 800)
    } else if(status == "Apagar Luz"){
        $("#botao_inferior_tres").val("Ligar Luz")
        desligar_luz(quarto)
        localStorage.setItem("status_botao", "desligado")
        localStorage.setItem("luz", "desligada")
    } else if(status == "Ligar Luz"){
        $("#botao_inferior_tres").val("Apagar Luz")
        ligar_luz(quarto)
        localStorage.setItem("status_botao", "ligado")
        localStorage.setItem("luz", "ligada")
    }
}
