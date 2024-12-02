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
