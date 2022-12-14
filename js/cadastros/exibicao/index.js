import { exibir_categorias_cadastradas } from "./categorias.js";
import { exibe_suites } from "./suites.js";
import { exibe_placas } from "./placas.js";

$(document).ready( () => {
    exibir_categorias_cadastradas()
    exibe_suites()
    exibe_placas()
})
