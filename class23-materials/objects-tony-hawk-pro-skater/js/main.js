//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods
function MakeTony (color, size, name, sex){
    this.aspect = color
    this.tallest = size
    this.howis = name
    this.is=sex
}
this.said = function (){
    alert("this is the figther of the year")
}

this.place = function (){
    alert("this event will take in las vegas")
}

this.president = function (){
    alert("the president will be Trump")
}

let benja = new MakeTony("brown", 1.19, "max", "male")