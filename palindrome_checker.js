function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
  }
  
  let word = "lol";
  console.log(`Given String "${word}" is ${isPalindrome(word) ? "a Palindrome" : "not a Palindrome"}`);
  