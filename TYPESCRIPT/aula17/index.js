"use strict";
let numero = 20; // Inferência de tipo
const pi = 3.1415;
let nome = "Daniel";
let correta;
const num = [1, 2, 3, 4, 5]; // tipagem number[] ou Array<number>
const misto = ['Daniel', 36, 1.80];
const idades = [];
idades.push(23);
idades.push(38);
idades.push(12);
idades.push(49);
idades.push(16);
const menorDeIdade = idades.filter(idade => idade < 18);
console.log(menorDeIdade);
const pessoaTupla = ['Daniel', 36];
const pessoa = {
    nome: 'Wallison',
    idade: 27,
    altura: 1.77
};
pessoa.profissao = "Dev";
console.log(pessoa);
function chooseNumber(num1, num2, criterio) {
    switch (criterio) {
        case "greater":
            return num1 > num2 ? num1 : num2;
        case "lower":
            return num1 < num2 ? num1 : num2;
        default:
            const numAleatorio = Math.random();
            if (numAleatorio >= 0.5)
                return num1;
            return num2;
    }
}
const numEscolhido = chooseNumber(10, 20, "greater");
console.log("Numero escolhido: ", numEscolhido);
//const pessoas: Pessoas {
//    '123.456.789-00': {
//        nome: 'Fulano',
//        idade: 20,
//        altura: 1.80
//    }
// };
