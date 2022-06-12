let num1 = parseInt(window.prompt("Introduce un número:"))
let num2 = parseInt(window.prompt("Introduce un segundo número:"))
let num3 = parseInt(window.prompt("Introduce un tercer número:"))
let menor

if(num1<num2 &&num1<num3){
 menor = num1
}else if(num2<num1 && num2<num3){
 menor = num2   
}else if(num3<num1 && num3<num2){
 menor = num3   
}else{
 console.log("No hay ninguno menor que los demás")   
}
console.log(`El menor es ${menor}`)