var Bee = function() {
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  // Will inherit food property from Grub
  // Will inhert eat method from Grub prototype
  this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;
