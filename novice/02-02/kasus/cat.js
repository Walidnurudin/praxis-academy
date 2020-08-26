class Cat {
    constructor(tiredness, hunger, lonliness, happiness) {
        this.tiredness = tiredness;
        this.hunger = hunger;
        this.lonliness = lonliness;
        this.happiness = happiness;
    }

    feed(val) {
       this.hunger -= val;
      this.happiness += val;
        return `hunger = ${this.hunger}, happiness = ${this.happiness}`;
    }

    sleep(val) {
      this.tiredness -= val;
        this.hunger += val;
        return `tiredness = ${this.tiredness} , hunger = ${this.hunger}`;
    }

    pet(val) {
        this.tiredness += val;
        this.hunger += val;
        this.lonliness -= val;
        this.happiness += val;
        return `tiredness = ${this.tiredness}, hunger = ${this.hunger}, lonliness = ${this.lonliness}, happiness = ${this.happiness}`;
    }
}


let a = new Cat(30, 30, 30, 30);
console.log(a.pet(20)); // "tiredness = 50, hunger = 50, lonliness = 10, happiness = 50"