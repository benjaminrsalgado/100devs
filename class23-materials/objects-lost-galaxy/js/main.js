//Create a dog object that has four properties and three methods
let dog = {}

dog.size = 12.5
dog.color = "black"
dog.age = 10
dog.name = "frank"

dog.said = function (talk){
    console.log(`i need to eat ${talk}`)
}

dog.play = function (){
    console.log (" need to walk")
}

dog.couple = function (){
    console.log(" i need a boyfriend")
}