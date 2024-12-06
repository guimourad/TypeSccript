function add(num1: number, num2: number) {
    return num1 + num2
}

let result = add(5, 8)
console.log(result)

//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||

//TIPOS NO TYPESCRIPT
/*
Tipos: 

    JS:             TS:
    .number         .any
    .string         .unknown
    .boolean        .tuple
    .undefined      .never
    .object         .enum
    .null

*/
//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||

//O TIPO ANY    
let price = 35
let item = 'apple'
let inStore = true

let value
value = 10
value = 'Gui'

//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||

//ARRAY
let values: number[] = [10, 20, 40, 60]

//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||

//TUPLAS
//apple, 3, true
let itens: [string, number, boolean] = ['Apple', 5, true]

//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||

//ENUM

// const adm = 1
// const read = 2
// const backup = 3

enum Role {
    admin = 1, read = 2, backup = 3
}

const user = {
    firstName: 'Guilherme',
    age: 40,
    role: Role.backup
}

console.log(user)

//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||

//FUNÇÃO RETURN
function addR(num1: number, num2: number): number {
    return num1 + num2
}


function calcular(num1: number, num2: number) {
    let multiplica = num1 * num2
    return multiplica
}
console.log(calcular(20, 16))

//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||

//FUNCÇÃO VOID
function resulT(price: number) {
    console.log('The result is: R$', price)
}
console.log(resulT(addR(6, 3)))

//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||

//OBJETOS
const User = {
    FirstName: 'Guilherme',
    age: 20,
    lastName: 'Mourad',
}
User.lastName = "mourad"

//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||

//UNKNOWN
let itemInput: unknown
let itemName: string

itemInput = 10
itemInput = 'Apple'
if (itemInput === 'string') {
    itemName = itemInput
}

//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||

//NEVER
function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
}


//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||

//ALIAS
type Users = {
    firstName: string
    age: number
}

const USER: Users = {
    firstName: 'Gui',
    age: 35
}
console.log(USER)

//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||

//UNION
function userInput(input1: number | string, input2: number | string) {
    let result
    if (typeof input1 === 'number' && input2 === 'number') {
        result = input1 + input2
    }
    else {
        result = input1.toString() + input2.toString()
    }
    return result
}

const combinePrice = userInput(10, 20)
console.log(combinePrice)

const combineName = userInput('apple ', 'avocado')
console.log(combineName)

//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||

//LITERAL
let productPrice: 10 | 20 | 30
let productSize: 'P' | 'M' | 'G'

productPrice = 30
productSize = 'G'

//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||

//INTERSECTION
type USerr = {
    firstName: string
    age: number
}

type JobRole = {
    id: number
    role: string
}

type incluir = USerr & JobRole

const e1: incluir = {
    firstName: 'GUilherme',
    age: 20,
    id: 156,
    role: 'admin'

}


//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||

// Day 3 - Exercise 1

let pi: number;
pi = 3.14159;
let tau = pi * 2;

console.log(`${tau} is ${pi} times two.`);


//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||

// Day 3 - Exercise 2

let pie: string;
pie = 'blueberry'

console.log(`I like to eat ${pie}-flavored pie.`)


//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||


// Day 3 - Exercise 3

let isDouglas: boolean = true

console.log(`${isDouglas ? 'Oh, Hi Douglas' : 'Who are you?'}`)


//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||

// Day 3 - Exercise 4

const integer: number = 6;
const float: number = 6.66;
const hex: number = 0xf00d;
const binary: number = 0b1010011010;
const octal: number = 0o744;
const negZero: number = -0;
const actuallyNumber: number = NaN;
const largestNumber: number = Number.MAX_VALUE;
const mostBiglyNumber: number = Infinity;

const members: number[] = [
    integer,
    float,
    hex,
    binary,
    octal,
    negZero,
    actuallyNumber,
    largestNumber,
    mostBiglyNumber
];

members[0] = 12345;

console.log(members);


//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||

// Day 3 - Exercise 5

const sequence: number[] = Array.from(Array(10).keys());
const animals: string[] = ['pangolin', 'aardvark', 'echidna', 'binturong'];
const stringsAndNumbers: (number | string)[] = [1, 'one', 2, 'two', 3, 'three'];
const allMyArrays: (number | string)[][] = [sequence, animals, stringsAndNumbers];

console.log(allMyArrays);


//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||

