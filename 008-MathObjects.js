/*
==========================================================
Topic       : Math Objects in JavaScript
Author      : Mehak
Version     : 1.0
Description : Learn the built-in Math object and its
              commonly used properties and methods.
==========================================================

Prerequisites:
✔ Variables
✔ Data Types
✔ Type Conversion
✔ Operators

==========================================================
Introduction
==========================================================

The Math object is a built-in JavaScript object that
provides mathematical constants and methods.

You do not need to create a Math object because it is
already available in JavaScript.

Syntax:
Math.method();
Math.property;
*/

// ==========================================================
// Math Properties
// ==========================================================

console.log("Math.PI =", Math.PI);
console.log("Math.E =", Math.E);

// ==========================================================
// Math.round()
// Rounds to the nearest integer.
// ==========================================================

console.log(Math.round(4.2)); // 4
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.8)); // 5

// ==========================================================
// Math.floor()
// Rounds down to the nearest integer.
// ==========================================================

console.log(Math.floor(8.9)); // 8
console.log(Math.floor(5.1)); // 5

// ==========================================================
// Math.ceil()
// Rounds up to the nearest integer.
// ==========================================================

console.log(Math.ceil(8.1)); // 9
console.log(Math.ceil(4.2)); // 5

// ==========================================================
// Math.trunc()
// Removes the decimal part.
// ==========================================================

console.log(Math.trunc(9.99)); // 9
console.log(Math.trunc(5.45)); // 5

// ==========================================================
// Math.pow()
// Calculates the power of a number.
// ==========================================================

console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(5, 2)); // 25

// ==========================================================
// Math.sqrt()
// Returns the square root.
// ==========================================================

console.log(Math.sqrt(25)); // 5
console.log(Math.sqrt(144)); // 12

// ==========================================================
// Math.abs()
// Returns the absolute value.
// ==========================================================

console.log(Math.abs(-15)); // 15
console.log(Math.abs(15)); // 15

// ==========================================================
// Math.sign()
// Returns:
// 1  -> Positive
// -1 -> Negative
// 0  -> Zero
// ==========================================================

console.log(Math.sign(15));
console.log(Math.sign(-20));
console.log(Math.sign(0));

// ==========================================================
// Math.max()
// Returns the largest value.
// ==========================================================

console.log(Math.max(10, 20, 35, 18));

// ==========================================================
// Math.min()
// Returns the smallest value.
// ==========================================================

console.log(Math.min(10, 20, 35, 18));

// ==========================================================
// Math.random()
// Returns a random decimal number between
// 0 (inclusive) and 1 (exclusive).
// ==========================================================

console.log(Math.random());

// Random integer from 1 to 10

let randomNumber = Math.floor(Math.random() * 10) + 1;

console.log(randomNumber);

// ==========================================================
// Math.sin()
// ==========================================================

console.log(Math.sin(0));

// ==========================================================
// Math.cos()
// ==========================================================

console.log(Math.cos(0));

// ==========================================================
// Math.tan()
// ==========================================================

console.log(Math.tan(0));

// ==========================================================
// Math.log()
// Natural logarithm
// ==========================================================

console.log(Math.log(10));

// ==========================================================
// Real-Life Examples
// ==========================================================

// Example 1: Area of a Circle

const radius = 7;

const area = Math.PI * Math.pow(radius, 2);

console.log("Area of Circle =", area);

// Example 2: Highest Marks

const highestMarks = Math.max(85, 92, 76, 98, 88);

console.log("Highest Marks =", highestMarks);

// Example 3: Lowest Marks

const lowestMarks = Math.min(85, 92, 76, 98, 88);

console.log("Lowest Marks =", lowestMarks);

// Example 4: Random Dice Roll

const dice = Math.floor(Math.random() * 6) + 1;

console.log("Dice =", dice);

// ==========================================================
// Important Notes
// ==========================================================

/*

• Math is a built-in object.
• Math.PI stores the value of π.
• Math.random() returns a decimal number.
• Use Math.floor() to generate whole numbers.
• Math.pow(a, b) means a raised to the power b.

*/

// ==========================================================
// Common Mistakes
// ==========================================================

/*

❌ Math.pi
✅ Math.PI

❌ Math.Random()
✅ Math.random()

❌ Math.Round()
✅ Math.round()

*/

// ==========================================================
// Practice Questions
// ==========================================================

/*

1. Round 18.6 using Math.round().
2. Find the square root of 225.
3. Find the maximum among
   55, 23, 89, 100 and 67.
4. Find the minimum among
   14, 6, 29, 41 and 2.
5. Generate a random number between 1 and 20.
6. Calculate the area of a circle with radius 10.

*/

// ==========================================================
// Challenge Questions
// ==========================================================

/*

1. Build a Dice Roller.
2. Generate a random OTP.
3. Generate a random password.
4. Build a Lottery Number Generator.
5. Generate a random RGB color.

*/
