"use strict";
//Tipos primitivos
let nome = 'Bruno';
let dia = 9;
let temRefri = false;
let qualquerCoisa;
//Variaveis com mais de um tipo
let seiLa;
console.log(seiLa);
seiLa = true;
console.log(seiLa);
//Tipos em arrays
let numeros = [1, 2, 3, 4];
let letras = ['a', 'b', 'c'];
//Tuplas
let lista = [56, 'casa', false];
let listas = [
    [56, 'casa', false],
    [43, 'apartamento', true],
];
//Tipos em funções
function Soma(numero1, numero2) {
    return numero1 + numero2;
}
function Mensagem(palavra1, caractere) {
    console.log(palavra1 + ' ' + caractere);
}
Mensagem('Olá', 2);
//Type assertion
let id;
let idUsuario = id;
let idCliente = id;
id = 1;
id = 'UM';
idUsuario = 123;
idCliente = '12';
//Interface
const carro = {
    cor: 'vermelho',
    ano: 1984,
    placa: 'ABC-1234',
};
const opalaDaEj = {
    cor: 'vermelho',
    ano: 1984,
};
const Subtracao = (numero1, numero2) => numero1 - numero2;
//Modificadores de acesso
class Pessoa {
    constructor(nome, idade, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }
    setNome(nome) {
        this.nome = nome;
    }
}
class PessoaJuridica extends Pessoa {
    constructor(nome, idade, cpf, cnpj) {
        super(nome, idade, cpf);
        this.cnpj = cnpj;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
}
const pessoa1 = new PessoaJuridica('João', 13, '123.456.678-10', '30.213.456.0001-5');
pessoa1.setCpf('312.654.432-12');
console.log(pessoa1);
pessoa1.setNome('Pedro');
console.log(pessoa1.idade);
