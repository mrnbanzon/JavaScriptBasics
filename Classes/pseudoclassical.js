var Pet = function(name) {
  this.name = name;
  this.type = 'animal';
};

Pet.prototype.setType = function(type) {
  this.type = type;
};

/* TEST */
var pet = new Pet('Jack');
pet.setType('dog');
console.log(pet);
