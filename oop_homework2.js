// Створення прототипу батьківського обʼєкта
function LivingBeing(name) {
  this.name = name;
}

LivingBeing.prototype.move = function () {
  console.log(`${this.name} is moving.`);
};

// Наслідування прототипу від батьківського обʼєкта
function Dog(name, breed, age) {
  LivingBeing.call(this, name);
  this.breed = breed;
  this.age = age;
}

Dog.prototype = Object.create(LivingBeing.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log('Woof woof!');
};

Dog.prototype.wagTail = function () {
  console.log(`${this.name} is wagging its tail.`);
};

// Наслідування прототипу від батьківського обʼєкта
function Cat(name, breed, color) {
  LivingBeing.call(this, name);
  this.breed = breed;
  this.color = color;
}

Cat.prototype = Object.create(LivingBeing.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.meow = function () {
  console.log('Meow meow!');
};

Cat.prototype.scratch = function () {
  console.log(`${this.name} is scratching.`);
};

function Pet(name, owner) {
  LivingBeing.call(this, name);
  this.owner = owner;
}

Pet.prototype = Object.create(LivingBeing.prototype);
Pet.prototype.constructor = Pet;

Pet.prototype.play = function () {
  console.log(`${this.name} is playing with its owner.`);
};

// Наслідування прототипу від Pet
function Parrot(name, owner, voice) {
  Pet.call(this, name, owner);
  this.voice = voice;
}

Parrot.prototype = Object.create(Pet.prototype);
Parrot.prototype.constructor = Parrot;

Parrot.prototype.talk = function () {
  console.log(`${this.name} is talking to owner ${this.owner} with ${this.voice}.`);
};

Parrot.prototype.fly = function () {
  console.log(`${this.name} is flying.`);
};

// Наслідування прототипу від Pet
function Hamster(name, owner, speed) {
  Pet.call(this, name, owner);
  this.speed = speed;
}

Hamster.prototype = Object.create(Pet.prototype);
Hamster.prototype.constructor = Hamster;

Hamster.prototype.run = function () {
  console.log(`${this.name} is running in its wheel.`);
};

Hamster.prototype.hide = function () {
  console.log(`${this.name} is hiding in its house.`);
};

// Використання створених прототипів
const dog = new Dog('Rex', 'German Shepherd', 3);
dog.move();
dog.bark();
dog.wagTail();

const cat = new Cat('Lucy', 'Persian', 'White');
cat.move();
cat.meow();
cat.scratch();

const parrot = new Parrot('Polly', 'John', 'John Malkovich');
parrot.move();
parrot.talk();
parrot.fly();
parrot.play();

const hamster = new Hamster('Buddy', 'Lisa', 'Standard');
hamster.move();
hamster.run();
hamster.hide();
hamster.play();