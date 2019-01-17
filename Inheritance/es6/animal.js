class Animal {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.type = 'animal';
    this.color = 'none';
  }

  setType(type) {
    this.type = type;
  }
}

module.exports = Animal;
