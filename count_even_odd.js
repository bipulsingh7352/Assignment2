let numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
let countE = numbers.filter(num => num % 2 === 0).length;
let countO = numbers.length - countE;

console.log(`The numbers: ${numbers}`);
console.log(`The no. of even numbers: ${countE}`);
console.log(`The no. of odd numbers: ${countO}`);