//Get a dog photo from the dog.ceo api and place the photo in the DOM
// Hacer una solicitud GET a una API
fetch('https://images.dog.ceo/breeds/corgi-cardigan/n02113186_8932.jpg')
    .then(response => response.json())
    .then (data => {
        console.log(data.message)
        document.querySelector('img').src
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

