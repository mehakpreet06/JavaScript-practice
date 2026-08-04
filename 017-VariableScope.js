/*
====================================================
File   : 017-VariableScope.js
Topic  : Variable Scope (Local & Global)
Author : Mehak
Version: 1.0
====================================================

Variable Scope determines where a variable can be
accessed in a program.

There are two types of scope in JavaScript:

✔ Global Scope
✔ Local Scope

Understanding scope helps us write clean, organized,
and error-free code.
*/

// ====================================================
// Global Scope
// ====================================================

// A global variable is declared outside any function.
// It can be accessed anywhere in the program.

let college = "MRSPTU";

function showCollege() {
    console.log(college);
}

showCollege();

console.log(college);

// ====================================================
// Local Scope
// ====================================================

// A local variable is declared inside a function.
// It can only be accessed inside that function.

function studentInfo() {

    let name = "Mehak";

    console.log(name);

}

studentInfo();

// console.log(name); // Error

// ====================================================
// Global vs Local Scope
// ====================================================

let language = "JavaScript";

function learning() {

    let topic = "Variable Scope";

    console.log(language);
    console.log(topic);

}

learning();

console.log(language);

// console.log(topic); // Error

// ====================================================
// Variable Shadowing
// ====================================================

// A local variable can have the same name as a
// global variable.

let city = "Delhi";

function displayCity() {

    let city = "Bathinda";

    console.log(city);

}

displayCity();

console.log(city);

// ====================================================
// Real-Life Examples
// ====================================================

// Example 1 : User Login

let username = "Mehak";

function welcomeUser() {

    console.log("Welcome " + username);

}

welcomeUser();

// Example 2 : Shopping Cart

let cartItems = 5;

function showCart() {

    console.log("Items in Cart: " + cartItems);

}

showCart();

// Example 3 : Student Marks

function calculateMarks() {

    let marks = 95;

    console.log("Marks: " + marks);

}

calculateMarks();

// ====================================================
// Important Notes
// ====================================================

// Global variables can be accessed anywhere.

// Local variables exist only inside the function
// where they are declared.

// Avoid creating too many global variables.

// Local variables make programs more secure
// and easier to maintain.

// ====================================================
// Common Mistakes
// ====================================================

// Wrong

function test() {

    let age = 20;

}

// console.log(age); // Error

// Correct

function test2() {

    let age = 20;

    console.log(age);

}

test2();

// ----------------------------------------------------

// Wrong

let score = 50;

function game() {

    let score = 100;

    console.log(score);

}

game();

console.log(score);

// ====================================================
// Practice Questions
// ====================================================

/*
1. Create one global variable and print it
inside and outside a function.

2. Create a local variable and print it
inside a function.

3. Try printing a local variable outside
the function.

4. Create two functions using different
local variables.

5. Create a global variable called country
and print it from two different functions.
*/

// ====================================================
// Challenge Questions
// ====================================================

/*
1. Create a program with one global variable
and three functions that use it.

2. Create a function that stores two local
variables and prints their sum.

3. Create two variables with the same name,
one global and one local. Observe the output.

4. Explain the difference between Global
Scope and Local Scope in your own words.
*/