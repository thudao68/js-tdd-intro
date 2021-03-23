// capitalizeFirstLetters.js
const assert = require('assert');

// WRITE THE ACTUAL FUNCTION HERE

// Check that capitalizeFirstLetters is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');

// Check that capitalizeFirstletters transforms 'i am learning TDD' correctly
assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');

// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters('z'), 'Z');

// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');
