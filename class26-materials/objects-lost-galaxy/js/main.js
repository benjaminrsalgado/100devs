//Create a dog object that has four properties and three methods

// Function construction
function Dog (name, age, breed, color) {
this. name = name;
this. age = age;
this. breed = breed;
this. color = color;
this. bark = function() {
    console.log(this.name + " barks");
}
this . eat = function() {
    console.log(this.name + " eats");
}
this . sleep = function() {
    console.log(this.name + " sleeps");
}
}

let dog1 = new Dog("Buddy", 2, "Labrador", "Black");
let dog2 = new Dog("tay", 5, "Labrador", "White");

// Literal notation 

let pizza = {}

pizza.size = "large";
pizza.topping = "pepperoni";
pizaa.price = 10.99;

pizza.size = function() {
    console.log("The size of the pizza is " + this.size);
}
pizza.location = function() {
    console.log("The location of the pizza is " + this.location);
}