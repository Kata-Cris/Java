let num = window.prompt("Introduce un número de tres cifras")

let num1 = parseInt(num.substring(0,1))
let num2 = parseInt(num.substring(0,1))
let num3 = parseInt(num.substring(0,1))

if(num1%2===0 && num2%2===0 && num3%2===0){
  window.alert("todas las cifras son pares")  
}else if(num1%2===!0 && num2%2===!0 && num3%2===!0){
 window.alert("Tenemos cifras pares e impares mezcladas")   
}