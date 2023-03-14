//Write your pseduo code first! 

// only on click
document.querySelector('#yell').addEventListener('click', run)

function run(){
    console.log('Hello World')
    //Get value out of the input 
    let pumpking = document.querySelector('#firstName').value
    //Const fName= document.querySelector('#firstName').value
    pumpking = pumpking *9/5 + 32
    //Convert the value 
    document.querySelector ('PlaceToYell').innerHTML = pumpking
    //show the value to user 
}