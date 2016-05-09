var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  // Will inherit color property from Bee
  // Will inherit food property from Grub
  // Will inherit eat method from Grub prototype
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Grub.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
};

