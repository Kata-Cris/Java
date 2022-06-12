let num1 = window.prompt(
"Introduce un número entero mayor de 25 y menor de 75:"    
);
let num2 = window.prompt(
"Introduce otro número entero mayor de 25 y menor de 75:"
);

let digi11 = num1.substring(0,1)
let digi12 = num1.substring(1)
let digi21 = num2.substring(0,1)
let digi22 = num2.substring(1)

if(dig11 === digi21 || digi11 === digi22 || digi12 === digi21 || digi12 === digi22){
 console.log("Hay dos dígitos en común")   
}