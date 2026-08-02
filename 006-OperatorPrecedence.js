/*
====================================================
Topic : Operator Precedence in JavaScript
Author: Mehak
Version: 1.0
====================================================
//Prerequisites:
✔ Variables
✔ Data Types
✔ Operators
//
Operator precedence determines the order in which
operators are evaluated in an expression.

Example:
2 + 3 * 4

Output:
14

Why?
Multiplication (*) has higher precedence than Addition (+).
*/

// ====================================================
// Basic Examples
// ====================================================

console.log(2 + 3 * 4);      // 14
console.log((2 + 3) * 4);    // 20

// ====================================================
// Exponent (**)
// ====================================================

console.log(2 ** 3);         // 8
console.log(3 + 2 ** 2);     // 7

// ====================================================
// Division and Multiplication
// ====================================================

console.log(20 / 5 * 2);     // 8

// Same precedence.
// Evaluated from left to right.

// ====================================================
// Modulus
// ====================================================

console.log(10 % 3);         // 1

// ====================================================
// Complex Expression
// ====================================================

let result = 10 + 5 * 2 - 4 / 2;

console.log(result);

// Output:
// 18

// ====================================================
// Using Parentheses
// ====================================================

let answer = (10 + 5) * (2 - 1);

console.log(answer);

// Output:
// 15

// ====================================================
// Real-Life Example
// ====================================================

let quantity = 3;
let price = 250;
let discount = 100;

let total = quantity * price - discount;

console.log("Total Price =", total);

// ====================================================
// Order of Precedence
// ====================================================

/*

1. ( ) Parentheses
2. ** Exponentiation
3. * / % Multiplication, Division, Modulus
4. + - Addition, Subtraction
5. Comparison Operators
6. Logical Operators
7. Assignment Operators

*/

// ====================================================
// Important Notes
// ====================================================

// Parentheses are evaluated first.
// Operators with the same precedence
// are evaluated from left to right
// (except ** which is right to left).

// ====================================================
// Common Mistakes
// ====================================================

// Wrong expectation
console.log(2 + 3 * 4); // 14, not 20

// Correct
console.log((2 + 3) * 4); // 20

// ====================================================
// Practice Questions
// ====================================================

/*

1. Find the output:
   5 + 10 * 2

2. Find the output:
   (5 + 10) * 2

3. Find the output:
   100 / 5 + 10

4. Find the output:
   50 - 10 * 3

5. Use parentheses to change the result.

*/

// ====================================================
// Challenge Questions
// ====================================================

/*

1. Calculate the total bill after discount.
2. Calculate simple interest using operators.
3. Evaluate a complex mathematical expression.

*/