const botaoAumentar = document.querySelector("#aumentar-botao");
const botaoDiminuir = document.querySelector("#diminuir-botao");

const contadorElemento = document.querySelector("#contador");

const input = document.querySelector("#input");

botaoAumentar.addEventListener("click", (event) => {
    const valorAtual = Number(contadorElemento.textContent);

    contadorElemento.textContent = valorAtual + 1;
});

botaoDiminuir.addEventListener("click", (event) => {
    const valorAtual = Number(contadorElemento.textContent);

    contadorElemento.textContent = valorAtual - 1;
});

input.addEventListener("input", () => {

});

// Adicionando estilos inline no elemento

contadorElemento.style.color = "red";
contadorElemento.style.padding = "0 2rem";


// Manipulando classes css

botaoAumentar.classList.add("btn");

let darkTheme;

window.onload =  () => {
   const temaStorage = localStorage.getItem("tema");

   darkTheme = temaStorage === "true" ? true:false;

   const body = document.querySelector("body");

        if(darkTheme) {
            body.style.backgroundColor = "black";
            body.style.color = "white";
        } else {
            body.style.backgroundColor = "white";
            body.style.color = "black"; 
        }
}

localStorage.setItem("tema", darkTheme);

const themeButton = document.querySelector("#tema");

themeButton.addEventListener('click', (event) => {
    darkTheme = !darkTheme;
    const body = document.querySelector("body");

    if(darkTheme) {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black"; 
    }
        
})

