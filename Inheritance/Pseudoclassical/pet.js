const Animal = require('./animal.js');

var Pet = function() {
  Animal.call(this);
  this.age = 1;
  this.color = 'brown';
};

Pet.prototype = Object.create(Animal.prototype);
Pet.prototype.constructor = Pet;

/* TEST */
let pet = new Pet();
pet.setType('dog');
console.log(pet);
