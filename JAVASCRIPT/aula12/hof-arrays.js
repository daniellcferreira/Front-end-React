// Array.prototype.every()

const numeros = [40, 34, 67, 89, 23, 16, 10];

const todoPositivos = numeros.every((elemento) => elemento > 0);

console.log(todoPositivos);

console.clear();
// Array.prototype.some()


const numeros2 = [-1, 3, 7, -3, 5];

const retorno = numeros2.some((numero) => numero > 0 );

console.log(retorno);
