class Pet {
  constructor(name) {
    this.name = name;
    this.type = 'animal';
  }

  setType(type) {
    this.type = type;
  }
}

/* TEST */
var pet = new Pet('Jack');
pet.setType('dog');
console.log(pet);
