/*
  1.Напишіть функцію detonatorTimer(delay), яка виводить в консоль число кожну секунду, починаючи з delay (ціле число) і в кінці замість 0 виведе 'BOOM!'. Напишіть її двома варіантами:

  - Використовуючи setInterval
  - Використовуючи вкладений setTimeout

  detonatorTimer(3);
// 3
// 2
// 1
// BOOM!*

detonatorTimer(delay) {
// тут ваш код*  
}

*/

function checkIsNumberValid(number) {
  const isNumber = typeof number === 'number';
  const isString = typeof number === 'string';
  const parsedValue = parseFloat(number);
  const isNumberValid = !isNaN(parsedValue);

  return (isNumber || isString) && isNumberValid;
}


function detonatorTimer(delay) {
  if (!checkIsNumberValid(delay)) {
    return "Invalid delay value";
  }
  let counter = delay;
  const intervalId = setInterval(() => {
    if (counter > 0){
        console.log(counter);
    }
    counter--;
    if (counter < 0) {
      console.log("BOOM!");
      clearInterval(intervalId);
    }
  }, 1000);
}


function detonatorTimer1(delay) {
  if (!checkIsNumberValid(delay)) {
    return "Invalid delay value";
  }
  let counter = delay;
  function detonate() {
    if (counter > 0){
        console.log(counter);
    }
    counter--;
    if (counter < 0) {
      console.log("BOOM!");
    } else {
      setTimeout(detonate, 1000);
    }
  }
  setTimeout(detonate, 1000);
}


/* 
  2. Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи (2-3 штуки) що ці властивості виводять. 
  Наприклад:

  let me = {
    name: 'Mykola',
    residency: 'Lviv',
    gender: 'male',
    age: 31,
    hobby: 'crafting',
    defaultMood: 'focused',
    currentMood: 'sleepy',
    introduce() {
    console.log(`My name is ${this.name} and I live in ${this.residency}`);
    },
    prognose() {
    console.log(`I hope that next year I'm gonna be ${this.age+1}`);
    },
    describeMyMood(){
    console.log(`Mostly I'm ${this.defaultMood}, but now I'm ${this.currentMood}`);
    }
    }

    me.introduce();
    me.prognose();
    me.describeMyMood();
  }
*/

const motorcycle = {
  engineCapacity: 650,
  fullTankCapacityLitres: 23,
  averageConsumption: 4.5,
  horsePowers: 67,
  manufacturer: 'Suzuki',
  model: 'DL650',
  yearOfManufacture: 2008,
  startEngine() {
    console.log('WHROOM! WHROOM!');
  },
  fullTankMaxDistance() {
    let maxDistance = (this.fullTankCapacityLitres / this.averageConsumption).toFixed(0) * 100;
    console.log(`Max distance with one full tank is: ${maxDistance} km`)
  },
  motorcycleAge() {
    const currentYear = new Date().getFullYear();
    const age = currentYear - this.yearOfManufacture;
    console.log(`This motorcycle is ${age} old`);
  }
  
}

/*
  3. А тепер зробіть всі свої методи з задачі 5 прив'язаними до контексту свого об'єкту - 
    аби вони були захищені від перезапису об'єкту і їх можна було викликати в таймері:

    let securedSelfIntroduce = // якийсь код
    let securedSelfPrognose = // якийсь код
    let securedSelfDescribeMyMood = // якийсь код

    setTimeout(securedSelfIntroduce, 1000); // виведе коректний результат
    setTimeout(securedSelfPrognose, 2000); // виведе коректний результат
    setTimeout(securedSelfDescribeMyMood, 3000); // виведе коректний результат
*/

// we can use 'bind()' method here:

let securedStartEngine = motorcycle.startEngine.bind(motorcycle);
let securedFullTankMaxDistance = motorcycle.fullTankMaxDistance.bind(motorcycle);
let securedMotorcycleAge = motorcycle.motorcycleAge.bind(motorcycle);

setTimeout(securedStartEngine, 1000); // виведе коректний результат
setTimeout(securedFullTankMaxDistance, 2000); // виведе коректний результат
setTimeout(securedMotorcycleAge, 3000); // виведе коректний результат


// or we can use 'call()' mathod:

let securedStartEngine = () => motorcycle.startEngine.call(motorcycle);
let securedFullTankMaxDistance = () => motorcycle.fullTankMaxDistance.call(motorcycle);
let securedMotorcycleAge = () => motorcycle.motorcycleAge.call(motorcycle);

setTimeout(securedStartEngine, 1000); // виведе коректний результат
setTimeout(securedFullTankMaxDistance, 2000); // виведе коректний результат
setTimeout(securedMotorcycleAge, 3000); // виведе коректний результат



/*

  4. Напишіть функцію-декоратор яка вопвільнює виконання довільної функції на вказану кількість секунд.

    // тут ваш код для декоратора*
  }

  let slowedSomeFunction = slower(someFunction, 5); // обгортаєте свою довільну функцію 'someFunction' в декоратор*

  slowedSomeFunction(/якісь аргументи/) // викликаєте декоратор

  // виведе в консоль "Chill out, you will get you result in 5 seconds"
  //...через 5 секунд виведе результат роботи 'someFunction*'    

*/

function someFunction(arg1, arg2) {
  console.log(`Something happened with ${arg1} and ${arg2} arguments`);
}

function slower(func, seconds) {
  return function(...args) {
    console.log(`Chill out, you will get your result in ${seconds} seconds`);
    setTimeout(() => {
      func(...args);
    }, seconds * 1000);
  }
}

let slowedSomeFunction = slower(someFunction, 5);

slowedSomeFunction('First', 'Second');
