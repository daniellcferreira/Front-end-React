// Funcoes de alta ordem de arrays

// Array.prototype.forEach()

const numero = [40, 34, 67, 89, 23, 10];

numero.forEach((elemento, index, arrayCompleto) => {
    console.log(index, elemento, arrayCompleto);
});

console.clear();


// Array.prototype.find()

const encontrado = numero.find((num) => {
    return num > 30;
});

console.log(encontrado);

console.clear();

// Array de objetos

const pessoas = [
    {
        nome: 'Pessoa 1',
        idade: 34,
        altura: 1.77,
    },
    {
        nome: 'Pessoa 2',
        idade: 25,
        altura: 1.56,
    },
    {
        nome: 'Pessoa 3',
        idade: 46,
        altura: 1.82,
    }
];

const pessoaEncontrada = pessoas.find(
    (pessoa) => pessoa.idade > 40 && pessoa.altura < 1.7
);

console.log(pessoaEncontrada);

console.clear();


// Array.prototype.findIndex()

const indiceDaPessoaEncontrada = pessoas.findIndex(
    (pessoa) => pessoa.idade > 40 && pessoa.altura < 1.7
);

console.log(indiceDaPessoaEncontrada);




