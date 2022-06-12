let = nota1 = parseFloat(window.prompt(`Introduce nota 1:`))
let = nota2 = parseFloat(window.prompt(`Introduce nota 2:`))
let = nota3 = parseFloat(window.prompt(`Introduce nota 3:`))
let final = (nota1>nota2 ? nota1:nota2 + nota3)

if(final === 10){
 window.alert("Matricula")   
}else if (final >= 9 && final < 10){
 window.alert("sobresaliente")   
}else if (final >= 7 && final < 9){
 window.alert("notable")
}else if (final >= 6 && final < 7){
 window.alert("bien")
}else if (final >= 5 && final < 6){
 window.alert("suficiente")
}else if (final >= 0 && final < 5){
 window.alert("Insuficiente")
}