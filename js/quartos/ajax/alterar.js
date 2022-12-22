import link from "../../setup/index.js"

export function alterarValor(suitex, valorx){
    $.get(link[36], (e) => {
        // let suite =         e[0].suite
        // let condicaoUm =    suitex == suite
        let mensagem =      `Atualização de preço na suíte ${suitex} aplicada!`
        let filtroSuite =   e.filter(i => i.suite == suitex)
        let tipo =          filtroSuite[0].tipo
        let condicaoDois =  tipo == "locacao"
        if (condicaoDois){
            let id =        filtroSuite[0].id
            $.ajax({
                url: `${link[36]}${id}/`,
                type: "PUT",
                dataType: "json",
                data: {
                    suite: suitex,
                    valor: valorx,
                    tipo: tipo
                },
                success: () => {console.log(mensagem)}
            })
        }
    })
}
