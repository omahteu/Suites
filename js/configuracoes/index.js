import { seleciona_tempo } from "./tempo.js"
import { lista_cartoes_debito, lista_cartoes_credito } from "./cartao.js"
import { busca_quarto } from "./quarto.js"
import { exibir_placas_cadastradas } from "./exibicoes/placas.js"
import { exibir_quartos_cadastrados } from "./exibicoes/quartos.js"
import { exibir_automacoes_cadastradas } from "./exibicoes/automacoes.js"
import { exibir_pernoite } from "./exibicoes/pernoite.js"
import { teto } from "./exibicoes/teto.js"
 
$(document).ready(function() {
    seleciona_tempo()
    lista_cartoes_debito()
    lista_cartoes_credito()
    busca_quarto()
    exibir_placas_cadastradas()
    exibir_quartos_cadastrados()
    exibir_automacoes_cadastradas()
    exibir_pernoite()
    teto()
})
