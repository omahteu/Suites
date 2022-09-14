import { link } from "../setup/index.js"

$("#SalvarConfigEscolhaTabelaPreco").click(function() {
    var tabela_preco_selecionada = $('#escolha_tabela_precos').find(":selected").text()
    var confirmacao = confirm(`Confirme para usar a tabeça ${tabela_preco_selecionada}`)
    if(confirmacao == true){
        $.ajax({
            url: link[18],
            type: 'PUT',
            dataType: 'json',
            data: {
                tabela: tabela_preco_selecionada
            },
            success: function() {
                alert("Nova tabela selecionada!")
                location.reload()
            }
        })
    } else {
        console.log('Cancelado!')
    }
})

$("#SalvarConfigEscohaTempos").click(function() {
    let tempo_troca_quarto = $("#tempo_troca_quarto").val()
    let tempo_desistencia = $("#tempo_desistencia").attr('placeholder')
    let tempo_limpeza = $("#tempo_limpeza").attr('placeholder')
    let tempo_faxina = $("#tempo_faxina").attr('placeholder')
    let tempo_manutencao = $("#tempo_manutencao").attr('placeholder')
    var dados = {
        troca: tempo_troca_quarto == "" || isNaN(tempo_troca_quarto) == true ? $("#tempo_troca_quarto").attr('placeholder') : tempo_troca_quarto,
        desistencia: tempo_desistencia == "" || isNaN(tempo_desistencia) == true ? $("#tempo_desistencia").attr('placeholder') : tempo_desistencia,
        limpeza: tempo_limpeza == "" || isNaN(tempo_limpeza) == true ? $("#tempo_limpeza").attr('placeholder') : tempo_limpeza,
        faxina: tempo_faxina == "" || isNaN(tempo_faxina) == true ? $("#tempo_faxina").attr('placeholder') : tempo_faxina,
        manutencao: tempo_manutencao == "" || isNaN(tempo_manutencao) == true ? $("#tempo_manutencao").attr('placeholder') : tempo_manutencao,
    }
    var confirmacao = confirm(`Confirme para atualizar a tabela de tempo!`)
    if(confirmacao == true){
        $.ajax({
            url: link[19],
            type: 'PUT',
            dataType: 'json',
            data: dados,
            success: function() {
                alert("Atalizado!")
                location.reload()
            }
        })
    } else {
        console.log('Cancelado!')
    }
})

