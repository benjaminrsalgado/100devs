// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let fav = "Hallowen"
fav = fav.toLowerCase()
console.log(fav)
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let assi = "benjamin"
let lastthree = assi.slice(-3)
alert(lastthree)
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function takes (a, b, c, d, e){
    let result = 100 - a - b -c -d -e
    alert(Math.abs(result))
}
takes (4,5,6,8,9)

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function numbers (a,b,c){
    let arr = [a, b, c]
    let lowest = Math.min.apply(null, arr);
    let highest = Math.max.apply(null, arr);
    console.log(lowest, highest)
}
numbers(3,4,6)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function heads (){
    let random = Math.random()
    if (random <= .5){
        console.log("heads")
    }else if (random > .5){
        console.log("tails")
    }
}
heads()

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function bob (c){
    for(let i = 0; i< c; i ++){
        console.log(heads())
    }
}
bob(10)
