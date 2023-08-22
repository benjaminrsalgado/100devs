document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here

if ( day === "Monday" ||  day === "Tuesday"){
  alert("surprise")
}else if (day ==="Wendsday" || day === "Thuersday"){
  alert("u can do it")
}else if (day ==="Friday" ||day === "Saturday"){
  alert("go, go" )
}else{
  ("so boring")
}

}