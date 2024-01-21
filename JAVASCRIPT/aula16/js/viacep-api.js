// Fetch API

// then / catch

fetch('https://viacep.com.br/ws/01001000/json/')
    .then((resposta) => {
        resposta.json().then((dados) => console.log(dados));
    })
    .catch((erro) => {
        console.log(erro);
    });


// async / await

async function obterDados() {
    try {
        const resposta = await fetch('https://viacep.com.br/ws/01001000/json/');
        const dados = await resposta.json();

        console.log(dados);
    } catch (erro) {
        console.log("ERRO!", erro);
    } finally {
        console.log("Terminado a requidição.");
    }
}

obterDados();