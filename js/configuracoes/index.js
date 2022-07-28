import { ver_tabela_emuso } from "./tabela_precos.js"
import { ver_tabela_tempos } from "./tempo.js"
import { seleciona_tempo } from "./tempo.js"
import { busca_cartao } from "./cartao.js" 
import { busca_quarto } from "./quarto.js"

$(document).ready(function() {
    ver_tabela_emuso()
    ver_tabela_tempos()
    seleciona_tempo()
    busca_cartao()
    busca_quarto()
})
