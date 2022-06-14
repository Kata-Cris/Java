
let cifra = window.prompt(`Introduce un número de tres cifras:`)
let suma = 0 

for (let i = 0; i < cifra.length; i++) {
    suma += parseInt(cifra.substring(i, i+1))
}
console.log(suma)
