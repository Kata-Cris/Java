let num1 = parseInt(window.prompt("Introduce un número:"))
let num2 = parseInt(window.prompt("Introduce un segundo número:"))
let num3 = parseInt(window.prompt("Introduce un tercer número:"))

(num1 + num2) === num3
? console.log("El resultado de la suma de de los dos primeros números es igual al tercero")
: console.log("El tercero no es la suma de los dos anteriores")