let manzana = 0
let carne = 0
let leche = 0
let pescado = 0

function modificar(direccion, producto){

 if(producto === "carne"){
 direccion === "+"
 ?carne++
 :carne--
}else if(producto === "manzana"){
 direccion === "+"
 ?manzana++
 :manzana--
}else if(producto === "leche") {
 direccion === "+"
 ?leche++
 :leche--
}else {
 direccion === "+"
 ?pescado++
 :pescado--}
 
 cesta()

}
function cesta (){
 let impresion = ""
 if (manzana >0){impresion += `<h5>manzana</h5><p>${manzana}</p>`}
 if (carne >0){impresion += `<h5>carne</h5><p>${carne}</p>`}
 if (leche >0){impresion += `<h5>leche</h5><p>${leche}</p>`}
 if (pescado >0){impresion += `<h5>pescado</h5><p>${pescado}</p>`}
}


document.getElementById(`cesta`).innerHTML = impresion