// receber um número na variável num
// checar se o resultado da divisão de num por 2 é igual a 0
// Se sim, exibir 'O número é par'
// Se não, exibir 'O número é impar'



const num = prompt('Digite um número');

if (num % 2 == 0) {
    console.log('o número é par');
} else {
    console.log('o número é impar');
}