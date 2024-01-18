// *Variables*
// Create a variable and console log the value
let normal = 20 
console.log(normal)
// Create a variable, add 10 to it, and alert the value
normal = normal + 10
alert(normal)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtracts(num1, num2, num3, num4){
alert(num1 - num2 - num3 - num4)
}
// Create a function that divides one number by another and returns the remainder
function divides(num1, num2){
    let divide = num1 % num2 //tambien se puede hacer solo asi return num1 % num2 y yaa
    return divide
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function adds(num1, num2) {
    let sum = num1 + num2;
    if (sum > 50) {
        alert('Jumanji');
    }
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplys(num1, num2, num3){
 let product = num1 * num2 * num3
    if( product % 3 === 0){
        alert("zebra")
    }
}
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function times ( word, num){
    for(let i = 1; i<=num; i++){
        console.log(word)
    }
}
