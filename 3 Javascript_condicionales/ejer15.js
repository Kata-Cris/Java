let helados = parseInt(
 window.prompt("Escoge el número de helados que quieres:")
)

helados >= 10
? console.log(`Te llevas ${helados +1}y te cuesta ${helados+2}€`)
: console.log(`Te llevas ${helados} y te cuesta ${helados*2}€`)