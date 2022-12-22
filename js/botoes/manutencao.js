import manutencao from "../tags/manutencao.js"
import index from "../tags/particao.js"
import { fimModal } from "../setup/camareiras.js"
import { iniciar } from "../contadores/cronometros/c1.js"
import { iniciar2 } from "../contadores/cronometros/c2.js"
import { tick } from "../setup/box.js"

$(document).on("click", ".manutencao", function () {
    const suite = $('#quarto_painel').text()
    const motivo = prompt("Motivo da Manutenção")
    localStorage.setItem("motivo", motivo)
    if (motivo != null) {
        let t = tick[`${suite}`]
        setTimeout(() => { manutencao(suite, t[0], t[1], t[2]) }, 1)
        setTimeout(() => { fimModal() }, 100)
        setTimeout(() => { index() }, 200)
        setTimeout(() => {
            suite == "1" ? iniciar(suite) :
                suite == "2" ? iniciar2(suite) : ""
        }, 300)
        setTimeout(() => {
            localStorage.setItem("botao", "desligado")
            localStorage.setItem("luz", "desligado")
        }, 400)
    }
})
