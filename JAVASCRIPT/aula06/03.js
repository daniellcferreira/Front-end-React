const prompt = require('readline-sync')
const idade = prompt.question('Qual e sua idade? ');

console.log(idade, typeof idade);

const idadeNumber = Number(idade);

console.log(idadeNumber, typeof idadeNumber);