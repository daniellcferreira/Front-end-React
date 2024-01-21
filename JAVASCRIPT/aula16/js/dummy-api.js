// Buscando lista de usuario

async function getUsers() {
   const resposta = await fetch('https://dummyapi.io/data/v1/user?created=1', {
    headers: {
        "app-id": "65ad2417424f1e13059a49b3",
    },
   });
   const dados = await resposta.json();

   console.log(dados.data);
}

getUsers();


// Buscando unico usuario

async function getUser() {
    const resposta = await fetch('https://dummyapi.io/data/v1/user/65ad30da3697083334149457', {
    headers: {
        "app-id": "65ad2417424f1e13059a49b3",
    },
   });
   const user = await resposta.json();

   console.log(user);
}

getUser();


// Adicionando usuario

async function createUser() {
    const userData = {
        "firstName": "Pedro",
        "lastName": "Henrique",
        "email": "pedro3hen@test.com" 
    }

    try {
        await fetch('https://dummyapi.io/data/v1/user/create', {
        method: 'POST',
        headers: {
            "app-id": "65ad2417424f1e13059a49b3",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });
    } catch (erro) {
        console.log("Erro ao tentar criar o usuario!", erro)
    }
}

createUser();

