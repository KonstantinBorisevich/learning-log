const greet = (name) => `Привет, ${name}!`;
const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const isAdult = (age) => age >= 18;

console.log(greet("Костя"));       // Привет, Костя!
console.log(sum(10, 5));           // 15
console.log(subtract(10, 5));      // 5
console.log(multiply(10, 5));      // 50
console.log(isAdult(32));          // true
console.log(isAdult(16));          // false