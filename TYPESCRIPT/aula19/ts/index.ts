// Aula 19 - POO

interface IPessoa {
    nome: string;
    idade: number;
    altura: number;
    peso: number;
    
}

// Classe: Abstração

class Pessoa implements IPessoa {
    // Atributos: caracteristicas (variaveis)
    nome: string;
    idade: number;
    altura: number;
    peso: number;
    private _cpf: number;

    // Metodos: ação (funcoes)

    // Metodo construtor
    constructor(nome: string, idade: number, altura: number, peso: number, cpf: number) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this._cpf = cpf;
    }

    dormir() {
        console.log('Dormindo...');
    }

    // Metodo acessor: getter
    get cpf() {
        return this._cpf;
    }

    // Metodo acessor: setter
    set cpf(newCpf: number) {
        this._cpf = newCpf;
    }

}


// Herança da classe Pessoa
class Professor extends Pessoa {
    codigo: string;

    constructor(nome: string, idade: number, altura: number, peso: number, cpf: number, codigo: string) {
        super(nome, idade, altura, peso, cpf)
        this.codigo = codigo;
    }

    ensinar() {
        console.log('Ensinando...');
    }
}

// Criando(instancia) o objeto apartir da abstração pessoa

const pessoa1 = new Pessoa('Daniel', 36, 1.79, 78, 12345678900);

console.log(pessoa1);


const prof = new Professor('Professor', 45, 1.80, 85, 12345678910, '01');