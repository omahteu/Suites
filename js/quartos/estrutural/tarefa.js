import link from "../../setup/index.js"
import { hora_atual } from "../../geradores/hora.js";

var mensagem = `[SUCESSO] | Tarefa Executada | ${hora_atual()}`

export default function atualizarTarefa(id, modo) {
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: `${link[34]}${id}/`,
        type: 'PATCH',
        data: JSON.stringify({ "modo": modo }),
        success: function () {
            console.log(mensagem);
        },
        error: function (textStatus, errorThrown) {
            sessionStorage.setItem("tarefa.js", `[LOGS] | ${textStatus} - ${errorThrown}`)
        }
    })
}
