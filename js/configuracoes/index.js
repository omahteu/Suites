import { seleciona_tempo } from "./tempo.js"
import { busca_cartao } from "./cartao.js" 
import { busca_quarto } from "./quarto.js"
import { exibir_placas_cadastradas } from "./exibicoes/placas.js"
import { exibir_quartos_cadastrados } from "./exibicoes/quartos.js"
import { exibir_automacoes_cadastradas } from "./exibicoes/automacoes.js"
import { exibir_pernoite } from "./exibicoes/pernoite.js"
 
$(document).ready(function() {
    seleciona_tempo()
    busca_cartao()
    busca_quarto()
    exibir_placas_cadastradas()
    exibir_quartos_cadastrados()
    exibir_automacoes_cadastradas()
    exibir_pernoite()
})
