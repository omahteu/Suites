import { link } from "./index.js"

window.onbeforeunload = () => {
    tempo_quarto()
    return 'Tem a certeza que quer fechar a janela?';
 };

async function tempo_quarto(){
    const resposta = await fetch(link[11])
    const dados = await resposta.json()
    var ver = []
    dados.forEach(e => {
        var restaurar = e.quarto
        ver.push(restaurar)
    });
    for(var i = 0; i < ver.length; i++){
        var hora = $(`#hora${ver[i]}`).text()
        var minutos = $(`#minuto${ver[i]}`).text()
        var segundos = $(`#segundo${ver[i]}`).text()
        var permanencia = hora + ":" + minutos + ":" + segundos
        localStorage.setItem(ver[i], permanencia)
    }
 }
 