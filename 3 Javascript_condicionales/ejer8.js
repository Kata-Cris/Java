let num1 = parseInt(window.prompt("Introduce un número:"))
let num2 = parseInt(window.prompt("Introduce un segundo número:"))

if(num1 < num2){
 console.log(`${num1} es menor que ${num2}`)
}else if(num2 < num1){
 console.log(`${num2} es menor que ${num1}`)
}else{
 console.log(`${num1} y ${num2} son iguales`)  
}