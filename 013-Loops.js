/*
====================================================
Topic : Loops in JavaScript
Author: Mehak
====================================================

Loops are used to execute a block of code repeatedly.

Topics Covered:
1. for Loop
2. while Loop
3. do...while Loop
4. break Statement
5. continue Statement
*/

// ====================================================
// 1. for Loop
// ====================================================

console.log("Numbers from 1 to 5");

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// ====================================================
// Reverse Counting
// ====================================================

console.log("Reverse Counting");

for (let i = 5; i >= 1; i--) {
    console.log(i);
}

// ====================================================
// Even Numbers
// ====================================================

console.log("Even Numbers");

for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

// ====================================================
// Odd Numbers
// ====================================================

console.log("Odd Numbers");

for (let i = 1; i <= 10; i += 2) {
    console.log(i);
}

// ====================================================
// Multiplication Table
// ====================================================

console.log("Table of 7");

for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

// ====================================================
// while Loop
// ====================================================

console.log("while Loop");

let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}

// ====================================================
// do...while Loop
// ====================================================

console.log("do...while Loop");

let number = 1;

do {
    console.log(number);
    number++;
} while (number <= 5);

// ====================================================
// break Statement
// ====================================================

console.log("break Example");

for (let i = 1; i <= 10; i++) {

    if (i === 6) {
        break;
    }

    console.log(i);
}

// ====================================================
// continue Statement
// ====================================================

console.log("continue Example");

for (let i = 1; i <= 10; i++) {

    if (i === 6) {
        continue;
    }

    console.log(i);
}

// ====================================================
// Real-Life Examples
// ====================================================

// Sum of Numbers from 1 to 10

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log("Sum =", sum);

// Count Down

console.log("Countdown");

let timer = 5;

while (timer > 0) {
    console.log(timer);
    timer--;
}

console.log("Time's Up!");

// ====================================================
// Important Notes
// ====================================================

// for loop -> when number of iterations is known.
// while loop -> when iterations are unknown.
// do...while -> executes at least once.
// break -> exits the loop.
// continue -> skips the current iteration.

// ====================================================
// Common Mistakes
// ====================================================

// Infinite Loop ❌

// while(true){
//     console.log("Hello");
// }

// Always update the loop variable.

// ====================================================
// Practice Questions
// ====================================================

/*
1. Print numbers from 1 to 20.
2. Print numbers from 20 to 1.
3. Print all even numbers from 1 to 100.
4. Print all odd numbers from 1 to 100.
5. Print the multiplication table of 9.
6. Find the sum of numbers from 1 to 100.
7. Print numbers divisible by 5.
8. Print the square of numbers from 1 to 10.
*/

// ====================================================
// Challenge Questions
// ====================================================

/*
1. Print the Fibonacci series.
2. Find the factorial of a number.
3. Reverse a number using a loop.
4. Check whether a number is prime.
5. Create a star pattern using nested loops.

Example:

*
**
***
****
*****

*/