// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let fav = 'benja'
fav = 'pizza'

alert (fav)
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let cadena = "Hola, World";
let segundoCaracter = cadena.charAt(1);
alert(segundoCaracter);


// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

function rakes (a, b, c){
    let folk = a / b * c
}
alert (folk)
rakes(12, 13, 14)


// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function tay (a){
    let raiz = Math.cbrt(a).toFixed(2) 
}
console.log(raiz)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function love (month){
    if ( month === 'summer'){
        alert ("YAY")
    }else{
        alert ("Booo")
    }
}


//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function skip (n){
    for (let i = 1; 1 <= n; i ++){
        if(i % 5 !== 0){
            console.log(i)
        }
    }
}