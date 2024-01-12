const prompt = require("readline-sync");

//Exemplo1

let saldo = Number(prompt.question('Qual eh seu saldo? '));

while (saldo < 0) {
    saldo = Number(prompt.question('Saldo invalido! Por favor informe novamente: '));
}

console.log(saldo);


//Exemplo2

let notaDoAluno = Number(prompt.question('Informe a nota do aluno: '));

let somaDasNotas = 0;
let qtdNotasValidas = 0;

while (notaDoAluno >= 0) {
    somaDasNotas = somaDasNotas + notaDoAluno;
    qtdNotasValidas = qtdNotasValidas + 1;
    notaDoAluno = Number(prompt.question('Informe a proxima nota: '));
}

console.log(somaDasNotas);
console.log(qtdNotasValidas);
console.log("Media das notas do aluno =", somaDasNotas/qtdNotasValidas);


//Exemplo3

const numAleatorio = parseInt(Math.random() * 10);


let numUsuario = Number(prompt.question('Informe um numero de 0 a 10: '));
while (numAleatorio !== numUsuario) {
    console.log('Voce errou o numero! Tente novamente..');
    numUsuario = Number(prompt.question('Informe um numero de 0 a 10: '));
}

console.log("Parabens! Voce acertou! O numero era", numAleatorio);


//Loop contador

let contador = 0;

while (contador < 5) {
    console.log(contador);

    contador ++;
}