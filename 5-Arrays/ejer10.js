let array = [0,0,0,0,0,0,0,0,0,0,0]
let numero = 0 

do{
 numero = parseInt(window.prompt("Introduce un índice:"))
 numero > 10 || numero < 0

 ? console.log("no es válido")
 : array [numero] = array[numero]+1, console.log(array[numero])

}while(numero >= 0)

for (let i = 0; i < array.length; i++)  {
    console.log(`${i} ----- ${array[i]}`)
}