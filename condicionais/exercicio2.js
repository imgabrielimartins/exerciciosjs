/* Objetivo: Determinar o tipo de um triângulo com base no comprimento de seus três lados.
Entrada: Defina três variáveis: ladoA, ladoB, ladoC (Ex: 5, 5, 8).
Estrutura: Use if/else if/else.
Regras:
Equilátero: Todos os três lados são iguais.
Isósceles: Apenas dois lados são iguais.
Escaleno: Todos os três lados são diferentes. */

const readlineSync = require('readline-sync');

let ladoA = readlineSync.questionInt("Digite o lado A: ");
let ladoB = readlineSync.questionInt("Digite o lado B: ");
let ladoC = readlineSync.questionInt("Digite o lado C: ");

if(ladoA === ladoB && ladoB === ladoC){
    console.log("Equilátero: Todos os três lados são iguais.");
} else if(ladoA === ladoB || ladoB === ladoC || ladoA === ladoC){
    console.log("Isósceles: Apenas dois lados são iguais.");
}else{
    console.log("Escaleno: Todos os três lados são diferentes.");
}