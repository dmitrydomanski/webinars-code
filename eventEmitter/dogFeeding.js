const EventEmitter = require('events').EventEmitter;
const myDogEvents = new EventEmitter;

class Food {
    constructor(name) {
        this.name = name;
        myDogEvents.on('dogEats', this.eatIt)
    }

    eatIt(){
        console.log('eating');
        return `${this.name} is beaing eaten`
    }
}

const meat = new Food('meat');

class Dog {
    eat(){
        // meat.eatIt();
        console.log('start eating');
        myDogEvents.emit('dogEats');
    }
}

const dog = new Dog();

console.log(dog.eat());

