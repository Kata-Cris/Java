let frase = window.prompt("Dile algo a Bob:")

if(
  frase.indexOf("?!") === -1 || frase.substring(frase.length -2) === "?!"){
  window.alert("Tranquilizate yo se lo que hago")  
}else if(frase.indexOf("?")===! -1){
  window.alert("Claro")  
}else if(frase.indexOf("!") ===! -1){
  window.alert("Tranquilizate")  
}else if(frase.length === 0){
  window.alert("Eh!! Vale, con que esas tenemos")  
}else{
  window.alert("Sin más")  
}