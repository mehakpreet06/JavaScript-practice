/*
==========================================================
Topic       : Random Number Generator in JavaScript
Author      : Mehak
Version     : 1.0
Description : Learn how to generate random numbers
              using the Math object.
==========================================================

Prerequisites:
✔ Variables
✔ Operators
✔ Math Objects

==========================================================
Contents
==========================================================

1. Introduction
2. Math.random()
3. Generating Whole Numbers
4. Generating Numbers in a Range
5. Real-Life Examples
6. Important Notes
7. Common Mistakes
8. Practice Questions
9. Challenge Questions

==========================================================
Introduction
==========================================================

A Random Number Generator creates unpredictable numbers.

JavaScript provides the Math.random() method to generate
random decimal numbers.

Syntax:

Math.random()

Returns:
A decimal number greater than or equal to 0
and less than 1.

*/

// ==========================================================
// Basic Example
// ==========================================================

console.log(Math.random());

// Example Output:
// 0.538291472

// ==========================================================
// Random Number Between 1 and 10
// ==========================================================

let randomNumber = Math.floor(Math.random() * 10) + 1;

console.log(randomNumber);

// ==========================================================
// Random Number Between 1 and 100
// ==========================================================

let random100 = Math.floor(Math.random() * 100) + 1;

console.log(random100);

// ==========================================================
// Random Number Between 50 and 100
// ==========================================================

let minimum = 50;
let maximum = 100;

let randomRange =
Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(randomRange);

// ==========================================================
// Random Dice Roll
// ==========================================================

let dice = Math.floor(Math.random() * 6) + 1;

console.log("Dice:", dice);

// ==========================================================
// Random Coin Toss
// ==========================================================

let coin = Math.floor(Math.random() * 2);

if (coin === 0) {
    console.log("Heads");
} else {
    console.log("Tails");
}

// ==========================================================
// Random Password Character
// ==========================================================

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let randomIndex =
Math.floor(Math.random() * characters.length);

console.log(characters.charAt(randomIndex));

// ==========================================================
// Real-Life Applications
// ==========================================================

/*

• Dice Game
• Lottery System
• OTP Generator
• Password Generator
• Quiz App
• Number Guessing Game

*/

// ==========================================================
// Important Notes
// ==========================================================

/*

• Math.random() returns a decimal number.
• Use Math.floor() to remove decimal values.
• Add +1 when you want the range to start from 1.

Formula:

Math.floor(Math.random() * range) + minimum

*/

// ==========================================================
// Common Mistakes
// ==========================================================

/*

❌ Math.random(10)

✅ Math.random()

❌ Math.floor(Math.random() * 10)

Range:
0 to 9

✅ Math.floor(Math.random() * 10) + 1

Range:
1 to 10

*/

// ==========================================================
// Practice Questions
// ==========================================================

/*

1. Generate a random number from 1 to 20.
2. Generate a random number from 50 to 100.
3. Simulate a dice roll.
4. Simulate a coin toss.
5. Print a random letter from the alphabet.

*/

// ==========================================================
// Challenge Questions
// ==========================================================

/*

1. Build a Dice Roller.
2. Create an OTP Generator.
3. Create a Random Password Generator.
4. Generate a random RGB color.
5. Create a Lucky Draw Program.

*/
