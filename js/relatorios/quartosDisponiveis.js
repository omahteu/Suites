import { link } from "../setup/index.js"

export function Suitesdisponiveis() {
    let suites = []
    $.get(link[11], e => {
        e.forEach(el => {
            suites.push(el.quarto)
            $.get(link[17], i => {
                i.forEach(il => {
                    if (suites.includes(il.numero) == false) {
                        $("#quartos_disponiveis").append(`<option>${il.numero}</option>`)
                    }
                });
            })
        });
    })
}
