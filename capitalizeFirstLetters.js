// capitalizeFirstLetters.js
const assert = require('assert');

// Check that capitalizeFirstLetters is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');

// Check that capitalizeFirstletters transforms 'i am learning TDD' correctly
assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');

// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters('z'), 'Z');

// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');


// Code

function capitalizeFirstLetters(input) {
  let words = input.split(" ");
 if (input.length == 0){
  return input;
 } else {
    for (let i = 0 ; i < words.length ; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
 }
  return words.join(" ");
}
   
