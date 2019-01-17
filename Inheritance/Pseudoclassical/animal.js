var Animal = function() {
  this.age = 0;
  this.type = 'animal';
  this.color = 'none';
};

Animal.prototype.setType = function(type) {
  this.type = type;
};

module.exports = Animal;
