
let suma = 0 
do{

 let numero = parseInt(window.prompt("Introduce un número:"))
 
  if (numero > 0 ){
    suma += numero
 }else if (numero === 0){
    window.alert(suma)
 }else {
    window.alert(`no se aceptan números negativos`)
 }
 
}while(numero != 0)