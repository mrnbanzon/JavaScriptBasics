var Pet = function(name) {
  var obj = {};

  obj.name = name;
  obj.type = 'animal';

  obj.setType = function(type) {
    obj.type = type;
  };
  return obj;
};

/* TEST */
var pet = Pet('Jack');
pet.setType('dog');
console.log(pet);
