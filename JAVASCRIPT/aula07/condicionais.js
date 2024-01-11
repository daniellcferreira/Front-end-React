const prompt = require('readline-sync');

const idade = Number(prompt.question('Qual eh sua idade? '));

// Estrutura Condicional

if (idade >= 18) {
    console.log('Voce eh maior de idade!');
} else {
    console.log('Voce eh menor de idade');
}


const mediaDoAluno = 6;

if (mediaDoAluno >= 7) {
    console.log('Aprovado!');
} else if (mediaDoAluno >= 5) {
    console.log('Prova Final');
} else {
    console.log('Reprovado');
}