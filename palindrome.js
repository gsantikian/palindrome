var sget = require('sget');

function reversedWord(word) {
  return word.split('').reverse().join('');
}

var inputWord = sget("Enter a word: ").trim();

if (inputWord === reversedWord(inputWord)) {
  console.log(inputWord + " is a palindrome!");
} else {
  console.log(inputWord + " is not a palindrome.");
}