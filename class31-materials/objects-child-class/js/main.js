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


// this is another class

class Animal (name){
    constructor(name){
    this._name = name 
    }
    get name(){
        return this._name
    }
    speak(){
        console.log(`${this._name} makes a sound`)
    }
    class dog extends Animal{
        constructor(name, breed){
            super(name)
            this._breed = breed
        }
        get breed(){
            return tis._breed
        }
        speak(){
        super.speak()
        console.log(`${this.name} barks`)
        }
    }
}

class  Cat extends Animals{
    constructor(name, breed){
        super(name)
        this._breed = breed
    }
    get breed(){
        return this._breed
    }
    speak(){
        super.speak()
        console.log(`${this.name} meows`)
    }
}