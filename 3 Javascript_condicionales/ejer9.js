let temp = parseInt(window.prompt("Introduce la temperatura actual"))

if(temp > 40){
 console.log("Vete a otro sitio")
}else if(temp > 30 && temp <=40){
 console.log("Enciende el aire acondicionado")   
}else if(temp > 20 && temp <= 30){
 console.log("No hagas nada")   
}else if(temp > 10 && temp <= 20)
console.log("Enciende la calefacción")