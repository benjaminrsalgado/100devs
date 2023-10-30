//Create a button that adds 1 to a botScore stored in localStorage 

if (!localStorage.getItem('botScore')){
    localStorage.setItem('botScore', 0) 
}
console.log(1243)

document.querySelector('button').addEventListener('click', addAnotherOne)

function addAnotherOne() {
    let botScoreVal = Number(localStorage.getItem('botScore'))  //se esta quitando el valor de local storage y se va a guardar en la variable
    botScoreVal += 1 // se esta guardando + 1
    localStorage.setItem('botScore', botScoreVal); // va a mostrar 1 cada vez que le apriete el boton



}
