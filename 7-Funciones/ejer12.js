
do{
 let numero = parseInt(window.prompt("Introduce un año:"))
 window.alert(esBisiesto(numero) ? `El año es bisiesto` : `El año no es bisiesto`)

}while (numero !== 0)


function esBisiesto(ano){
 return((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0)   
}