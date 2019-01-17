const Animal = require('./animal.js');

class Pet extends Animal {
  constructor(name) {
    super(name);
    this.age = 1;
    this.color = 'brown';
  }

  addAge() {
    this.age += 1;
  }
}

/* TEST */
let pet = new Pet('Jack');
pet.setType('dog');
pet.addAge();
console.log(pet);
