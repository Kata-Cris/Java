let nombre = window.prompt("Introduce tu nombre")
let ventas = parseInt(window.prompt("Introduce tus ventas"))

ventas > 500
? window.alert(`${nombre} has superado el objetivo con tus ${ventas}€ de ventas, por lo tanto te llevas una comisión de ${ventas * 0.05}€ en total te llevas ${ventas + ventas * 0.05}`)
: window.alert(
  `${nombre} no has superado el objetivo de ventas con tus ${ventas}€.`  
)