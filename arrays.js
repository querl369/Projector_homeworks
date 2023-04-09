/*
	Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку:
*/

const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials = [];

if (userNames.length > 0 && userNames !== undefined) {
	for (let i = 0; i < userNames.length; i++) {
		let strInitial = '';
		let element = userNames[i].split(' ');
		for (var n = 0; n < element.length; n++) {
			strInitial += element[n][0] + '.';
		}

	initials.push(strInitial);

	}

	initials.sort();
}

console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]

//OR

const userNames2 = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];


const initials1 = userNames2.sort().map(name => {
    return name.split(" ").map(part => part[0]).join('.') + '.';
})

console.log(initials1); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]

/* 
	Задача на розворот числа:
*/

const currentMaxValue = 4589;
let reverseMaxValue;

function isInt(n){
    return Number(n) === n && n % 1 === 0;
}

function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}

function reverseNumber(value) {
    let reverseMaxValue = (value.toString()).split("").reverse().join("");

    if (isInt(value)) {
    	reverseMaxValue = (value > 0) ? parseInt(reverseMaxValue) : parseInt(`-${reverseMaxValue}`);
    } 
    if (isFloat(value)){    
    	reverseMaxValue = (value > 0) ? parseFloat(reverseMaxValue) : parseFloat(`-${reverseMaxValue}`);
    }

    return reverseMaxValue;
}

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'

/*
	Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності:
*/

const resultsArray = [1, 2, [3, [4]]];
let productOfArray;

let count = 0;

function countSubArrays(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      count++;
      countSubArrays(arr[i]);
    }
  }
}

countSubArrays(resultsArray);

const flatArray = resultsArray.flat(count);
let multipliedValues = 1;

for (let i = 0; i < flatArray.length; i++) {
	 multipliedValues *= flatArray[i];

}
productOfArray = multipliedValues;

console.log(productOfArray); // 24