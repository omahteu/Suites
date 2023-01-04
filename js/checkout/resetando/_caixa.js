import link from "../../setup/index.js"
import { livia_exclui } from "../../setup/livia.js"


export default function rstCaixa(suite) {
    $.get(link[36], e => {
        let cofres = e.filter(x => x.suite == suite)
        cofres.forEach(i => {
            let id = i.id
            livia_exclui(link[36], id)
        });
    })
}
