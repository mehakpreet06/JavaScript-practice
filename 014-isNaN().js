/*
====================================================
Topic : isNaN() Function in JavaScript
Author: Mehak
====================================================

The isNaN() function checks whether a value is
"Not-a-Number".

Syntax:
isNaN(value)

Returns:
true  -> if the value is NOT a number
false -> if the value is a number
*/

// ====================================================
// Basic Examples
// ====================================================

console.log(isNaN("Hello"));     // true
console.log(isNaN(100));         // false
console.log(isNaN("100"));       // false
console.log(isNaN(true));        // false
console.log(isNaN(undefined));   // true

// ====================================================
// User Input Example
// ====================================================

let age = "20";

if (isNaN(age)) {
    console.log("Please enter a valid number.");
} else {
    console.log("Valid Number");
}

// ====================================================
// Invalid Input Example
// ====================================================

let marks = "abc";

if (isNaN(marks)) {
    console.log("Invalid Marks");
} else {
    console.log("Marks Accepted");
}

// ====================================================
// Number Conversion
// ====================================================

let input = "50";

input = Number(input);

console.log(input);
console.log(typeof input);

// ====================================================
// Real-Life Example
// ====================================================

let salary = "25000";

if (!isNaN(salary)) {
    console.log("Salary Saved Successfully");
} else {
    console.log("Please Enter Numbers Only");
}

// ====================================================
// Important Notes
// ====================================================

// isNaN() checks whether a value is Not-a-Number.
// Convert user input using Number() before calculations.
// Always validate user input when expecting numbers.

// ====================================================
// Common Mistakes
// ====================================================

// Wrong
// let age = "Twenty";

// Correct
// let age = Number("20");

// ====================================================
// Practice Questions
// ====================================================

/*
1. Check if "Hello" is a number.
2. Check if "500" is a number.
3. Convert a string into a number.
4. Validate user age using isNaN().
5. Display an error for invalid input.
*/

// ====================================================
// Challenge Questions
// ====================================================

/*
1. Build an age validator.
2. Create a calculator that accepts only numbers.
3. Validate marks entered by the user.
*/

 