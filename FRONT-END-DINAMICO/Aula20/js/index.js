// Selecionar documentos HTML da pagina utilizando document

// 1. Pelo nome da Tag
const todosH1 = document.getElementsByTagName('h1');

console.log(todosH1);

// 2. Pelo nome da classe

const todosClassParagrafos = document.getElementsByClassName("paragrafo");

console.log(todosClassParagrafos);

// 3. Pelo name da tag

const emailInput = document.getElementsByName("email");

console.log(emailInput);

// 4. Pelo id da tag

const jsLogo = document.getElementById("js-logo");

console.log(jsLogo);

// 5. Query Selector

const imagem = document.querySelector("body > img");

console.log(imagem);

const paragrafos = document.querySelectorAll("paragrafo");

console.log(paragrafos);

console.clear();

// Acessando ou Alterando o conteudo da tag

const primeiroParagrafo = document.querySelector("p.paragrafo");

console.log(primeiroParagrafo);

console.log("Conteudo:", primeiroParagrafo.textContent);
console.log("innerHTML:", primeiroParagrafo.innerHTML);

primeiroParagrafo.innerHTML = "<strong>Outra coisa</strong>";

console.clear();


// Criando elementos na pagina HTML

const listaUl = document.querySelector("ul#lista");
const listaLis = document.querySelectorAll("ul > li");

const novaTagLi = document.createElement('li'); // criando a tag li vazia
novaTagLi.textContent = "Segundo item"; // adicionando texto dentro da tag li 

/// listaUl.appendChild(novaTagLi); adicionando no final 

listaUl.insertBefore(novaTagLi, listaLis[1]);




