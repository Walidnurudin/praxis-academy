// EXTENDING A CLASS

// ES5
function Hero(name, level) {
    this.name = name;
    this.level = level;
}

// Adding a method to the constructor
Hero.prototype.greet = function() {
    return `${this.name} says hello.`;
}

// Creating a new constructor from the parent
function Mage(name, level, spell) {
    // Chain constructor with call
    Hero.call(this, name, level);

    this.spell = spell;
}

let a = new Mage("walid", 10, "star");
console.log(a.name) // walid



// ES6
// Initializing a class
class Hero {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    // Adding a method to the constructor
    greet() {
        return `${this.name} says hello.`;
    }
}

// Creating a new class from the parent
class Mage extends Hero {
    constructor(name, level, spell) {
        // Chain constructor with super
        super(name, level);

        // Add a new property
        this.spell = spell;
    }
}

let z = new Mage("walid", 14, "earth");
console.log(z.greet()); // "walid says hello."


// ES5 => ES6
//  extend functional classes
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    console.log(this.name, 'speaks.');
}

class Dog extends Animal {
    speak() {
        console.log(this.name, 'barks.');
    }
}

let spot = new Dog('Spot');
spot.speak(); // Spot barks.

spot = new Animal('Spot');
spot.speak(); // Spot speaks.