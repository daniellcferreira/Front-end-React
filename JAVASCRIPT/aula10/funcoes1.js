//Exemplo1

//Definição função
function saudacao(nomeDoEstudante, curso = "React") {
   return `Olá, ${nomeDoEstudante}! Seja bem vindo ao ${curso}!`;
}

//Chamada da função
const mensagemDaSaudacao = saudacao("Daniel", "React");

console.log(mensagemDaSaudacao);

console.clear();


//Exemplo2
 function somar(num1, num2) {
    return num1 + num2;
 }

 const resultado = somar(2, 3);

 console.log(resultado);
 console.log(resultado / 10);

 console.clear();


 //FUNÇÕES ANONIMAS

 const dobroDoNumero = function (numero) {
    return numero * 2;
 };

 const dobro = dobroDoNumero(2);
 console.log(dobro);


 //ARROW FUNCTION

 const subtrair = (num1, num2) => {
    return num1 - num2;
 };

 const multiplicar = (num1, num2) => num1 * num2;

 const triplo = numero => numero * 3;





