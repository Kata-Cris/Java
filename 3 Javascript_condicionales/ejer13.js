let frase = window.prompt("Introduce una frase:")

frase.length%2 === 0
?console.log(frase.substring(frase.length/2-1,frase.length/2+1))
:console.log(frase.substring(parseInt(frase.length/2),parseInt(frase.length/2)+1))