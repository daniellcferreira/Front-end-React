let numero = 20; // Inferência de tipo

const pi = 3.1415;

let nome: string = "Daniel";

let correta: boolean;


const num: number[] = [1, 2, 3, 4 ,5]; // tipagem number[] ou Array<number>

const misto: (number | string)[] = ['Daniel', 36, 1.80];


const idades: number[] = [];
idades.push(23);
idades.push(38);
idades.push(12);
idades.push(49);
idades.push(16);

const menorDeIdade = idades.filter(idade => idade < 18);

console.log(menorDeIdade);


const pessoaTupla: [string, number] = ['Daniel', 36];


// Object Types

// interface
// tipo costumizado

interface Person {
    nome: string;
    idade: number;
    profissao?: string;
    altura: number;
}

type Person1 = {
    nome: string;
    idade: number;
    profissao?: string;
    altura: number;    
}

type MyString = string;

const pessoa: Person = {
    nome: 'Wallison',
    idade: 27,
    altura: 1.77
}

pessoa.profissao = "Dev";

console.log(pessoa);


// Union types e Literal types

type Criterio = "greater" | "lower"; // type aliases

function chooseNumber(num1: number, num2: number, criterio?: Criterio ): number {
    switch(criterio) {
        case "greater":
            return num1 > num2 ? num1 : num2;
        case "lower":
            return num1 < num2 ? num1 : num2;
        default:
            const numAleatorio = Math.random();
            
            if(numAleatorio >= 0.5) return num1;
            return num2;
    }
}

const numEscolhido = chooseNumber(10, 20, "greater");

console.log("Numero escolhido: ", numEscolhido);


// Utility types: Permite que crie novos tipos a partir de tipo ja existentes

// 1. Partial 

type PersonPartial = Partial<Person>;


// 2. Required

type PersonRequired = Required<Person>;

// 3. Pick

type PersonPicked = Pick<Person, 'nome' | 'altura'>;

// 4. Omit

type PersonOmit = Omit<Person, 'profissao'>;

// 5. Exclude

type CriterioExclude = Exclude<Criterio, 'greater'>;

// 6. Record

type Pessoas = Record<string, Person>;

//const pessoas: Pessoas {
//    '123.456.789-00': {
//        nome: 'Fulano',
//        idade: 20,
//        altura: 1.80
//    }
// };


