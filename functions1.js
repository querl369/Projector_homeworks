/* 
	1. Напишіть функцію addThemAll яка буде знаходити сумму усіх своїх аргументів 
	незалежно від їх кількості (але без використання вбутованого об'єкту Math). 
	Використайте оператор розширення:
*/

function checkIsNumberValid(number) {
	const isNumber = typeof number === 'number';
	const isString = typeof number === 'string';
	const parsedValue = parseFloat(number);
	const isNumberValid = !isNaN(parsedValue);

	return (isNumber || isString) && isNumberValid;
}

function addThemAll(...values) {
	if (values.length === 0) {
		return 0;
	}

	const sumValues = values.reduce((acc, value) => {
		if (!checkIsNumberValid(value)) {
			return acc;
		}
		return acc + parseFloat(value);
	}, 0);

	return sumValues;
}


// OR

function addThemAll1(...values) {
	if (values.length === 0) {
		return 0;
	}

	let sumValues = 0;

	for (let i = 0; i < values.length; i++) {
		if (!checkIsNumberValid(values[i])) {
			continue;
		}

		sumValues += parseFloat(values[i]);
	}

	return sumValues;
}

// OR

function addThemAll2(...values) {
	if (values.length === 0) {
		return 0;
	}

	let sumValues = 0;

	for (let value of values) {
		if (!checkIsNumberValid(value)) {
			continue;
		}

		sumValues += parseFloat(value);
	}

	return sumValues;
}


console.log(addThemAll(2,4)); *// 6*
console.log(addThemAll(1,2,3,4)); *// 10*
console.log(addThemAll(5,5,10)); *// 20*


/*
	2. Задача на використання замикання. Напишіть функцію яка працює таким чином: multiply(a)(b)// a * b
*/

function multiply(a) {
	if (!checkIsNumberValid(a)) {
		return 'The value is not a number';
	}

	return function(b) {
		if (!checkIsNumberValid(b)) {
			return 'The value is not a number';
		}

		return a * b; 
	}
}

console.log(multiply(5)(5))		*// 25*
console.log(multiply(2)(-2))	*// -4*
console.log(multiply(4)(3))		*// 12*

/*
	3.Напишіть функцію яка буде використовуватись для сортування масиву фільмів. Функція буде приймати два аргумента:
		властивість за якою треба посортувати
		опцію напрямку сортування, зростання чи спадання

*/

const movies = [
{
movieName: 'The Thing',
releaseYear: 1982,
directedBy: 'Carpenter',
runningTimeInMinutes: 109,
},
{
movieName: 'Aliens',
releaseYear: 1986,
directedBy: 'Cameron',
runningTimeInMinutes: 137,
},
{
movieName: 'Men in Black',
releaseYear: 1997,
directedBy: 'Sonnenfeld',
runningTimeInMinutes: 98,
},
{
movieName: 'Predator',
releaseYear: 1987,
directedBy: 'McTiernan',
runningTimeInMinutes: 107,
},
];


function byProperty(property, direction = '>') {
	return function(firstElement, secondElement) {
    const firstValue = firstElement[property];
    const secondValue = secondElement[property];
    const result = firstValue < secondValue ? -1 : firstValue > secondValue ? 1 : 0;
    
    if (direction === '<') {

      return -result;
    }

    return result;
  }
}

//OR

const SORT_ORDER_PROPERTIES = {
      ASC: '>',
      DESC: '<'
}

const SORT_ORDER = {
   [SORT_ORDER_PROPERTIES.ASC]: 1,
   [SORT_ORDER_PROPERTIES.DESC]: -1,
}

const SORT_BY_PROPERTIES = {
   NAME: 'NAME',
   DURATION: 'DURATION',
   DIRECTOR: 'DIRECTOR',
   RELEASE: 'RELEASE',
}

const SORT_BY = {
   [SORT_BY_PROPERTIES.NAME]: 'movieName',
   [SORT_BY_PROPERTIES.DURATION]: 'runningTimeInMinutes',
   [SORT_BY_PROPERTIES.DIRECTOR]: 'directedBy',
   [SORT_BY_PROPERTIES.RELEASE]: 'releaseYear',
}

function byProperty(property = SORT_BY_PROPERTIES.NAME, direction = SORT_ORDER_PROPERTIES.ASC) {
   const list = movies.slice();
   const sortOrder = SORT_ORDER[direction];
   const key = SORT_BY[property];
  
   list.sort((a, b) => {
      return (a[key] > b[key]) ? sortOrder : -1 * sortOrder;
   });

   return list;
}




console.log(movies.sort(byProperty('releaseYear', '>'))); // виведе масив фільмів посортованих по року випуску, від старішого до новішого*
console.log(movies.sort(byProperty('runningTimeInMinutes', '<'))); // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого*
console.log(movies.sort(byProperty('movieName', '>'))); // виведе масив фільмів посортованих по назві, в алфавітному порядку*
