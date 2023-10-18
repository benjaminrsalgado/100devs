//Get a dog photo from the dog.ceo api and place the photo in the DOM
fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
    console.log(data.message)
    document.querySelector('img').src = data.message 
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

     // data.message: el message viene ya que el object (se ve en la consola) tiene dos propiedades message y status, el de message tiene el url de la imagen. Entonces regresa como objeto, asi que lo tratamos como objeto. es por eso que se pone data.message
     // se esta agarrando el img de html 