export function sum(a: number, b: number) {
    return a + b;
}

export function multiply(a: number, b: number) {
    return a * b;
}

export function splitIntoWords(sentense: string) {
    const words = sentense.toLowerCase().split(' ')

    return words.map(w => w.replace("!", ''));
}