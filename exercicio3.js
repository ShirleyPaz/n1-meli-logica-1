// Receber um número e guardar em a
// Receber outro número e guardar em b
// Se primeiro número (a) é maior que o segundo número(b)
// exibir 'O numero a é maior que b'
// se o segundo número(b) é maior que o primeiro número(a), exibir 'O número b é maior que a'
// Se os números forem iguais, exibir 'os números a e b são iguais'

let a = Number(prompt('Digite um número'));
let b = Number(prompt('Digite outro número'));


if (a > b) {
    document.write(`${a} é maior`);
} else if (a == b) {
    document.write(`${a} e ${b} são iguais`);
} else {
    document.write(`${b} é maior`);
};