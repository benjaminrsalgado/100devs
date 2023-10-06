//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr = [1, 2, 3, 4, 5, 6, 7]
    const sum = arr.reduce ((acumulador, numero) => {
        return acumulador + numero;
    }, 0);

alert(sum)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let newArr = nums => nums.map( num => num**2 )


//Create a function that takes string
//Print the reverse of that string to the console
function str (inputString){
    const reversedString = inputString.split('').reverse().join('');
    console.log(str);
}

//no se puede utilizar reverse ya que solo es para arrays y este ejercicio da una string entonce se debe de utilizar split and joing para convertirlo en array la string 



//Create a function that takes in a string
//Alert if the string is a palindrome or not

const palindromeCheck = str => alert(str === str.split('').reverse().join(''));

palindromeCheck('racecar')