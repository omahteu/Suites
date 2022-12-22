import { hora_atual_segundos } from "../geradores/hora.js"
import link from "../setup/index.js";

export default function index(){
    var datahora = hora_atual_segundos()
    var valor = $("#valor-quarto").text()
    var quarto = $("#quarto_painel").text()
    var tipo = $("#tipo").text()
    var dados = {
        datahora: datahora,
        valor: valor,
        quarto: quarto,
        tipo: tipo
    }
    $.post(link[11], dados, () => {})
}
