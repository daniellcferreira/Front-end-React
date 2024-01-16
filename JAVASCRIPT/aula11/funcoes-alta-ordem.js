// Funcao que retorna outra funcao como parametro

function welcome(courseName) {
    return (studentName) => {
       console.log(`Olá, ${studentName}! Seja bem-vindo ao curso de ${courseName}!`);
    }
}

const displayWelcome = welcome("Front-end em React");

displayWelcome("Daniel Ferreira");


console.clear();


// Funcao que recebe outra funcao como parametro

const somar = (num1, num2) => num1 + num2;
const subtrair = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

const calcular = (num1, num2, operacao) => operacao(num1, num2);

const retorno = calcular(10, 5, somar);

console.log(retorno);

const resultado = calcular(10, 5, (num1, num2) => num1 * num2 + 2 * num1 * num2);

console.log(resultado);

