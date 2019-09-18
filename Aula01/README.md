# Primeira lista de exercícios

1. Faça um algoritmo que receba um número e mostre uma mensagem caso este número seja maior que 10.

2. Escrever um algoritmo que leia dois valores inteiro distintos e informe qual deles é o maior.

3. Altere o exercício anterior de forma que ele informe também se os números são iguais.

4. Solicite que o usuário digite um número. Informe então se este número é par ou ímpar.

5. Crie um programa que recebe um número inteiro e informa se este número é múltiplo de 10.


const num = 9

if (num > 10 ) {
    console.log('O número é maior que 10');
}

---

const a = 5
const b = 4

if (a > b) {
    console.log('a é maior');
} else {
    console.log('b é maior')
};

---
if (a > b) {
    console.log('a é maior');
} else if (a == b) {
    console.log('a e b são iguais');
} else {
    console.log('b é maior')
};

----
const num = console.alert('Digite um número');

if (num % 2 == 0) {
    console.log('o número é par');
} else {
    console.log('o número é impar');
}

---

const num = console.alert('Digite um número');

if (num % 10 == 0) {
    console.log('O número é múltiplo de 10');
} 

