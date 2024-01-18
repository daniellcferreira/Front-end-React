const fs = require('fs');

// 1 - Callbacks

// Função Assincrona

console.log("ANTES da função ler o arquivo...");

fs.readFile("aula13/arquivo.txt", (erro, conteudoDoArquivo) => {
    if (erro) {
        console.log("Ocorreu um erro ao tentar ler o arquivo:", erro);
    } else {
        console.log(String(conteudoDoArquivo));
    }
});

console.log("DEPOIS da função ler o arquivo...");


// Exemplo 2: setTimeout (função que cria um timer)

console.log("ANTES da função setTimeout...");

setTimeout(() => {
    console.log("Sendo executado após 2 segundos!");
}, 2 * 1000);

console.log("DEPOIS da função setTimeout...");


// 2 - Promises (Promessas)

console.log("Antes da criação da Promessa...");


function lerArquivoPromisse() {
    return new Promise((resolve, reject) => {
        fs.readFile("aula13/arquivo.txt", (erro, conteudoDoArquivo) => {
            if (erro) {
                reject("Ocorreu um erro ao tentar ler o arquivo:", erro);
            } else {
                resolve(String(conteudoDoArquivo));
            }
        }); 
    });
};

lerArquivoPromisse()
    .then((retornoDoResolvePromisse) => {     // Tratando a promessa
        console.log("Deu certo:", retornoDoResolvePromisse);
    })
    .catch((erro) => {
        console.log("Deu ruim:", erro);
    })
    .finally(() => {
        console.log("Sendo executando independente do sucesso ou fracasso da promessa.");
    });


// 3 - async / await

async function lerArquivoDeDados() {
    console.log("Esta sendo executado Antes da promise ser resolvida...");

    try {
        const dadosDoArquivoLido =  await lerArquivoPromisse();

        console.log(dadosDoArquivoLido);

        console.log("Esta sendo executado Depois da promise ser resolvida...");
    } catch (erro) {
        console.log(erro);

        console.log("Sendo executado depois da promisse (erro)");
    } finally {
        console.log("Dentro do finally");
    }
}

lerArquivoDeDados();





