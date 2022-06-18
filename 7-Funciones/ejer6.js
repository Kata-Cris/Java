let num1 = parseInt(window.prompt("Introduce un número:"))
let num2 = parseInt(window.prompt("Introduce otro número:"))

do{
    let num1 = parseInt(window.prompt("Introduce un número:"))
    let num2 = parseInt(window.prompt("Introduce otro número:"))
    if (num2 !== 0) {
        window.alert(dividir(num1/num2))
    }

}while (num2 !== 0)



function dividir(arg1,arg2){
    return arg1 / arg2
}

