//Example fetch using pokemonapi.co

letdeckId = ''

fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      deckId = data.deck_id
    })
    .catch(err => {
      console.log(`error ${err}`)
    });


    

document.querySelector('button').addEventListener('click', drawTwo)

function drawTwo() {
  const url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`
  
  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('#player1').src = data.cards[0].image
      document.querySelector('#player2').src = data.cards[1].image
      let player1Val = converToNum(data.cards[0].value)
      let player2Val = converToNum(data.cards[1].value)
      if(player1Val > player2Val){
        document.querySelector('h3').innerText = 'player 1 Wins'
        }else if (player1Val < player2Val){
          document.querySelector('h3').innerText = 'player 2 Wins'
        }else{
          document.querySelector('h3').innerText = 'TIME FOR WAR!!!'
        }
      
    })
    .catch(err => {
      console.log(`error ${err}`)
    });

    function converToNum (val){
      if(val === 'ACE'){
        return 14
      }else if(val === 'KING'){
        return 13
      }else if(val === 'Queen'){
        return 12
      }else if(val == 'Jack'){
        return 11
      }else{
        return Number(val) //faltaaaa
      }

    }

}


