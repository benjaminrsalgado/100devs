//Write your pseduo code first! 
//0 - 32
document.querySelector('#yell').addEventListener('click', convert)


function convert() {
    


    //Need the value that is in selseyus
    let temp = document.querySelector('#sel').value
   //Need to convert it, from selseyus to farrinheight 
    temp = temp * 9/5 + 32 
   // show it 
    document.querySelector('#placeToYell').innerText = temp 

}
