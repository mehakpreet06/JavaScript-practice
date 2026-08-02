/*
===========================================
Topic: Variables in JavaScript
Author: Mehak
===========================================

A variable is a container used to store data.

There are three ways to declare variables:
1. var
2. let
3. const
*/

// ------------------------------------
// var
// ------------------------------------

var city = "Delhi";
console.log(city);

// var can be reassigned
city = "Mumbai";
console.log(city);

// ------------------------------------
// let
// ------------------------------------

let age = 20;
console.log(age);

// let can also be reassigned
age = 21;
console.log(age);

// ------------------------------------
// const
// ------------------------------------

const country = "India";
console.log(country);

// const cannot be reassigned
// country = "Canada"; ❌ This will cause an error

// ------------------------------------
// Multiple Variables
// ------------------------------------

let firstName = "Mehak";
let lastName = "Preet";

console.log(firstName);
console.log(lastName);

// ------------------------------------
// Variable Naming Rules
// ------------------------------------

// Valid
let userName = "Mehak";
let _marks = 95;
let $price = 500;

// Invalid
// let 1name = "ABC";
// let user-name = "ABC";
// let let = "ABC";

// ------------------------------------
// Example Program
// ------------------------------------

let studentName = "Mehak";
let course = "BCA";
let semester = 6;

console.log("Student Name:", studentName);
console.log("Course:", course);
console.log("Semester:", semester);

/*
Practice Questions

1. Create a variable called college.
2. Store your favourite colour in a variable.
3. Create a const variable called PI with value 3.14.
4. Print your name, age and city.
*/