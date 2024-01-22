//Get a dog photo from the dog.ceo api and place the photo in the DOM
// Hacer una solicitud GET a una API
fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then (data => {
        console.log(data.message)
        document.querySelector('img').src = data.messsage 
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

