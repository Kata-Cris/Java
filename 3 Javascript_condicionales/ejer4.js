let num1 = parseInt(window.prompt("Introduce un número:"))
let num2 = parseInt(window.prompt("Introduce un segundo número:"))
let num3 = parseInt(window.prompt("Introduce un tercer número:"))

if(Math.abs (num1 - num2) === 20){
  console.log(`Entre ${num1} y ${num2} hay una diferencia de 20`) 
}else if(Math.abs(num1 - num3) === 20){
 console.log(`Entre ${num1} y ${num3} hay una diferencia de 20`)   
}else if(Math.abs(num2-num3)===20){
 console.log(`Entre ${num2} y ${num3} hay una diferencia de 20`)
}else{
 console.log("No hay diferencia de 20 entre los números")   
}
