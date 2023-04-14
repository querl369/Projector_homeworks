/*
	Напишіть функцію яка буде буде приймати 3 параметри
	- початкову дату (string)
	- кінцеву дату (string)
	- розмірність ('days', 'hours', 'minutes', seconds)
	Функція повертатиме часовий період між цими датами згідно розмірності.
	Також вкажіть значення по замовчуванню для всіх цих параметрів (на ваш вибір).
	Функція має коректно працювати навіть якщо початкова дата пізніше ніж кінцева дата.

	durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds') // поверне '86400 seconds'
	durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days') // поверне '362 days'
*/

function durationBetweenDates(startDate = new Date(), endDate = new Date(), dimension = 'seconds') {
  const timeDifference = Math.abs(new Date(startDate) - new Date(endDate));
  let result;

  switch (dimension) {
    case 'years':
      result = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
      break;
    case 'days':
      result = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      break;
    case 'hours':
      result = Math.floor(timeDifference / (1000 * 60 * 60));
      break;
    case 'minutes':
      result = Math.floor(timeDifference / (1000 * 60));
      break;
    default:
      result = timeDifference / 1000;
      break;
  }

  return `${result} ${dimension}`; // decided to add year, period in years could be calculated (without a leap year)
}

/*
	Задача про перетворення об'єкту
	Допустимо у вас є об'єкт, у якому кожен ключ - це назва товару (одинм словом), а значення - його ціна.
	Напишіть функцію яка буде всі ключі переводити у нижній регістр, а всі ціни буде заокруглювати до двох знаків після коми.

	Приклад:
	// приклад об'єкту
	 const priceData = {
	Apples: '23.4',
	BANANAS: '48',
	oRAngGEs: '48.7584',
	 };
	function optimizer(data) {
	// тут ваш код
	};
	let updatedPriceData = optimizer(priceData);
	console.log(updatedPriceData)    // {apples: '23.40', bananas: '48.00', oranges: '48.76'}
*/

function updatedPriceData(priceData) {
	const newObj = {};
	for (let key in priceData) {
		newObj[key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()] = parseFloat(priceData[`${key}`]).toFixed(2);
	}
	return newObj; // decided to make key name more prettier by capitalize first letter
}

/* 
	Задача про рекурсію та ітерацію
	Напишіть: - функцію яка рекурсивно буде знаходити суму всіх непарних додатніх чисел до якогось числа.
	Приклад:function recursiveOddSumTo(number) {
	// тут ваш код
	};
	console.log(recursiveOddSumTo(1)) // 1
	console.log(recursiveOddSumTo(10)) // 25
	- функцію яка ітеративно (в циклі) буде знаходити суму всіх непарних додатніх чисел до якогось числа.
	function iterativeOddSumTo(number) {

	// тут ваш код

	};

	console.log(iterativeOddSumTo(1)) // 1
	console.log(iterativeOddSumTo(10)) // 25
*/

function iterativeOddSumTo(iterateNumber) {
	let evenNumbersCounter = 0;
	for (let i = 0; i <= iterateNumber; i++) {
		if (i % 2 !== 0) {
			evenNumbersCounter += i;
		}
	}
	return evenNumbersCounter;
}

// OR

function iterativeOddSumTo(iterateNumber) {
	let evenNumbersCounter = 0;
	for (let i = 1; i <= iterateNumber; i += 2) {
		evenNumbersCounter += i;
	}
	return evenNumbersCounter;
}

// Recursion

function recursiveOddSumTo(iterateNumber) {
  if (iterateNumber < 1) {
    return 0;
  }
  if (iterateNumber % 2 !== 0) {
    return iterateNumber + recursiveOddSumTo(iterateNumber - 2);
  } else {
    return recursiveOddSumTo(iterateNumber - 1);
  }
}