//tsc --watch para rodar automatico

//include e exclude para rodar apenas arquivos que eu desejo

//sourceMap ajuda no debug no browser

//RootDir(diretorio raiz(arquivo .ts)) e OutDir(diretorio quando compilado, de .ts para .js, joga para esse caminho) ->

//noEmit -> não permite que o arquivo seja compilado para .js caso tenha erro

//strict e implicit Any ->

//Unused locals -> verifica se existe variavel criada dentro de uma função e que não esta sendo usada

//Unused Parameters -> verifica se existe parametro criada dentro de uma função e que não esta sendo usado

//implicit Return -> Faz com que seja necessario o return nas funçoes


//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||


//DIA 5

//OOP(PROGRAMAÇÃO ORIENTADA A OBEJETO)

//|-------------------------|
//|         PERSON          | 
//|-------------------------|
//|  NAME:   AGE:   PHONE:  |-> PROPRIEDADES
//|-------------------------|
//| TALK()   EAT()   WALK() |-> METODOS
//|                         |
//|-------------------------|


//CRIANDO CLASSE
//CRIANDO UM OBJETO COM METODO
//PROPRIEDADES PUBLIC E PRIVATE

class bankUser {
    name: string
    public balance: number

    constructor(n: string, b: number) {
        this.name = n
        this.balance = b
    }

    addMoney(amount: number) {
        this.balance += amount
    }
}

const user1 = new bankUser('Guilherme', 1000)
user1.addMoney(150)
const user2 = new bankUser('Beatriz', 780)
user2.addMoney(450)
console.log(user1)
console.log(user2)


//INTERFACE
interface item {
    name: string
    price: number

    itemMessage(message: string): void
}
let product1: item

product1 = {
    name: 'apple',
    price: 2,
    itemMessage(message: string) {
        console.log(message, this.name)
    }
}

product1.itemMessage('Voce comprou uma')


//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||


// Day 5 - Exercise 1

interface itemCart {
    id: number
    title: string
    variantId?: number
}

function addToCart(item: itemCart) {
    console.log(`Adding "${item.title}" to cart.`);
}

addToCart({ id: 1, title: 'shoes' });


//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||

// Day 5 - Exercise 2

interface People {
    name: string
    age: number
}

class Person implements People {
    constructor(public name: string, public age: number) { }
}

const people = new Person('guilherme', 19);

console.log(`${people.name} is ${people.age} years old.`);


//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||


// Day 5 - Exercise 3

class MC {
    greet(event: string = 'party'): string {
        return `Welcome to the ${event}`;
    }
}

const mc = new MC();
console.log(mc.greet('show'));


//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||

// Day 5 - Exercise 4



class Employee {

    // title: string;
    // salary: number;
    constructor(public title: string, public salary: number) {
        //   this.title = title;
        //   this.salary = salary;
    }
}

const employee = new Employee('Engineer', 100000);

console.log(`The new employee's title is ${employee.title} and they earn $ ${employee.salary}.`);


//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||


// Day 5 - Exercise 5

interface UserSchema {
    id: number
    name: string
}

class User0 implements UserSchema {
    constructor(public name: string, readonly id: number) { }
}

const user0 = new User0('Dog', 1)

console.log(user0.id)

user0.name = 'Harold' // pode mudar
//user0.id = 5 // nao pode mudar

console.log(`User:`, user0)


//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||


enum tipoLoja {
    esporte = 1, moda = 2, comida = 3
}

interface Lojas {
    nome: string
    tipo: tipoLoja
    vendasNoUltimoMes: number
}

class Loja implements Lojas {
    constructor(readonly nome: string, readonly tipo: tipoLoja, public vendasNoUltimoMes: number) {
        this.nome = nome;
        this.tipo = tipo;
        this.vendasNoUltimoMes = vendasNoUltimoMes;
    }
    calcularVendaTotal(vendasDiarias: number[]): void {
        const total = vendasDiarias.reduce((acc, venda) => acc + venda, 0);
        this.vendasNoUltimoMes = total; // Atualiza o total no atributo vendasNoUltimoMes
    }

    getTipoLoja(): string {
        return tipoLoja[this.tipo];
    }

    toString(): string {
        return `Loja: ${this.nome}, Tipo: ${this.getTipoLoja()}, Vendas no Último Mês: ${this.vendasNoUltimoMes}`;
    }

}

