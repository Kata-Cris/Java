let temperatura = parseFloat(window.prompt("Introduce la temperatura"))
let simbolo = window.prompt(`Indica en que quieres convertirlos:
C - Centigrados
F - Fahrenheit`).toUpperCase

switch(simbolo){
 case "C":
 window.alert(`${temperatura}F serían ${(temperatura-32)*5/9}C`)
 case "F":
 window.alert(`${temperatura}C serían ${(temperatura*9/5)+32}F`)     
}
