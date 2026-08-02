/*
====================================================
Topic : User Input in JavaScript
Author: Mehak
Version: 1.0
====================================================
/*   Prerequisites

✔ Variables
✔ Data Types
✔ Type Conversion

*/

/*
User input allows users to enter data while the
program is running.

There are two common ways to take user input:

1. window.prompt() 
2. HTML Input Box
*/

// Browser Only Example

// ====================================================
// 1. window.prompt()
// ====================================================

let username = window.prompt("Enter your name:");

console.log("Welcome,", username);

// ====================================================
// Taking Number Input
// ====================================================

let age = Number(window.prompt("Enter your age:"));

console.log("Your age is:", age);

// ====================================================
// Type Conversion
// ====================================================

let marks = window.prompt("Enter your marks:");

console.log(typeof marks);

marks = Number(marks);

console.log(typeof marks);

// ====================================================
// Simple Calculator
// ====================================================

let num1 = Number(window.prompt("Enter First Number:"));
let num2 = Number(window.prompt("Enter Second Number:"));

let sum = num1 + num2;

console.log("Sum =", sum);

// ====================================================
// HTML Input Method
// ====================================================

/*

HTML

<input id="username">
<button onclick="submitData()">Submit</button>

JavaScript

function submitData(){

    let username =
    document.getElementById("username").value;

    console.log(username);

}

*/

// ====================================================
// Real-Life Example
// ====================================================

let city = window.prompt("Enter your city:");

console.log("You live in", city);

// ====================================================
// Important Notes
// ====================================================

// window.prompt() always returns a string.
// Use Number() when numeric input is required.
// Validate numeric input using isNaN().

// ====================================================
// Common Mistakes
// ====================================================

// Wrong

// let age = window.prompt("Age");
// console.log(age + 5);

// Output:
// 205

// Correct

// let age = Number(window.prompt("Age"));
// console.log(age + 5);

// Output:
// 25

// ====================================================
// Practice Questions
// ====================================================

/*

1. Ask the user for their name.
2. Ask the user for their age.
3. Print the user's favourite colour.
4. Add two numbers entered by the user.
5. Multiply two numbers entered by the user.

*/

// ====================================================
// Challenge Questions
// ====================================================

/*

1. Create a simple calculator.
2. Calculate the area of a rectangle.
3. Find the average of three numbers entered by the user.

*/

