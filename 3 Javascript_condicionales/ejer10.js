let num1 = parseInt(window.prompt("Introduce un número:"))
let num2 = parseInt(window.prompt("Introduce un segundo número:"))

if(num1 === num2){
 console.log("0") 
}else if(num1%6 === num2%6){
 num1 < num2
 ? console.log(`${num1} es el menor`)
 : console.log(`${num2} es el menor`)    
}else{
 num1 < num2   
 ? console.log(`${num2} es el mayor`)
 : console.log(`${num1} es el mayor`)
}
