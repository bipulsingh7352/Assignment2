let student = [3, 2, 1, 8, 12, 9];

student.sort((a, b) => a - b);
console.log(`The Ascending order: ${student}`);

student.sort((a, b) => b - a);
console.log(`The Descending order: ${student}`);

let largest = Math.max(...student);
let smallest = Math.min(...student);

console.log(`The Maximum Element is: ${largest}`);
console.log(`The Minimum Element is: ${smallest}`);