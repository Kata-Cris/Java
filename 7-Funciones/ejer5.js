let num1 = parseInt(window.prompt("Introduce un número:"))
let num2 = parseInt(window.prompt("Introduce otro número:"))

esMayor(num1,num2)
?console.log("El primer número es más grande")
:console.log("El primer número no es más grande")

function esMayor(arg1,arg2){
    return arg1 > arg2 
    ? true
    : false
}
