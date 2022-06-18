let num1 = parseInt(window.prompt("Introduce un número:"))
let num2 = parseInt(window.prompt("Introduce otro número:"))

let num3 = sumaFuncion(num1,num2)
console.log(num3)

function sumaFuncion(arg1, arg2){
    return arg1 + arg2
}

