//--- Easy
//create a variable and assign it a number
let number = 10;
//minus 10 from that number
let minus = number - 10;
//print that number to the console
console.log(minus)
//--- Medium
//create a variable that holds a value from the input
let numFromInput = Number (document.querySelector('input').value) //El Number va a convertir lo del input a number
//add 25 to that number
numFromInput += 25
//alert that number
alert(numFromInput)
//--- Hard
//create a variable that holds the h1
const h1 = document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous variables
h1.addEventListener('click',addTwo)
function addTwo(){
    console.log(num + numFromInput)
}