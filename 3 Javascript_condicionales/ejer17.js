let num1 = parseInt(window.prompt("Introduce un número:"))
let num2 = parseInt(window.prompt("Introduce un segundo número:"))
let num3 = parseInt(window.prompt("Introduce un tercer número:"))
let mayor

if(num1>num2 &&num1>num3){
 mayor = num1
}else if(num2>num1 && num2>num3){
 mayor = num2   
}else if(num3>num1 && num3>num2){
 mayor = num3   
}else{
 console.log("No hay ninguno mayor que los demás")   
}
console.log(`El mayor es ${mayor}`)