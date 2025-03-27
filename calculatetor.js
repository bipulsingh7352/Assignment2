let a = 10;
let b = 5;
let operations = "multiple"; // Fixed spelling
let result;

switch (operations) {
  case "add":
    result = a + b;
    break;
  case "subtract":
    result = a - b;
    break;
  case "multiple": // Fixed spelling
    result = a * b;
    break;
  case "divide":
    result = a / b;
    break;
  default:
    result = "Invalid Operation";
}
console.log(Result: ${result});
