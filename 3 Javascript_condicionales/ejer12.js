let posicion = parseInt(window.prompt("Introduce tu posición:"))

posicion === 1
? console.log("Ganaste")
: console.log("Lo importante es participar")

if(posicion === 1){
 console.log("Medalla de oro")
}else if(posicion === 2){
 console.log("Medalla de plata")
}else if(posicion === 3){
 console.log("Medalla de bronce")
}else{
 console.log("Lo importante es participar")   
}

if(posicion > 0 && posicion <=3){
 console.log("Sube al podium")
}else{
 console.log("Se acabó la carrera")   
}
 
