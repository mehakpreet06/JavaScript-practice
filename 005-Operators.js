/*
===========================================
Topic: Operators in JavaScript
Author: Mehak
===========================================

Operators are symbols that perform operations on values and variables.

Types Covered:
1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Logical Operators
5. Increment & Decrement Operators
*/

// ===========================================
// 1. Arithmetic Operators
// ===========================================

let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** b);

// ===========================================
// 2. Assignment Operators
// ===========================================

let x = 10;

x += 5;
console.log("+= :", x);

x -= 3;
console.log("-= :", x);

x *= 2;
console.log("*= :", x);

x /= 4;
console.log("/= :", x);

x %= 3;
console.log("%= :", x);

// ===========================================
// 3. Comparison Operators
// ===========================================

console.log(10 == "10");     // true
console.log(10 === "10");    // false
console.log(10 != "10");     // false
console.log(10 !== "10");    // true
console.log(10 > 5);         // true
console.log(10 < 5);         // false
console.log(10 >= 10);       // true
console.log(10 <= 5);        // false

// ===========================================
// 4. Logical Operators
// ===========================================

let age = 20;
let hasID = true;

console.log(age >= 18 && hasID);
console.log(age < 18 || hasID);
console.log(!hasID);

// ===========================================
// 5. Increment & Decrement
// ===========================================

let count = 5;

count++;
console.log("After Increment:", count);

count--;
console.log("After Decrement:", count);

// ===========================================
// Practice Examples
// ===========================================

let num1 = 15;
let num2 = 4;

console.log("Sum =", num1 + num2);
console.log("Difference =", num1 - num2);
console.log("Product =", num1 * num2);
console.log("Quotient =", num1 / num2);
console.log("Remainder =", num1 % num2);

// ===========================================
// Notes
// ===========================================

// ==  compares only values.
// === compares values and data types.
// &&  returns true only if both conditions are true.
// ||  returns true if at least one condition is true.
// !   reverses the boolean value.

// ===========================================
// Practice Questions
// ===========================================

/*
1. Add two numbers.
2. Find the remainder of 27 % 4.
3. Compare 25 and "25" using == and ===.
4. Check if a person is eligible to vote using &&.
5. Use increment and decrement operators.
*/