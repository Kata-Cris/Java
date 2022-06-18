let num = parseInt(window.prompt("Introduce un número:"))

window.alert(par(num) ? "El número es par" : "El número es impar")

function par(arg1){
    return arg1 %2 === 0
}
