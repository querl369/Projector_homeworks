// Створення класу-предка
class LivingBeing {
  constructor(name) {
    this.name = name;
  }

  move() {
    console.log(`${this.name} is moving.`);
  }
}

// Наслідування класів від класу-предка
class Dog extends LivingBeing {
  #isPlayful;
  constructor(name, breed, age, playful) {
    super(name);
    this.breed = breed;
    this.age = age;
    this.#isPlayful = playful;
  }

  bark() {
    console.log('Woof woof!');
  }

  wagTail() {
    console.log(`${this.name} is wagging its tail.`);
  }

  get isPlayful() {
    console.log(this.#isPlayful);
    return this.#isPlayful;
  }
}

// Наслідування класів від класу-предка
class Cat extends LivingBeing {
  #isHungry;
  constructor(name, breed, color, hungry) {
    super(name);
    this.breed = breed;
    this.color = color;
    this.#isHungry = hungry;

  }

  meow() {
    console.log('Meow meow!');
  }

  scratch() {
    console.log(`${this.name} is scratching.`);
  }

  get isHungry() {
    console.log(this.#isHungry);
    return this.#isHungry;
  }
}

// Створення спільного предка та методу
class Pet extends LivingBeing {
  constructor(name, owner) {
    super(name);
    this.owner = owner;
  }

  play() {
    console.log(`${this.name} is playing with its owner.`);
  }
}

// Спадкування від класу Pet
class Parrot extends Pet {
  constructor(name, owner, voice) {
    super(name, owner);
    this.voice = voice;
  }

  talk() {
    console.log(`${this.name} is talking to owner ${this.owner} with ${this.voice}.`);
  }

  fly() {
    console.log(`${this.name} is flying.`);
  }
}

// Спадкування від класу Pet
class Hamster extends Pet {
  constructor(name, owner, speed) {
    super(name, owner);
    this.speed = speed;
  }

  run() {
    console.log(`${this.name} is running in its wheel.`);
  }

  hide() {
    console.log(`${this.name} is hiding in its house.`);
  }
}


// Використання створених класів
const dog = new Dog('Rex', 'German Shepherd', 3, false);
dog.move();
dog.bark();
dog.wagTail();
dog.isPlayful;

const cat = new Cat('Lucy', 'Persian', 'White', true);
cat.move();
cat.meow();
cat.scratch();
cat.isHungry;

const parrot = new Parrot('Polly', 'John', 'John Malkovich');
parrot.move();
parrot.talk();
parrot.fly();
parrot.play();

const hamster = new Hamster('Buddy', 'Lisa', 'Standart');
hamster.move();
hamster.run();
hamster.hide();
hamster.play();
