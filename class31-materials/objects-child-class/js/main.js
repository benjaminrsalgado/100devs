//Create an a class and extend it - Can be anything you would like it to be! 

class Animal{
    constructor(name){
        this.name = name
    }
    speak(){
        console.log(`${this.name} makes a sound`)
    }
}
class Dog extends Animal{
    constructor(name,breed){
        super(name)
        this.breed = breed
    } 
}

class Cat extends Animal{
    constructor(name, breed){
        super(name) //Aqui se accede name a la clase primera que es Animal 
        this.breed = breed
    }
    speak(){
        console.log('MEOOOWW')
    }
}

let simba = new Dog('Simba', 'Sheperd')
let hola = new Cat('taylor', 'fenix')
