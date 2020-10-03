//Asignación

let aux = 3
console.log(aux)

if (aux) {
    let aux = 20
    aux = aux + 3 //+, -, *, /, %. Operadores aritméticos
    console.log(aux)
}
console.log(aux)

if (aux) {
    let aux = 3
    aux *= 2
    console.log(aux)
}
console.log(aux)

//==,===, negacion!=
var a = 1
var a2 = '1'

console.log(a == a2)
console.log(a === a2)
console.log(a != a2)
console.log(a !== a2)

//<,>,>=,<=

var x = 20
var y = 30

console.log(x < y)
console.log(x <= y)
console.log(x > y)
console.log(x >= y)

//operador ternario: condicion ? true:false

var edad = 10
var res = edad >= 18 ? console.log("Mayor de edad") : console.log("Menor de edad")