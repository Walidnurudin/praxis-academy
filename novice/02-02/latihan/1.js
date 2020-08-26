// STATIC
class Vehicle {
    constructor(make, model, color) {
        this.make = make;
        this.model = model;
        this.color = color;
    }

    getName() {
        return this.make + " " + this.model;
    }

    static getColor(v) {
        return v.color;
    }
}

let car = new Vehicle("Honda", "Accord", "Purple");

console.log(Vehicle.getColor(car)); // "purple"


// EXTENDS = mewarisi
class Vehicle {
    constructor(make, model, color) {
        this.make = make;
        this.model = model;
        this.color = color;
    }

    getName() {
        return this.make + " " + this.model + " " + this.color;
    }
}


class Car extends Vehicle {}

let car = new Car("Honda", "Accord", "Purple");

console.log(car.getName()); // "Honda Accord Purple"