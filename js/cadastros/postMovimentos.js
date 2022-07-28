export function registro_movimento(data, nome, codigo, tipo, quantidade){ 
    var dados = {
        data: data,
        nome: nome,
        codigo: codigo,
        tipo: tipo,
        quantidade: quantidade
    }
    $.post("https://demomotelapi.herokuapp.com/movimentos/", dados, () => {
        console.log("Registrado!")
    })
}
