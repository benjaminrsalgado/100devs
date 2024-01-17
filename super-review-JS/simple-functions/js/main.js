//---Easy
//create a function that subtracts two numbers and alerts the difference
function substarct (num1, num2){
let difference = num1 - num2
alert(difference)
}
substarct(20, 30)
//create a function that divides three numbers and console logs the quotient
function divide (num1, num2, num3){
let divide = num1 / num2 / num3
console.log(divide)
}
divide(20,40,70)
//create a function that multiplys three numbers and returns the product
function multiply(num1, num2, num3, num4){
    let unicorn = num1 * num2 * num3 * num4 
    return unicorn
}
multiply(80, 90, 100, 30)
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function medium (num1,num2, num3){
    return (num1 + num2) % num3 
}
const medium = (a, b, c) => (a + b)%c
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function around (n1, n2, n3, n4){
let prod = n1 * n2
if (prod > 100){
    console.log(prod + n3 + n4)
}else if (product < 100){
    console.log(prod - n3 - n4)
}else{
    alert ((n1*n2*n3) % n4)
}
}
around (10,20,30,40)