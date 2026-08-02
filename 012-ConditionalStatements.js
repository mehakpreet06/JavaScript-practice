/*
====================================================
Topic : Conditional Statements in JavaScript
Author: Mehak
====================================================
// Prerequisites:
// - Variables
// - Data Types
// - Operators

Conditional statements allow JavaScript to make decisions
based on different conditions.

Topics Covered:
1. if Statement
2. if...else Statement
3. else if Statement
4. Nested if
5. Ternary Operator
6. switch Statement
*/

// ====================================================
// 1. if Statement
// ====================================================

let age = 20;

if (age >= 18) {
    console.log("You are eligible to vote.");
}

// ====================================================
// 2. if...else Statement
// ====================================================

let marks = 45;

if (marks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// ====================================================
// 3. else if Statement
// ====================================================

let score = 82;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 75) {
    console.log("Grade B");
} else if (score >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// ====================================================
// 4. Nested if
// ====================================================

let userAge = 22;
let hasLicense = true;

if (userAge >= 18) {
    if (hasLicense) {
        console.log("You can drive.");
    } else {
        console.log("You need a driving license.");
    }
} else {
    console.log("You are underage.");
}

// ====================================================
// 5. Using Logical Operators
// ====================================================

let username = "Mehak";
let password = "12345";

if (username === "Mehak" && password === "12345") {
    console.log("Login Successful");
} else {
    console.log("Invalid Credentials");
}

// OR Operator

let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
    console.log("Enjoy your day!");
}

// NOT Operator

let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("Please log in.");
}

// ====================================================
// 6. Ternary Operator
// ====================================================

let temperature = 30;

let result = temperature >= 25 ? "Hot" : "Cold";

console.log(result);

// ====================================================
// 7. switch Statement
// ====================================================

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Day");
}

// ====================================================
// Real-Life Examples
// ====================================================

// Voting Eligibility

let personAge = 17;

if (personAge >= 18) {
    console.log("Eligible to Vote");
} else {
    console.log("Not Eligible");
}

// Even or Odd

let number = 9;

if (number % 2 === 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}

// Leap Year (Basic Logic)

let year = 2024;

if (year % 4 === 0) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}

// ====================================================
// Important Notes
// ====================================================

// Use === instead of == whenever possible.
// Use switch when comparing one variable
// against many fixed values.
// Always use curly braces {} for readability.

// ====================================================
// Common Mistakes
// ====================================================

// Wrong:
// if(age = 18)

// Correct:
// if(age === 18)

// Wrong:
// if(score >= 50)
// console.log("Pass");

// Correct:
// if(score >= 50){
//     console.log("Pass");
// }

// ====================================================
// Practice Questions
// ====================================================

/*
1. Check whether a number is positive or negative.
2. Find the largest of two numbers.
3. Check whether a person can vote.
4. Print the day using switch.
5. Check whether a number is even or odd.
6. Create a simple login system.
7. Print grades based on marks.
8. Find the greatest among three numbers.
*/

// ====================================================
// Challenge Questions
// ====================================================

/*
1. Build a calculator using switch.
2. Create a login system with username and password.
3. Build a traffic light simulator using switch.
4. Create a movie ticket eligibility checker.
*/
// Next Topic:
// Loops (for, while, do...while)