const vendasDiarias = [1000, 1500, 1200, 1800, 1300, 1700, 1400];
const loja1 = new Loja('Abacadabra', 1, 0);
loja1.calcularVendaTotal(vendasDiarias)
console.log(loja1.toString())


//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||

//READONLY -> posso acessar, mas não alterar fora da classe
//private -> não pode acessar =, nem alterar fora da classe
class Movies {
    id: number
    name: string

    constructor(
        id: number,
        name: string,
    ) {
        this.id = id
        this.name = name
    }
}

let movie1 = new Movies(1, 'Dejavu',)
console.log(movie1)


//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||
//PARAMETRO DO CONSTRUCTOR
//usando o mesmo codigo
class Movies1 {
    //readonly id: number
    //name: string

    constructor(
        public readonly id: number,
        public name: string,
        private _price?: number
    ) { //usando o 'public', cria e inicializa a propriedade automatico
        //this.id = id
        //this.name = name
    }
}

let movie11 = new Movies1(1, 'Dejavu',)
console.log(movie1)


//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||
//INDEX SIGNATURES -> quando a propriedade nao é fixa

class hotel {
    [roonNumber: string]: string
}

let room = new hotel()

room.A201 = 'Andre'
room.A202 = 'Ana'
room.A203 = 'Bia'

console.log(room)


//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||
//INHERITANCE (HERENÇA)

class Person1 {
    constructor(public firstName: string, public lastName: string, public age: number) { }

    get greet() {
        return this.firstName + ' ' + this.lastName
    }

}

class clienteBanco extends Person1 {
    override get greet() {
        return 'Dear' + super.greet
    }
}



//OVERRIDING
//usando o mesmo codigo

class funcionarioBanco extends Person1 {
    override get greet() {
        return 'Hi' + super.greet
    }
}

let cliente1 = new clienteBanco('Guilherme', 'Mourad', 20)
let funcionario1 = new funcionarioBanco('Beatriz', 'Rizatto', 18)

console.log(cliente1.greet)
console.log(funcionario1.greet)


//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||

// Day 7 - Exercise 1

interface User10 {
    name: string;
    age: number;
    occupation: string;
}

interface Admin10 {
    name: string;
    age: number;
    role: string;
}

type Person10 = User10 | Admin10;

const persons: Person10[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut.'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver.'
    }
];

function logPerson(person10: Person10) {
    let additionalInformation: string;
    if ('role' in person10) {
        additionalInformation = person10.role;
    } else {
        additionalInformation = person10.occupation;
    }
    console.log(` - ${person10.name}, ${person10.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);


//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||

// Day 7 - Exercise 2

class Animal {
    constructor(public name: string) { }
    move(meters: number) {
        console.log(`${this.name} moved ${meters}m.`)
    }
}

class Snake extends Animal {
    override move(meters: number) {
        console.log('Slithering...')
    super.move(meters)
    }
}

class Pony extends Animal {
    override move(meters: number) {
        console.log('Galloping...')
    super.move(meters)

    }
}


const sammy = new Snake("Sammy the Snake")
sammy.move(5)

const pokey = new Pony("Pokey the Pony")
pokey.move(34)


//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||

// Day 7 - Exercise 3

class Furniture {
    //protected readonly manufacturer: string

    constructor(protected manufacturer: string = 'IKEA') {
        this.manufacturer = manufacturer
    }
  }

  class Desk extends Furniture {
    kind() {
      console.log(`This is a desk made by ${this.manufacturer}`)
    }
  }

  class Chair extends Furniture {
    kind() {
      console.log(`This is a chair made by ${this.manufacturer}`)
    }
  }

  const desk = new Desk()
  desk.kind()
  //desk.manufacturer // Deve retornar um erro

  const chair = new Chair()
  chair.kind()
  //chair.manufacturer // Deve retornar um erro


//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||


// Day 7 - Exercise 4

let multiply: (val1: number, val2: number) => number;
let capitalize: (val: string) => string;

capitalize = function(value: string): string {
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
}

multiply = function(x: number, y: number): number {
  return x * y;
}

console.log(capitalize(`nifty ${multiply(5, 10)}`));


//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||

// Day 7 - Exercise 5

function layEggs(quantity: number, color: string): void {
    console.log(`You just laid ${quantity} ${color} eggs. Good job!`);
  }

  layEggs(2, 'blue');