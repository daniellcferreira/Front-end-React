// Map
// Ele cria um novo array que possui o "Mesmo tamanho do array original" 
// composto pelos elementos que foram retornados a cada interação

const numeros = [40, 34, 67, 89, 23, 16, 10];

const novoArray = numeros.map((elemento) => {
    return elemento * 2;
})

console.log(novoArray);

console.clear();


// Exemplo 1 : Elevando todos os elementos do array ao quadrado

const valores = [39, 45, 32, 24, 4, 22, 2, 49, 23, 8];

const novoValores = valores.map((valor) => valor ** 2);

console.log(novoValores);

console.clear();


// Exemplo 2 : Adicionando uma propriedade aos objetos do array

const carrinho = [
    { produto: "feijão", preco: 7.98, quantidade: 3 },
    { produto: "Arroz", preco: 4.98, quantidade: 5 },
    { produto: "Leite 1L", preco: 6.99, quantidade: 2 }
];

const carrinhoComTotal = carrinho.map((item) => {
    return {
        ...item,
        total: item.preco * item.quantidade
    };
});

console.log(carrinhoComTotal);