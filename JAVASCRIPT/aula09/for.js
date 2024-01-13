const prompt = require('readline-sync');
// Estrutura for

//Expressão 1: inicialização da variavel de controle
//Expressão 2: condição de permanencia do for
//Expressão 3: incremento da variavel de controle

//let i;
//for(expressao1; expressao2; expressao3) {
    
//}

for (let i = 0; i < 5; i++){
    console.log(i);
}

//Limpando Console
console.clear();


//Exemplo1

let maiorNumero = 0;
let numeroInformado;

for (let i = 1; i <= 5; i++) {
    numeroInformado = Number(prompt.question('Informe um numero positivo: '));

    if(numeroInformado > maiorNumero) {
        maiorNumero = numeroInformado;
    }
}

console.log('Maior numero informado foi:', maiorNumero);


//Exemplo2

const nome = 'Daniel';

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

console.clear();


// Arrays
const notasdoAluno = [10, 8, 5];
const pessoa = ['Daniel', 36, 1.80, true];

console.log(pessoa[0]);

pessoa[3] = false;

console.log(pessoa);

console.clear();


// Fatiamento de Array
const num = [40, 34, 67, 89, 23, 10];

console.log(num.slice(0, 1));

// Adicionando elementos no final do array
num.push(0);
console.log(num);

// Adicionando elementos no inicio do array
num.unshift(15);
console.log(num);

// Remover o elemento que está no final do array
num.pop();
console.log(num);

// Remever o primeiro elemento do array
num.shift();
console.log(num);

// verficar de existe o elemento dentro do array
console.log(num.includes(20));









