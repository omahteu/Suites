import { link } from "../setup/index.js"

export function desligar_luz(tempo, suite) {
    const time = parseInt(tempo) * 1000
    setTimeout( () => {
        $.get(link[27], (e) => {
            var dados = e.filter(e => e.quarto == suite)
            var url = `http://${dados[0].placa}/?${dados[0].rele}d`
            $.ajax({ url: url, success: function (data) { location.reload(true); } });
        })
    })
}
