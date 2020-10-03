var acceso = true

var accesoJ = function(a) {
    return a
}

accesoJ(acceso) == true ?
    console.log("Usuario permitido") :
    console.log("Acceso Restringido")

//AF//
var accesoU = a => a //retorna un valor

accesoU(acceso) == true ?
    console.log("Usuario permitido") :
    console.log("Acceso Restringido")

var accesoA = () => false //No pasa paraemtros a la función

accesoA(acceso) == true ?
    console.log("Usuario permitido") :
    console.log("Acceso Restringido")

var accesoX = (a, n) => console.log('Usuario: ' + n + '. Acceso: ' + a) //No pasa paraemtros a la función

accesoX(acceso, "Daniel") == true ?
    console.log("Usuario permitido") :
    console.log("Acceso Restringido")

var accesoB = () => {
    console.log("Usuario en ejecución")
    return true
}

accesoB() == true ?
    console.log("Usuario permitido") :
    console.log("Acceso Restringido")