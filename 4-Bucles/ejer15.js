
let contrasena = window.prompt("Introduce tu contraseña:")
let numero = false

if(contrasena.length >= 8){

   for (let i = 0; i < 10; i++){
    if (contrasena.includes(i.toString())){
        numero = true
    }
  }
  
  if (numero){
    if (contrasena.substring(0,1) === contrasena.substring(0,1).toUpperCase()){
        console.log("La contraseña es válida")
    }else{
        console.log("La contraseña no es válida")
    }
  }else{
    console.log("La contraseña no es válida")
  }
  
}else{
    console.log("La contraseña no es válida")
}