// 1 - Lendo um arquivo JSON
const fs = require('fs');

fs.readFile('.eslintrc.json', (erro, dados) => {
    if (erro) {
        console.log('Erro', erro);
    } else {
        const dadosObjeto = JSON.parse(dados);
        console.log(dadosObjeto.rules);
        console.log(typeof dadosObjeto);
    }
});


// 2 - Convertendo JSON, em formato string, para um objeto

const jsonString = '{"nome": "Daniel"}';

console.log(JSON.parse(jsonString));
console.log(typeof jsonString);


// 3 - Convertendo um objeto do JS em um JSON (string)

const heroi = {
    nome: 'Tony Stark',
    papel: 'Homem de Ferro'
};

console.log(JSON.stringify(heroi));




