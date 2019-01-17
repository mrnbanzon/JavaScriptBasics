var Pet = function(name) {
  var obj = Object.create(Pet.prototype);
  obj.name = name;
  obj.type = 'animal';

  return obj;
};

Pet.prototype.setType = function(type) {
  this.type = type;
};

/* TEST */
var pet = Pet('Jack');
pet.setType('dog');
console.log(pet);
