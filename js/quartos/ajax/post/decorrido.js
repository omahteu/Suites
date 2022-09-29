export function tempo_pausado(hora, minuto, segundo, quarto){
    let tempo = `${hora}:${minuto}:${segundo}`
    localStorage.setItem(`troca${quarto}`, tempo)
}
