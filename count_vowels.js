let a = "Thanooz";
let vowels = "aeiouAEIOU";
let count = 0;

for (let char of a) {
  if (vowels.includes(char)) {
    console.log(char);
    count++;
  }
}

console.log(`Number of vowels: ${count}`);