import link from "../../setup/index.js"
import { livia_exclui } from "../../setup/livia.js"


export default function rstTarefa(suite) {
    $.get(link[34], e => {
        let cofres = e.filter(x => x.suite == suite)
        cofres.forEach(i => {
            let id = i.id
            livia_exclui(link[34], id)
        });
    })
}
