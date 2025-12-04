/* Objetivo: Determinar a permissão de acesso de um usuário baseada em seu nível e status de pagamento, 
utilizando múltiplos Operadores Ternários.
Entrada: nivelUsuario (Ex: "premium"), pagamentoEmDia (Ex: true).
Estrutura: Use o Operador Ternário, possivelmente encadeado.
Regras:
Se pagamentoEmDia for falso: "Acesso Bloqueado."
Se pagamentoEmDia for verdadeiro:
Se nivelUsuario for "admin": "Acesso Total."
Se nivelUsuario for "premium": "Acesso Limitado."
Qualquer outro: "Acesso Básico." */

const readlineSync = require('readline-sync');

console.log("------------------Bem-vindo!------------------");
console.log(`Nível de Usuário: `);
let nivelUsuario = readlineSync.question(" ");
console.log(`Seu pagamento está em dia? `);
let pagamentoEmDia = readlineSync.keyInYN(" ");

let permissao = pagamentoEmDia ? nivelUsuario === "admin"
    ? "Acesso Total (Administrador)."
    : nivelUsuario === "premium"
    ? "Acesso Limitado (Premium)."
    : "Acesso Básico." : "Acesso Bloqueado. Por favor, regularize seu pagamento.";

console.log(`Status de Acesso: ${permissao}`);