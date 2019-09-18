// Receber um número e guardar em x
// Receber outro número e guardar em y
// Se primeiro número (x) é maior que o segundo número(y)
// exibir 'O numero X é maior que Y'
// se o segundo número(y) é maior que o primeiro número(x), exibir 'O número Y é maior que X'

let x = Number(prompt('Digite um número'));
let y = Number(prompt('Digite outro número'));

if (x > y) {
    alert(`${x} é maior`);
} else if (y > x) {
    alert(`${y} é maior`)
};