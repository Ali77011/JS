// Хашиев Али Мустафаевич

//Задание 1 
for (let i = 1; i <= 100; i++) {
  document.write(i + "<br>");
}

// ================================================
//Задание 2
for (let i = 100; i >= 1; i--) {
  document.write(i + "<br>");
}

// ================================================
//Задание 3 
for (let i = 2; i <= 100; i += 2) {
  document.write(i + "<br>");
}

// ================================================
//Задание 4 
const array = [];
for (let i = 0; i < 10; i++) {
  array.push("x");
}
console.log(array);

// ================================================
//Задание 5
const array1 = [];
for (let i = 1; i <= 10; i++) {
  array.push(i);
}
console.log(array1);

// ================================================
//Задание 6
const numbers = [2, 7, 13, -3, 5, 9, 12, 0, 4];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0 && numbers[i] < 10) {
    console.log(numbers[i]);
  }
}

// ================================================
//Задание 7
const chisla = [2, 7, 13, -3, 5, 9, 12, 0, 4];
let hasFive = false;

for (let i = 0; i < chisla.length; i++) {
  if (chisla[i] === 5) {
    hasFive = true;
    break;
  }
}

if (hasFive) {
  console.log("есть элемент со значением 5");
} else {
  console.log("нет элемента со значением 5");

}
// ================================================
//Задание 8
const number = [2, 7, 13, -3, 5, 9, 12, 0, 4];
let sum1 = 0;

for (let i = 0; i < number.length; i++) {
  sum1 += number[i];
}

console.log("Сумма элементов массива: " + sum1);
// ================================================
//Задание 9
const number2 = [2, 7, 13, -3, 5, 9, 12, 0, 4];
let sumOfSquares = 0;

for (let i = 0; i < number2.length; i++) {
  sumOfSquares += number2[i] ** 2;
}

console.log(`Сумма квадратов элементов массива: ${sumOfSquares}`);
// ================================================
//Задание 10
const num = [2, 7, 13, -3, 5, 9, 12, 0, 4];
let sum2 = 0;

for (let i = 0; i < num.length; i++) {
  sum2 += num[i];
}

const average = sum2 / num.length;
console.log("Среднее арифметическое элементов массива: " + average);
// ================================================
//Задание 11
function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(100));
// ================================================
//Задание 12
let numb = [];
for (let i = 10; i >= 1; i--) {
  numb.push(i);
}
console.log(numb);
// ================================================
//Задание 13
let numbe = [1, -2, 3, -4, 5, -6];
let sum3 = 0;

for (let i = 0; i < numbe.length; i++) {
  if (numbe[i] > 0) {
    sum3 += numbe[i];
  }
}

console.log(sum3);
// ================================================
//Задание 14
let arr = [10, 20, 30, 50, 235, 3000];

for (let i = 0; i < arr.length; i++) {
  let firstDigit = String(arr[i])[0];
  if (firstDigit === '1' || firstDigit === '2' || firstDigit === '5') {
    console.log(arr[i]);
  }
}
// ================================================
//Задание 15
let arr1 = [10, 20, 30, 50, 235, 3000];

for (let i = arr1.length - 1; i >= 0; i--) {
  console.log(arr1[i]);
}
// ================================================
//Задание 16
let n = [3, 1, 2, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === i) {
    console.log(numbers[i]);
  }
}
// ================================================
//Задание 17
let nu = [1, 2, 3, 4, 5];

for (let i = 0; i < nu.length; i++) {
  document.write(nu[i]);
  document.write("<br>");
}
// ================================================
//Задание 18
let numbere = [1, 2, 3, 4, 5];

for (let i = 0; i < numbere.length; i++) {
  document.write("<p>" + numbere[i] + "</p>");
}
// ================================================
//Задание 19
let daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

for (let i = 0; i < daysOfWeek.length; i++) {
  if (i === 5 || i === 6) { // индексы 5 и 6 соответствуют Субботе и Воскресенью
    document.write("<strong>" + daysOfWeek[i] + "</strong><br>");
  } else {
    document.write(daysOfWeek[i] + "<br>");
  }
}
// ================================================
//Задание 20
let Week = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
let day = new Date().getDay(); // Получаем текущий день недели (от 0 до 6)

for (let i = 0; i < Week.length; i++) {
  if (i === day) {
    document.write("<em>" + Week[i] + "</em><br>");
  } else {
    document.write(Week[i] + "<br>");
  }
}
// ================================================
//Задание 21
let obj = {
  employee1: 100,
  employee2: 200,
  employee3: 300,
  employee4: 400,
  employee5: 500,
  employee6: 600,
  employee7: 700,
};
for (let key in obj) {
  obj[key] *= 1.1; 
}
console.log(obj);