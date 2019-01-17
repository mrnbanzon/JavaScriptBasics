var Pet = function(name) {
  var obj = {};

  obj.name = name;
  obj.type = 'animal';

  obj.setType = petMethods.setType;

  return obj;
};

var petMethods = {};
petMethods.setType = function(type) {
  this.type = type;
};

/* TEST */
var pet = Pet('Jack');
pet.setType('dog');
console.log(pet);
