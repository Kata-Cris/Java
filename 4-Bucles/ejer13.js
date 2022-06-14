
let fecha = window.prompt("Introduce tu fecha de nacimiento (DD/MM/AAAA):")

let num = parseInt(fecha.substring(0, 2) + (fecha.substring(3, 5) + (fecha.substring(6)).toString))

let suma = 0

do{
 suma = 0
 for (let i = 0; i < num.length; i++){
    suma += parseInt(num.substring(1, i + 1))
 }
 num = suma.toString()
}while (suma.length > 1)

console.log(suma)
