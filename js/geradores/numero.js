export function numero(n) {
    if (n >= 10) {
        return n
    } else if (n >= 1 && n <= 9) {
        return `0${n}`
    } else if (n == 0) {
        return `0${n}`
    }
}
