//Idade até 12: "Criança"
//Idade de 13 a 17: "Adolescente"
//Idade de 18 a 60: "Adulto"
//Idade acima de 60: "Idoso"

const readlineSync = require('readline-sync');

let idade = readlineSync.question("Qual a sua idade? ");

if(idade <= 12){
    console.log(`Sua idade é ${idade} anos e você é uma criança!`);
}else if(idade >= 13 && idade <= 17){
    console.log(`Sua idade é ${idade} anos e você é um adolescente!`);
}else if(idade >= 18 && idade < 60){
    console.log(`Sua idade é ${idade} anos e você é um adulto!`);
}else{
    console.log(`Sua idade é ${idade} anos e você é um adulto!`);
}