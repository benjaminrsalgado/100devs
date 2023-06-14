//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let power = ['friends', 'heroes', 'vaseline']
    
    power.forEach(show => console.log( power ))

//Create and array of numbers
let nums = [22, 13, 14, 15, 24, 89, 20]
//Return a new array of numbers that includes every even number from the previous Arrays
let onlyEvens = arr => arr.filter( n => n % 2 === 0)

console.log(onlyEvens (nums))

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function takes  (arr){
    let sorted = arr.sort((a,b) => a-b)
    alert( sorted[1] + sorted[ sorted.length - 2] )
}
takes ([2, 3, 5, 1, 3])