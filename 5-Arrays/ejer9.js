let array = [1,1,1,1,1,1,1,1,1,1]

let numero = 0

do {
 numero = parseInt(window.prompt("Introduce un número entre 0 y 9"))
 numero >= 0 && numero <= 9
 ? (console.log(array[numero]), (array[numero] = array[numero] * 2 ))
 : console.log("no es válido")

}while(numero >= 0)