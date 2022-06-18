
let opcion = window.prompt(`De qué figura quieres calcular el área:?
A - Círculo
B - Cuadrado
C - Triángulo`)

if(opcion === "A"){
    let radio = parseInt(window.prompt("Introduce el rádio del círculo"))
    window.alert(areaCirculo(radio))
}else if(opcion === "B"){
    let lado = parseInt(window.prompt("Introduce el lado del cuadrado"))
    window.alert(areaCuadrado(lado))
}else if(opcion === "C"){
    let base = parseInt(window.prompt("Introduce la base del triángulo"))
    let altura = parseInt(window.prompt("Introduce la altura del triángulo"))
    window.alert(areaTriangulo(base,altura))
}else{
    window.alert("Ninguna es válida")
}


function areaCirculo(radio){
    return Math.floor(radio*2)*3.1592
}

function areaCuadrado(lado){
    return Math.floor(lado**2)
}

function areaTriangulo(base, altura){
    return Math.floor((base*altura)/2)
}