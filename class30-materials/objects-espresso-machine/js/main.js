//Create an espresso machine class that makes machines with 4 properties and 3 methods
class Machine {
    constructor(machineMake, machineModel, machineColor, machineSize) {
        this.make = machineMake;
        this.model = machineModel;
        this.color = machineColor;
        this.size = machineSize;
    }

    first() {
        alert('¡Hola mundo!');
    }

    lock() {
        alert(`Este es el mejor ${this.model} en el mundo`);
    }
}

let firstOne = new Machine('muchas', 'super45', 'negro', '2.15cm');
