let num1 = Math.abs(parseInt(window.prompt("Introduce un número:")))

window.alert(contarNumeros(num1))

function contarNumeros(num){
    return num.toString().lenght
}