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
function addR(num1: number, num2: number): number{
    return num1 + num2
}


function calcular(num1: number, num2: number){
    let multiplica = num1* num2
    return multiplica
}
console.log(calcular(20, 16))

//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||

//FUNCÇÃO VOID
function resulT(price:number){
    console.log('The result is: R$',price)
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
function generateError(message: string, code:number): never{
    throw {message: message, errorCode: code};    
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
function userInput(input1: number | string, input2: number | string){
    let result
    if (typeof input1 === 'number' && input2 === 'number') {
        result = input1 + input2
    }
    else {
        result = input1.toString() + input2.toString()
    }
    return result
}

const combinePrice = userInput(10,20)
console.log(combinePrice)

const combineName = userInput('apple ', 'avocado')
console.log(combineName)

//--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||--||

//LITERAL
let productPrice: 10 | 20 | 30
let productSize: 'P'| 'M' | 'G'

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