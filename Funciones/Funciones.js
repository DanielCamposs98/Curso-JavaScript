//Conjuntos de sentencias que realizan una tarea

//Sin parámetros
function saludar() {
    console.log("Hello, everybody")
}
saludar()
    //Con parámetros
function sumar(a, b) {
    let res = a + b
    console.log(res)
}
sumar(20, 1);

function miSuma(a, b) {
    return a + b
}
console.log(miSuma(3, 2))

var suma = function(a, b) {
    return a + b
}

console.log(suma(21, 5))