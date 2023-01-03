import link from "../../setup/index.js"
import { data_atual } from "../../geradores/data.js"
import { hora_atual } from "../../geradores/hora.js"

export function alterarValor(suitex, valorx) {
    $.get(link[36], (e) => {
        try {
            let mensagem = `[SUCESSO] | Atualização de preço na suíte ${suitex} aplicada! | ${data_atual()} - ${hora_atual()}`
            let filtroSuite = e.filter(i => i.suite == suitex)
            let tipo = filtroSuite[0].tipo
            let condicaoDois = tipo == "locacao"
            if (condicaoDois) {
                let id = filtroSuite[0].id
                $.ajax({
                    url: `${link[36]}${id}/`,
                    type: "PUT",
                    dataType: "json",
                    data: {
                        suite: suitex,
                        valor: valorx,
                        tipo: tipo
                    },
                    success: () => { console.log(mensagem) }
                })
            }
        } catch (error) {
            sessionStorage.setItem("alterar.js", `[LOGS] | ${error}`)
        }
    })
}
