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

$("#SalvarConfigValores").click(function() {
    var horasLocacao = $("#quantidadeHorasLocacaoQuarto").val()
    var valorLocacao = $("#valorLocacaoQuarto").val()
    var tempoEspecial = $("#tempoEspecialQuarto").val()
    var valorEspecial = $("#valorEspecialQuarto").val()
    var horasDiarias = $("#quantidadeHorasDiariasQuarto").val()
    var valorDiaria = $("#valorDiariaQuarto").val()
    var tempoAdicional = $("#tempoAdicionalQuarto").val()
    var valorHoraAdicional = $("#valorHoraAdicionalQuarto").val()
    var tolerancia = $("#toleranciaQuarto").val()
    var valor1hora = $("#v1hQuarto").val()
    var valor2hora = $("#v2hQuarto").val()
    var valor3hora = $("#v3hQuarto").val()
    var valor4hora = $("#v4hQuarto").val()
    var valor5hora = $("#v5hQuarto").val()
    var valor6hora = $("#v6hQuarto").val()
    var dados = {
        horas_locacao: horasLocacao == "" || isNaN(horasLocacao) == true ? $("#quantidadeHorasLocacaoQuarto").attr('placeholder') : horasLocacao,
        valor_locacao: valorLocacao == "" || isNaN(valorLocacao) == true ? $("#valorLocacaoQuarto").attr('placeholder') : valorLocacao,
        tempo_especial: tempoEspecial == "" || isNaN(tempoEspecial) == true ? $("#tempoEspecialQuarto").attr('placeholder') : tempoEspecial,
        valor_especial: valorEspecial == "" || isNaN(valorEspecial) == true ? $("#valorEspecialQuarto").attr('placeholder') : valorEspecial,
        horas_diaria: horasDiarias == "" || isNaN(horasDiarias) == true ? $("#quantidadeHorasDiariasQuarto").attr('placeholder') : horasDiarias,
        valor_diaria: valorDiaria == "" || isNaN(valorDiaria) == true ? $("#valorDiariaQuarto").attr('placeholder') : valorDiaria,
        tempo_adicional: tempoAdicional == "" || isNaN(tempoAdicional) == true ? $("#tempoAdicionalQuarto").attr('placeholder') : tempoAdicional,
        valor_adicional: valorHoraAdicional == "" || isNaN(valorHoraAdicional) == true ? $("#valorHoraAdicionalQuarto").attr('placeholder') : valorHoraAdicional,
        tolerancia: tolerancia == "" || isNaN(tolerancia) == true ? $("#toleranciaQuarto").attr('placeholder') : tolerancia,
        vh1: valor1hora == "" || isNaN(valor1hora) == true ? $("#v1hQuarto").attr('placeholder') : valor1hora,
        vh2: valor2hora == "" || isNaN(valor2hora) == true ? $("#v2hQuarto").attr('placeholder') : valor2hora,
        vh3: valor3hora == "" || isNaN(valor3hora) == true ? $("#v3hQuarto").attr('placeholder') : valor3hora,
        vh4: valor4hora == "" || isNaN(valor4hora) == true ? $("#v4hQuarto").attr('placeholder') : valor4hora,
        vh5: valor5hora == "" || isNaN(valor5hora) == true ? $("#v5hQuarto").attr('placeholder') : valor5hora,
        vh6: valor6hora == "" || isNaN(valor6hora) == true ? $("#v6hQuarto").attr('placeholder') : valor6hora,
    }
    $.post(link[21], dados, function() {
        alert("Quarto Registrado!")
        document.getElementById('formCadastros').reset()
    })
})
