let opcion = window.prompt(`¿Cómo quieres la carne?
A - Cruda
B - Al punto
C - Muy hecha`
).toLocaleUpperCase()

if (opcion === "A"){
 window.alert("Cuando la pinchas chilla")   
}else if(opcion === "B"){
 window.alert("buena elección")   
}else if(opcion === "C"){
 window.alert("Usted no sabe comer")   
}else{
 window.alert("¿Le traigo otra cosa?")   
}

switch(opcion){
 case "A":
  window.alert("Cuando la pinchas chilla")
  break
 case "B":
  window.alert("Usted no sabe comer") 
  break
 case "C":
  window.alert("Usted no sabe comer")
  break
 default:
  window.alert("¿Le traigo otra cosa?")   
}