let total = 0

document.querySelector('#pumpkin').addEventListener('click', makeZero)
document.querySelector('#dominosPizza').addEventListener('click', jumanji)
document.querySelector('#zebra').addEventListener('click', add9)
document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)
document.querySelector('#plus').addEventListener('click', added)

function makeZero() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total

}function jumanji(){
  total = 1 
  document.querySelector('#placeToPutResult').innerText = total
}function add9 (){
  total = -5
  document.querySelector('#placeToPutResult').innerText = total
}function sub2 (){
  total = 3
  document.querySelector('#placeToPutResult').innerText = total
}function added (){
  total = -8
  document.querySelector('#placeToPutResult').innerText = total
}