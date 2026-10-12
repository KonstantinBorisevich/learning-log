// Переменные
const name = "Константин";
let age = 31;
age = 32;

// Типы данных
const city = "Гродно";
const year = 2026;
const isLearning = true;
const nothing = null;
let notSet;
const hobbies = ["код", "книги"];
const user = {name: "Костя", age: 32};

// Вывод
console.log("Привет, мир");
console.log(`Меня зовут ${name}, мне ${age} лет, я из ${city}`);

// Числа 
const a = 10;
const b = 3;
console.log("Сумма:",a + b);
console.log("Разность:",a - b);
console.log("Умножение:",a * b);
console.log("Деление:",a / b);
console.log("Остаток:",a % b);

// Условия
const userAge = 20;

if (userAge >= 18) {
  console.log("Совершеннолетний");
} else {
  console.log("Ребёнок");
}

const status = userAge >=18 ? "взрослый":"ребёнок";
console.log("Статус:", status);

// Задача 1
console.log(`Меня зовут ${name}, мне ${age} лет, я из ${city}`);
// Задача 2
let x = 15;
let y = 4;
console.log("Сумма:",x + y);
console.log("Разность:",x - y);
console.log("Умножение:",x * y);
console.log("Деление:",x / y);
console.log("Остаток:",x % y);
// Задача 3
let temperature = 21;
if (temperature >= 25) {
    console.log("жарко");
} else if(temperature <= 10){
    console.log("холодно");
} else {
    console.log("нормально");
    
}
// Задача 4
let movies = ["harry potter", "the batman", "the Sherlock Holmes", "superman", "spider-man"];
for (let i = 0; i < movies.length; i++ ){
  console.log(`${i + 1}. ${movies[i]}`);}
// Задача 5
const movie = {
  title: "the matrix",
  year: 1999,
  rating: 2.7
};

if (movie.rating >= 8) {
  console.log("TOP");
} else if (movie.rating >= 5) {
  console.log("Normal");
} else {
  console.log("not recommended");
}
