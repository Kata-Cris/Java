let dia = window.prompt("Introduce un día de la semana").toLowerCase()

if(dia === "lunes" || dia === "martes" || dia === "miercoles" || dia === "miércoles" || dia === "jueves" || dia === "viernes"){
  console.log(`Es ${dia}`)  
}else if(dia === "sábado" || dia === "sabado" || dia === "domingo"){
  consol.log(`"Es fin de semana`) 
}else {
  console.log("El dato introducido no es un día de la semana")  
}

switch(dia){
  case "lunes":  
  case "martes":
  case "miércoles":
  case "miercoles":
  case "jueves":
  case "viernes":
    console.log(`hoy es ${dia}`)
    break
  case "sábado":
  case "sabado":
  case "domingo":
    console.log("Hoy es fin de semana")    
    break
  default:
    console.log("El dato introducido no es un día de la semana")  

}