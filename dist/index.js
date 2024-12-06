"use strict";
function add(num1, num2) {
    return num1 + num2;
}
let result = add(5, 8);
console.log(result);
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
let price = 35;
let item = 'apple';
let inStore = true;
let value;
value = 10;
value = 'Gui';
//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||
//ARRAY
let values = [10, 20, 40, 60];
//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||
//TUPLAS
//apple, 3, true
let itens = ['Apple', 5, true];
//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||
//ENUM
// const adm = 1
// const read = 2
// const backup = 3
var Role;
(function (Role) {
    Role[Role["admin"] = 1] = "admin";
    Role[Role["read"] = 2] = "read";
    Role[Role["backup"] = 3] = "backup";
})(Role || (Role = {}));
const user = {
    firstName: 'Guilherme',
    age: 40,
    role: Role.backup
};
console.log(user);
//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||
//FUNÇÃO RETURN
function addR(num1, num2) {
    return num1 + num2;
}
function calcular(num1, num2) {
    let multiplica = num1 * num2;
    return multiplica;
}
console.log(calcular(20, 16));
//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||
//FUNCÇÃO VOID
function resulT(price) {
    console.log('The result is: R$', price);
}
console.log(resulT(addR(6, 3)));
//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||
//OBJETOS
const User = {
    FirstName: 'Guilherme',
    age: 20,
    lastName: 'Mourad',
};
User.lastName = "mourad";
//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||
//UNKNOWN
let itemInput;
let itemName;
itemInput = 10;
itemInput = 'Apple';
if (itemInput === 'string') {
    itemName = itemInput;
}
//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||
//NEVER
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
const USER = {
    firstName: 'Gui',
    age: 35
};
console.log(USER);
//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||
//UNION
function userInput(input1, input2) {
    let result;
    if (typeof input1 === 'number' && input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinePrice = userInput(10, 20);
console.log(combinePrice);
const combineName = userInput('apple ', 'avocado');
console.log(combineName);
//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||
//LITERAL
let productPrice;
let productSize;
productPrice = 30;
productSize = 'G';
const e1 = {
    firstName: 'GUilherme',
    age: 20,
    id: 156,
    role: 'admin'
};
//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||
// Day 3 - Exercise 1
let pi;
pi = 3.14159;
let tau = pi * 2;
console.log(`${tau} is ${pi} times two.`);
//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||
// Day 3 - Exercise 2
let pie;
pie = 'blueberry';
console.log(`I like to eat ${pie}-flavored pie.`);
//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||
// Day 3 - Exercise 3
let isDouglas = true;
console.log(`${isDouglas ? 'Oh, Hi Douglas' : 'Who are you?'}`);
//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||
// Day 3 - Exercise 4
const integer = 6;
const float = 6.66;
const hex = 0xf00d;
const binary = 0b1010011010;
const octal = 0o744;
const negZero = -0;
const actuallyNumber = NaN;
const largestNumber = Number.MAX_VALUE;
const mostBiglyNumber = Infinity;
const members = [
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
const sequence = Array.from(Array(10).keys());
const animals = ['pangolin', 'aardvark', 'echidna', 'binturong'];
const stringsAndNumbers = [1, 'one', 2, 'two', 3, 'three'];
const allMyArrays = [sequence, animals, stringsAndNumbers];
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
    constructor(n, b) {
        this.name = n;
        this.balance = b;
    }
    addMoney(amount) {
        this.balance += amount;
    }
}
const user1 = new bankUser('Guilherme', 1000);
user1.addMoney(150);
const user2 = new bankUser('Beatriz', 780);
user2.addMoney(450);
console.log(user1);
console.log(user2);
let product1;
product1 = {
    name: 'apple',
    price: 2,
    itemMessage(message) {
        console.log(message, this.name);
    }
};
product1.itemMessage('Voce comprou uma');
function addToCart(item) {
    console.log(`Adding "${item.title}" to cart.`);
}
addToCart({ id: 1, title: 'shoes' });
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const people = new Person('guilherme', 19);
console.log(`${people.name} is ${people.age} years old.`);
//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||
// Day 5 - Exercise 3
class MC {
    greet(event = 'party') {
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
    constructor(title, salary) {
        this.title = title;
        this.salary = salary;
        //   this.title = title;
        //   this.salary = salary;
    }
}
const employee = new Employee('Engineer', 100000);
console.log(`The new employee's title is ${employee.title} and they earn $ ${employee.salary}.`);
class User0 {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const user0 = new User0('Dog', 1);
console.log(user0.id);
user0.name = 'Harold'; // pode mudar
//user0.id = 5 // nao pode mudar
console.log(`User:`, user0);
//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||
var tipoLoja;
(function (tipoLoja) {
    tipoLoja[tipoLoja["esporte"] = 1] = "esporte";
    tipoLoja[tipoLoja["moda"] = 2] = "moda";
    tipoLoja[tipoLoja["comida"] = 3] = "comida";
})(tipoLoja || (tipoLoja = {}));
class Loja {
    constructor(nome, tipo, vendasNoUltimoMes) {
        this.nome = nome;
        this.tipo = tipo;
        this.vendasNoUltimoMes = vendasNoUltimoMes;
        this.nome = nome;
        this.tipo = tipo;
        this.vendasNoUltimoMes = vendasNoUltimoMes;
    }
    calcularVendaTotal(vendasDiarias) {
        const total = vendasDiarias.reduce((acc, venda) => acc + venda, 0);
        this.vendasNoUltimoMes = total; // Atualiza o total no atributo vendasNoUltimoMes
    }
    getTipoLoja() {
        return tipoLoja[this.tipo];
    }
    toString() {
        return `Loja: ${this.nome}, Tipo: ${this.getTipoLoja()}, Vendas no Último Mês: ${this.vendasNoUltimoMes}`;
    }
}
const vendasDiarias = [1000, 1500, 1200, 1800, 1300, 1700, 1400];
const loja1 = new Loja('Abacadabra', 1, 0);
loja1.calcularVendaTotal(vendasDiarias);
console.log(loja1.toString());
//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||
//READONLY -> posso acessar, mas não alterar fora da classe
//private -> não pode acessar =, nem alterar fora da classe
class Movies {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
let movie1 = new Movies(1, 'Dejavu');
console.log(movie1);
//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||
//PARAMETRO DO CONSTRUCTOR
//usando o mesmo codigo
class Movies1 {
    //readonly id: number
    //name: string
    constructor(id, name, _price) {
        this.id = id;
        this.name = name;
        this._price = _price;
        //this.id = id
        //this.name = name
    }
}
let movie11 = new Movies1(1, 'Dejavu');
console.log(movie1);
//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||
//INDEX SIGNATURES -> quando a propriedade nao é fixa
class hotel {
}
let room = new hotel();
room.A201 = 'Andre';
room.A202 = 'Ana';
room.A203 = 'Bia';
console.log(room);
//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||
//INHERITANCE (HERENÇA)
class Person1 {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get greet() {
        return this.firstName + ' ' + this.lastName;
    }
}
class clienteBanco extends Person1 {
    get greet() {
        return 'Dear' + super.greet;
    }
}
//OVERRIDING
//usando o mesmo codigo
class funcionarioBanco extends Person1 {
    get greet() {
        return 'Hi' + super.greet;
    }
}
let cliente1 = new clienteBanco('Guilherme', 'Mourad', 20);
let funcionario1 = new funcionarioBanco('Beatriz', 'Rizatto', 18);
console.log(cliente1.greet);
console.log(funcionario1.greet);
