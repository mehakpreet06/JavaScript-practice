/*
====================================================
Topic : Type Conversion in JavaScript
Author: Mehak
====================================================

Type conversion means changing one data type into another.

There are two types of conversion:

1. Implicit Type Conversion (Automatic)
2. Explicit Type Conversion (Manual)
*/

// ====================================================
// 1. Number()
// ====================================================

let age = "21";

console.log(age);
console.log(typeof age);

age = Number(age);

console.log(age);
console.log(typeof age);

// ====================================================
// 2. String()
// ====================================================

let marks = 95;

console.log(marks);
console.log(typeof marks);

marks = String(marks);

console.log(marks);
console.log(typeof marks);

// ====================================================
// 3. Boolean()
// ====================================================

console.log(Boolean(1));       // true
console.log(Boolean(0));       // false
console.log(Boolean("Hello")); // true
console.log(Boolean(""));      // false

// ====================================================
// Examples
// ====================================================

let price = "500";
price = Number(price);

console.log(price + 100);

let year = 2026;
year = String(year);

console.log(year + " is the current year");

// ====================================================
// Important Notes
// ====================================================

// Number("100")  -> 100
// Number("Hello") -> NaN
// String(123) -> "123"
// Boolean(1) -> true
// Boolean(0) -> false
// Boolean("") -> false
// Boolean("JavaScript") -> true

// ====================================================
// Common Mistakes
// ====================================================

// Wrong
// let age = "20";
// console.log(age + 5); // "205"

// Correct
// let age = Number("20");
// console.log(age + 5); // 25

// ====================================================
// Practice Questions
// ====================================================

/*
1. Convert "50" into a number.
2. Convert 2026 into a string.
3. Convert "" into a boolean.
4. Convert "Hello" into a boolean.
5. Print the data type before and after conversion.
*/

// ====================================================
// Challenge Questions
// ====================================================

/*
1. Create a program that converts user input into a number.
2. Build a simple calculator using Number().
3. Check the result of Number("abc").
*/