/*
====================================================
File   : 016-Functions.js
Topic  : Functions in JavaScript
Author : Mehak
Version: 1.0
====================================================

A function is a reusable block of code that performs
a specific task.

Instead of writing the same code multiple times,
we can create a function once and call it whenever
we need it.

Functions make code:
✔ Reusable
✔ Cleaner
✔ Easier to read
✔ Easier to maintain
*/

// ====================================================
// Function Syntax
// ====================================================

/*
function functionName() {

    // Code

}
*/

// ====================================================
// Basic Function
// ====================================================

function greet() {
    console.log("Hello, Welcome to JavaScript!");
}

greet();

// ====================================================
// Function with Parameters
// ====================================================

function sayHello(name) {
    console.log("Hello " + name);
}

sayHello("Mehak");
sayHello("Alex");

// ====================================================
// Function with Multiple Parameters
// ====================================================

function add(num1, num2) {
    console.log(num1 + num2);
}

add(10, 20);
add(50, 100);

// ====================================================
// Function with Return Statement
// ====================================================

function multiply(a, b) {
    return a * b;
}

let result = multiply(5, 4);

console.log(result);

// ====================================================
// Difference Between Parameters & Arguments
// ====================================================

/*
Parameters:
Variables written inside the function definition.

Arguments:
Actual values passed while calling the function.
*/

function introduce(name, age) {
    console.log("Name: " + this.name);
    console.log("Age : " + this.age);
}

introduce("Mehak", 21);

// ====================================================
// Returning Different Data Types
// ====================================================

function getCity() {
    return "Bathinda";
}

console.log(getCity());

function isAdult(age) {
    return age >= 18;
}

console.log(isAdult(21));

// ====================================================
// Real-Life Examples
// ====================================================

// Greeting users

function welcomeUser(username) {
    console.log("Welcome " + username);
}

welcomeUser("Mehak");

// Calculator

function subtract(a, b) {
    return a - b;
}

console.log(subtract(20, 8));

// Shopping Discount

function discount(price, discountAmount) {
    return price - discountAmount;
}

console.log(discount(2000, 500));

// ====================================================
// Important Notes
// ====================================================

// A function runs only when it is called.

// Functions can have zero, one, or multiple parameters.

// return sends a value back to the caller.

// Code written after return inside a function
// will not execute.

// Use meaningful function names.

// ====================================================
// Common Mistakes
// ====================================================

// Wrong

//function sum(a, b) {
  //  a + b;
//}

//console.log(sum(10, 20)); // undefined

// Correct

//function sumCorrect(a, b) {
//    return a + b;
//}

//console.log(sumCorrect(10, 20));

// ----------------------------------------------------

// Wrong

//greet;

// Correct

//greet();

// ====================================================
// Practice Questions
// ====================================================

/*
1. Create a function to print your name.

2. Create a function that prints your favourite city.

3. Create a function that adds two numbers.

4. Create a function that multiplies two numbers.

5. Create a function that returns the square of a number.
*/

// ====================================================
// Challenge Questions
// ====================================================

/*
1. Create a calculator using functions.

2. Create a function that checks whether a
number is even or odd.

3. Create a function that returns the largest
among three numbers.

4. Create a function that converts Celsius
to Fahrenheit.
*/