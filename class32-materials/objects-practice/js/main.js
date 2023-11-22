// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 


class Parent{
    constructor(name, role){
        this._name = name // el _ indica que esa propiedad no debería ser accedida o modificada directamente desde fuera de la clase.
        this._role = role
    }
    get name(){
        return this._name
    }
    get role(){
        return this._role
    }
    speck(){
        console.log(`hi ${this._name} nice to meet you`)
    }
}
    class Child extends Parent{
        constructor(name, role, tech){
            super(name, role)
            this._tech = tech
        }
        get tech(){
            return this._tech 
        }
    
        sayHello(){
        console.log("helo helllooooo")
        }
}

class Software extends Parent{
    constructor(name, role, tech){
        super(name, role)
        this._tech = tech
    }
    get tech(){
        return this._tech 
    }

    sayHello(){
    console.log("helo helllooooo")
    }
}

let person1 = new Parent("kelcey", "futbollplayer", "none")
let person2 = new Child("Taylor", "Singer", "audiovisual")


















// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }
// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// let bob = new Contractor('Bob','Front-end')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')

// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
//}
