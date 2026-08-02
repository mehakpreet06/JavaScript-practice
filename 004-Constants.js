/*
====================================================
Topic : Constants (const) in JavaScript
Author: Mehak
Version: 1.0
====================================================

A constant is a variable whose value cannot be changed
after it is assigned.

Use the 'const' keyword to declare constants.

Syntax:
const variableName = value;
*/

// ====================================================
// Creating Constants
// ====================================================

const PI = 3.14159;
const country = "India";
const isStudent = true;

console.log(PI);
console.log(country);
console.log(isStudent);

// ====================================================
// Constants Cannot Be Reassigned
// ====================================================

const birthYear = 2005;

console.log(birthYear);

// Uncommenting the next line will cause an error
// birthYear = 2006;

// ====================================================
// Difference Between let and const
// ====================================================

// let can be reassigned
let age = 20;
console.log(age);

age = 21;
console.log(age);

// const cannot be reassigned
const college = "MRSPTU";
console.log(college);

// ====================================================
// Real-Life Examples
// ====================================================

// Value of PI
const pi = 3.14159;
let radius = 5;

let area = pi * radius * radius;

console.log("Area of Circle =", area);

// GST Rate
const GST = 18;

console.log("GST Rate =", GST + "%");

// Days in a Week
const DAYS_IN_WEEK = 7;

console.log("Days in a Week =", DAYS_IN_WEEK);

// ====================================================
// Important Notes
// ====================================================

// Always initialize a const variable.
// const cannot be reassigned.
// Use UPPER_CASE naming for fixed values
// like PI, GST, MAX_LIMIT.

// ====================================================
// Common Mistakes
// ====================================================

// Wrong
// const number;
// number = 10;

// Correct
// const number = 10;

// Wrong
// const city = "Delhi";

// Correct 
// city = "Mumbai";

// ====================================================
// Practice Questions
// ====================================================

/*
1. Create a constant named SPEED_OF_LIGHT.
2. Create a constant named MAX_MARKS.
3. Store the value of PI in a constant.
4. Calculate the area of a circle.
5. Print all constants.
*/

// ====================================================
// Challenge Questions
// ====================================================

/*
1. Create a BMI calculator using constants.
2. Calculate the circumference of a circle.
3. Build a simple GST calculator.
*/
