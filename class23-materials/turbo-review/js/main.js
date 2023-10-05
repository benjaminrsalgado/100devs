// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let ben = 'hello world?'
alert(ben.endsWith('?'))
//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let str = ' I am looking for jr.dev position.'
console.log( str.replaceAll('jr.dev', 'software engineer'))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function game(){
    let random = Math.random()
    if (random < .33){
        return 'rock'
    }else if (random < .66){
        return 'paper'
    }else{
        return 'scissors'
    }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function takes (playerChoice){
    let botChoice = game()
    if ((playerChoice === 'rock' && botChoice === 'scissors') || 
    (playerChoice === 'scissors' && botChoice === 'paper') || 
    (playerChoice === 'paper' && botChoice === 'rock'))
    console.log('Winner!!')
    
}else if (playerChoice === botChoice){
    console.log('TIIIIIEEEED')
}else{
    console.log('YOU LOSE!!!')
}

takes('paper')

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
