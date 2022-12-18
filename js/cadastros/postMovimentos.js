import { link } from "../setup/index.js"

export function registro_movimento(data, nome, codigo, tipo, quantidade){ 
    var dados = {
        data: data,
        nome: nome,
        codigo: codigo,
        tipo: tipo,
        quantidade: quantidade
    }
    $.post(link[22], dados, () => {})
}
