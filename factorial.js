function factorial(n) {
    return (n === 0 || n === 1) ? 1 : n * factorial(n - 1);
  }
  
  let num = 5;
  console.log(`The Factorial of ${num} is: ${factorial(num)}`);  