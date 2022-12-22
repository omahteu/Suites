export default function tempo_pausado(hora, minuto, segundo, suite){
    let tempo = `${hora}:${minuto}:${segundo}`
    let _tempo = `${hora},${minuto},${segundo}`
    localStorage.setItem(`troca${suite}`, tempo)
    localStorage.setItem(`_${suite}`, _tempo)
}
