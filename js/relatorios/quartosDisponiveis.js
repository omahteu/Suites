import { link } from "../setup/index.js"


export async function ver_quartos_disponiveis(){
    const resposta = await fetch(link[17])
    const dados = await resposta.json()
    const infos = await fetch(link[11])
    const dados_infos = await infos.json()
    var suites = []
    const disponiveis = dados_infos.filter(item => item.tipo == 'locado' || item.tipo == "manutencao")
    for(var i = 0; i < disponiveis.length; i++){
        suites.push(disponiveis[i].quarto)
    }
    for(var i = 0; i < dados.length; i++){
        if(suites.includes(dados[i].numero) == false){
            $('#quartos_disponiveis').append('<option>' + dados[i].numero + '</option>')
        }
    }
}
