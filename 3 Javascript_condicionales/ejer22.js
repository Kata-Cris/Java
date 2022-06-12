let edad = window.prompt("Introduce tu edad:")

if (edad >= 18) {
 let carnet = window.prompt("¿Tienes carnet de conducir?").toLowerCase()
 if ((carnet = "si")){
    let persona = window.prompt("Introduce tu nombre y apellidos:")
    let ciudad = window.prompt("Dónde quieres recoger el coche?")
    let duracion = window.prompt("Cuántos días quieres el coche?")
    let semanas = parseInt(duracion/7)

    window.alert (`correcto: ${persona}. Puedes recoger tu coche en ${ciudad}para los próximos ${duracion}días
    El alquiler tendrá un coste de ${semanas > 1 ? semanas * 150 + ((duracion - (semanas * 7)) * 25) : duracion * 25
    }`)
}else {
   window.prompt("no puedes alquilar sin carnet de conducir") 
}
}else {
  window.alert("no puedes alquilar siendo menor de edad")  
}
  
