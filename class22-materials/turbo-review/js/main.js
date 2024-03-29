// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let fav = " margarita "
fav = fav.trim()
console.log(fav)

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let str = "hello world, how is this apple"
console.log( str.search('apple'))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function play(rock, paper, scissors) {
    // La función se llama "play" y acepta tres argumentos: rock, paper y scissors.
    
    let game = Math.random(); 
    // Genera un número aleatorio entre 0 y 1 y lo guarda en la variable "game".
    
    if (game < 0.33) {
        // Si el número aleatorio es menor que 0.33 (aproximadamente un tercio), ejecuta lo siguiente:
        console.log('rock'); 
        // Muestra en la consola el mensaje 'rock' (piedra).
    } else if (game < 0.66) {
        // Si el número aleatorio es mayor o igual a 0.33 pero menor que 0.66, ejecuta lo siguiente:
        console.log('paper');
        // Muestra en la consola el mensaje 'paper' (papel).
    } else {
        // Si el número aleatorio es mayor o igual a 0.66, ejecuta lo siguiente:
        console.log('scissors');
        // Muestra en la consola el mensaje 'scissors' (tijeras).
    }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function takes (choice){
let botchoice = play()
if( choice === 'rock' && botchoice === 'scissors' ){
console.log()
}
}
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playGame (arr){
    arr.forEach(choice => checkWin(choice))
}
playGame (['rock', 'paper', 'souces'])