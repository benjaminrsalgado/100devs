document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here

  if (day === "Tuesday" || day === "Thursday"){
  alert('class day!')
  }else if(day === "tuesday" || day === "thursday") {
  alert ('class day!')
  }else if(day === "Saturday" || day === "Sunday") {
  alert ('Weekend')
  }else if(day === "saturday" || day === "sunday") {
  alert ('Weekend')
  }else{
  alert('BORING')
  }
}
