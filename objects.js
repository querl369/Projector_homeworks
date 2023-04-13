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
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diff = Math.abs(start - end);
  let result;

  switch (dimension) {
    case 'days':
      result = Math.floor(diff / (1000 * 60 * 60 * 24));
      break;
    case 'hours':
      result = Math.floor(diff / (1000 * 60 * 60));
      break;
    case 'minutes':
      result = Math.floor(diff / (1000 * 60));
      break;
    default:
      result = diff / 1000;
      break;
  }

  return `${result} ${dimension}`;
}