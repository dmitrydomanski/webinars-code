// var animal = {}
// animal.name = 'leo'
// animal.energy = 25
// animal.eat = function(amount) {
//     console.log(`${this.name} is eating`);
//     this.energy += amount
// }
// animal.play = function(lenght) {
//     console.log(`${this.name} is playing`);
//     this.energy -= lenght
// }

const animalMethods = {
eat: function(amount) {
        console.log(`${this.name} is eating`);
        this.energy += amount
    },
play: function(lenght) {
        console.log(`${this.name} is playing`);
        this.energy -= lenght
},
sleep: function(time) {
    console.log(`${this.name} is sleeping`)
    this.energy += time
}
}

function Animal(name, energy){
   let animal = Object.create(animalMethods)
    this.name = name;
    this.energy = energy;
    return animal;
}

Animal.prototype.eat = function(amount) {
    console.log(`${this.name} is eating`);
    this.energy += amount
}

Animal.prototype.sleep = function(time) {
    console.log(`${this.name} is sleeping`)
    this.energy += time
}

Animal.prototype.play = function(lenght) {
    console.log(`${this.name} is playing`);
    this.energy -= lenght
}

// class Animal {
//     constructor(name, energy) {
//         this.name = name;
//         this.energy = energy;

//     this.eat = function(amount) {
//         console.log(`${this.name} is eating`);
//         this.energy += amount
//     }

// this.play = function(lenght) {
//         console.log(`${this.name} is playing`);
//         this.energy -= lenght
// }

// this.rest = function(time) {
//     console.log(`${this.name} is sleeping`)
//     this.energy += time
// }
// }
// }