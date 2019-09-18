// receber um número na variável num
// checar se o resultado da divisão de num por 10 é igual a 0
// Se sim, exibir 'O número é múltiplo de 10'
// Se não, exibir 'O número não é múltiplo de 10'

let num = prompt('Digite um número');

if (num % 10 == 0) {
    console.log('O número é múltiplo de 10');
} else {
    console.log('O número não é múltiplo de 10');
}