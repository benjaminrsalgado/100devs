//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)


function getDrink(){
    let drink = document.querySelector('input').value
    const encodedIngredient = encodeURIComponent(drink);

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodedIngredient}`)

    .then(res => res.json()) // parse response as JSON
    .then(data => {
    console.log(data.drinks[0])
    document.querySelector('h2').innerText = data.drinks[0].strDrink
    document.querySelector('img').src = data.drinks[0].strDrinkThumb
    document.querySelector('h3').innerText = data.drinks[0].strInstructions
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

// el template literal ${drink} cualquier cosa de drink vayan a poner en el input pues buscara la imagen de ese drink por eso esta a lado del link el template literal o sea el URL va a buscar el drink que es usuario ponga el que sea por eso el template literal

