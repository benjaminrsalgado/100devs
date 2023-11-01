//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
        .then(data => {
        console.log(data.subclasses)

        data.subclasses.forEach(element => {
            console.log(element.name)//element puede ser llamada como sea
            //create an li
            const li = document.createElement('li') //se crea un nuevo elemento li 
            //add text in li
            li.textContent = element.name //put the name of the subclass in the li 
            //apend the li to the ul
            document.querySelector('ul').appendChild(li) // everything que salga en li se va a poner en la ul 
        })  
      })
       .catch(err => {
          console.log(`error ${err}`)
      });
}

