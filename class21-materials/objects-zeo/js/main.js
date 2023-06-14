//Create a stopwatch object that has four properties and three methods
let stopwatch = {
    color: "black";
    brand: "rolex";
    minus: "fourth";
    opacity: 60%;
}

stopwatch.mi = function (time){
    console.log(time)
}
stopwatch.juanito = function (alarm){
    console.log(alarm)
}
stopwatch.movements = function (bloodPressure){
    console.log(bloodPressure)
}

stopwatch.mi(1,2,3,4,5,6,7,8)
stopwatch.juanito("10:20")
stopwatch.movements("low-Pressure")