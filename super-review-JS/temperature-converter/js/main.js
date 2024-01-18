//Write your pseduo code first! 
// c to f
document.querySelector('h1').addEventListener('click'.convert)
function convert (){
    //need the value in celcius
let temp = Number ( document.querySelector('input').value)
//convert celisus to farenheit
temp = temp * 1.8 + 32
//show the value
document.querySelector('h2').innerText = temp
}
