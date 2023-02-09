//Tipos primitivos
let nome: string = 'Bruno';
let dia: number = 9;
let temRefri: boolean = false;
let qualquerCoisa: any; //Ñ indico fazer o uso, e sempre declarar um tipo especifico

//Variáveis com mais de um tipo
let seiLa: boolean | undefined; //undefined pode ser interessante para acessar a variável antes de ter um valor declarado nela
console.log(seiLa);
seiLa = true;
console.log(seiLa);

//Tipos em arrays
let numeros: number[] = [1, 2, 3, 4];
let letras: Array<string> = ['a', 'b', 'c']; //Eu curto mais essa notação de tipos de Arrays

//Tuplas
let lista: [number, string, boolean] = [56, 'casa', false];
let listas: [number, string, boolean][] = [
  //Diz que o tipo é um Array de Tuplas
  [56, 'casa', false],
  [43, 'apartamento', true],
];

//Tipos em funções
function Soma(numero1: number, numero2: number): number {
  //Declarado que a função deve retornar um dado do tipo number
  return numero1 + numero2;
}
function Mensagem(palavra1: string, caractere: string | number): void {
  //Declarado que a função em si não pode retornar nada, apenas executa código
  console.log(palavra1 + ' ' + caractere);
}
Mensagem('Olá', 2);

//Type assertion
let id: any;
let idUsuario = id as number;
let idCliente = id as string;

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

interface carro {
  cor: string;
  ano: number;
  placa?: string;
}

const opalaDaEj: carro = {
  cor: 'vermelho',
  ano: 1984,
};

//Interface em funções
interface funcaoMatematica {
  (x: number, y: number): number;
}

const Subtracao: funcaoMatematica = (numero1, numero2) => numero1 - numero2;

//Modificadores de acesso
class Pessoa {
  private nome: string;
  readonly idade: number;
  protected cpf: string;

  constructor(nome: string, idade: number, cpf: string) {
    //Declara como o objeto da classe deve ser criado
    this.nome = nome;
    this.idade = idade;
    this.cpf = cpf;
  }
  setNome(nome: string) {
    //Permite alterar a propriedade nome
    this.nome = nome;
  }
}

class PessoaJuridica extends Pessoa {
  //Classe filha de Pessoa que herda todos métodos e atributos da classe mãe
  cnpj: string;

  constructor(nome: string, idade: number, cpf: string, cnpj: string) {
    super(nome, idade, cpf); //Chama o construtor da classe mãe passando os parâmetros recebidos
    this.cnpj = cnpj;
  }
  setCpf(cpf: string) {
    //Altera cpf da classe Pessoa mas apenas para pessoas da classe PessoaJuridica
    this.cpf = cpf;
  }
}
const pessoa1 = new PessoaJuridica( //Criar uma nova instância de objeto da classe PessoaJuridica
  'João',
  13,
  '123.456.678-10',
  '30.213.456.0001-5'
);

pessoa1.setCpf('312.654.432-12');
console.log(pessoa1.idade);
