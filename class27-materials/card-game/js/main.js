//Example fetch using pokemonapi.co
// se declara afura por que se va a utilizar en difernetes funciones asi que se utiliza rn todo el codigo 
let deckId = ''

fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      deckId = data.deck_id
    })
    .catch(err => {
      console.log(`error ${err}`)
    });

/*
La api regresa data (que es un mazo de cartas) pero cada data que regrese se va a identificar con deck_id (se identifica con un id que es cada mazo diferente de las cartas, y el nombre me lo dio la API), por lo tanto se va a estar guardando en la variable deckId. es por eso que al principio del código se dejo vacia la variable let deckId = ' ' para guardar cada maso diferente en la variable 
*/
    

document.querySelector('button').addEventListener('click', drawTwo)

function drawTwo() {
   // Usamos el nombre especial del mazo (deckId) para pedir dos cartas al azar.
  const url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`
  
   // Ahora, le pedimos a la "máquina" las dos cartas.
  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data) // Aquí vemos las cartas que obtuvimos
      // Mostramos las imágenes de las cartas en la pantalla como si fueran de dos jugadores
      document.querySelector('#player1').src = data.cards[0].image
      document.querySelector('#player2').src = data.cards[1].image 
      // Se guardan las imagenes de los dos jugadores,peroo los valores de esas cartas se convierten en números y se almacenan en las variables player1Val y player2Val 
      let player1Val = converToNum(data.cards[0].value)
      let player2Val = converToNum(data.cards[1].value)
      // Y anunciamos al ganador en la pantalla
      if(player1Val > player2Val){
        document.querySelector('h3').innerText = 'player 1 Wins' //ara cambiar el texto que se muestra en un elemento <h3> en la página web a la player 1 Wins. 
        }else if (player1Val < player2Val){
          document.querySelector('h3').innerText = 'player 2 Wins'
        }else{
          document.querySelector('h3').innerText = 'TIME FOR WAR!!!'
        }
      
    })
    .catch(err => {
      console.log(`error ${err}`)
    });

    

    //val puedes meter cualquier valor
    // También tenemos una regla especial para saber qué carta es más grande
    function converToNum (val){
      if(val === 'ACE'){
        return 14 // El AS se convierte en 14 (la carta más fuerte)
      }else if(val === 'KING'){
        return 13 // El REY se convierte en 13
      }else if(val === 'Queen'){
        return 12
      }else if(val == 'Jack'){
        return 11
      }else{
        return Number(val) // Los números se mantienen como están (2-10)
      }

    }

}
/*
convertToNum se utiliza para convertir el valor de una carta en su equivalente numérico. En un mazo de cartas, las cartas pueden tener valores como "ACE" (AS), "KING" (REY), "Queen" (REINA), "Jack" (JOTA), y números del 2 al 10. La función convertToNum toma uno de estos valores y lo convierte en un número, de modo que puedas compararlos y determinar cuál carta es "más fuerte".
*/


