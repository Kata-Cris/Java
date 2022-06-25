paises = [
    {
      pais: "españa",
      poblacion: 47450795,
      color: "red",
      superficie: 505944,
      bandera: "https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg"
    },
    {
      pais: "francia",
      poblacion: 67407241,
      color: "blue",
      superficie: 675417,
      bandera: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg"
    },
    {
      pais: "alemania",
      poblacion: 83155031,
      color: "yellow",
      superficie: 375375,
      bandera: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg"
    },
    {
      pais: "italia",
      poblacion: 60257566,
      color: "green",
      superficie: 301340,
      bandera: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg"
    },
    {
      pais: "portugal",
      poblacion: 10295909,
      color: "DarkGreen",
      superficie: 92090,
      bandera: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg"
    },
    {
      pais: "irlanda",
      poblacion: 4857000,
      color: "DarkOrange",
      superficie: 70273,
      bandera: "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg"
    },
  ]

  let pais1 = window.prompt("Introduce un páis").toLowerCase()
  let pais2 = window.prompt("Introduce otro páis").toLocaleLowerCase()
  let pais3 = window.prompt("Introduce un tercer páis").toLocaleUpperCase()

  let paisesFinal = []
  
  paisesFinal.push(buscarPaises(pais1,pais2,pais3))
  paisesFinal.push(buscarPaises(pais2,pais3,pais1))
  paisesFinal.push(buscarPaises(pais3,pais1,pais2))
  
  if(paisesFinal.length === 3){
    let impresion = ""
    for (let paisBueno in paisesFinal) {
     impresion+=
     `<div id= "${paisBueno.pais}class = "card">
    <img src="${paisBueno.bandera}" alt="${paisBueno.pais}">
    <h3>${paisBueno.pais}</h3>
    <p>Población:${paisBueno.poblacion}</p>
    <p>Superficie${paisBueno.superficie}</p>
    <button id="${paisBueno.pais+"button"}"type="button">Clickme</button>
    <div>
    `   
    }
    let div = document.createElement("div")
    div.classList.add("container")
    div.innerHTML = impresion
    document.body.appendChild(div)

    for (const paisBueno in paisesFinal){
        document.getElementById(paisBueno.pais+"button").addEventListener("click"), ()=>(document.getElementById(paisBueno.pais).style.backgroundColor = paisBueno.color)
    }
    

   }else{
    let h1 = document.createElement("p")
    h1.innerText = "Hay que elegir tres paises únicos de la lista" 
    document.body.appendChild(h1)
   }
  
   function buscarPaises(country1, country2, country3){
    for (let entrada in paises){
    
        if(entrada.pais === country1 && country1 !== country2 && country1 !== country3){
            return paises[entrada]
        }
    }
  }