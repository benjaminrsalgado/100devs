// *Variables*
// Create a variable and console log the value
let num = 10
console.log(num);
// Create a variable, add 10 to it, and alert the value
let secondNum= 20 
secondNum = secondNum + 10;
alert(secondNum);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtract (num1, num2, num3, num4){
    alert (num1 - num2 - num3 - num4)
}
// Create a function that divides one number by another and returns the remainder ESTUDIARLO 
function divides (number1, number2){
    return number1 % number2
}
console.log ( getTheRemainder(12, 4))
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function add (num1, num2){
    if (num1 + num2 > 50){
        alert ("Jumanji")
    }
}
add (4, 6)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplys (num1, num2, num3){
    let product= num1 * num2 * num3
    if (product % 3 ===0){
        alert ('Zebra')
    }
}
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function wordAndNumber (word, number){
    for (let i = 0; i < number; i++){
        console.log(word)
    }
}