import link from "../../../setup/index.js"
import { _crnmtrb1, _crnmtrc1 } from "../../../contadores/restart/c1.js"

$(document).ready(function(){
    $.get(link[11], (retorno) => {
        var dados = retorno.filter(e => e.tipo == "aguardando")
        let suite = dados[0].quarto
        let recupera_tempo = localStorage.getItem(`troca${suite}`)
        if (recupera_tempo != null){
            let tempo_formatado = recupera_tempo.split(":")
            _crnmtrb1()
            _crnmtrc1(suite)
            //$(`#hora${suite}`).text(tempo_formatado[0])
            //$(`#minuto${suite}`).text(tempo_formatado[1])
            //$(`#segundo${suite}`).text(tempo_formatado[2])
        }
    })
})