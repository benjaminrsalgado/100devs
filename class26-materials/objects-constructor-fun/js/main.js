//Create a constructor with 4 properties and 3 methods
function Pizzamachine(source, size, color, taste) {
    this.source = source;
    this.size = size;
    this.color = color;
    this.taste = taste;

    this.eat = function () {
        console.log("ljfljdsfjlñdsjfl")
    }
    this.go = function () {
        console.log("I want a pizza " + this.size)
    }
    this.went = function () {
        console.log("jfdsjfsl")
    }
}

let pizza1 = new Pizzamachine("chocolate", "25cm", "green", "strawberry")

// New syntaxis of function construction

class MakeCar{
    constructor(carMake,carModel,carColor,numOfDoors){
      this.make = carMake
      this.model = carModel
      this.color = carColor
      this.doors = numOfDoors
    }
    honk(){
      alert('BEEP BEEP FUCKER')
    }
    lock(){
      alert(`Locked ${this.doors} doors!`)
    }
  }
  
  let hondaCivic = new MakeCar('Honda','Civic','Silver', 4)
  
  let teslaRoadster = new MakeCar('Tesla','Roadster', 'Red', 2)