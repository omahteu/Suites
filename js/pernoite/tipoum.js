import { link } from "../setup/index.js"

$(document).ready(function(){
    setInterval( () => {
        async function pernoite(){
            const requisicao = await fetch(link[35])
            const retorno = await requisicao.json()
            if (retorno.length > 0){
                retorno.forEach(e => {
                    console.log(e)
                });
            }
        }
        // pernoite()
    }, 1000)
})
