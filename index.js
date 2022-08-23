// # Logical Thinking III

// Write pseudo-code for the following exercises on pen and paper.

// #### 1. Lowest to Highest

// Given an array of numbers from 1-9:
// Sort the array from lowest value to highest.

const numbers = [4, 2, 5, 3, 9, 7, 1, 8, 2, 6];

console.log("Q1: Numbers from lowest to highest", numbers.sort());

// #### 2. Alphabetical Order

// Given an array of names:

const names = ["Fran", "Leon", "Ale", "Jenna", "Bleda", "Hadi"];

function namesSort(array) {
  return array.sort();
}

console.log("Q2:Names sorted alphabetically", namesSort(names));

// Sort the array based on alphabetical order from `a → z`.

// **Bonuses**

// 1. Once you've wrote down your pen and paper solutions, create functions to solve the problems above with javascript.

// 2. Create a function that takes an array as a parameter. Order the array based off of the elements' length. Assume the elements are strings.
