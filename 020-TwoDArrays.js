/*
====================================================
File   : 020-TwoDArrays.js
Topic  : Two-Dimensional Arrays in JavaScript
Author : Mehak
Version: 1.0
====================================================

A Two-Dimensional (2D) Array is an array that
contains other arrays as its elements.

It is also known as an array of arrays.

A 2D array is useful for storing data in the
form of rows and columns, like a table or matrix.
*/

// ====================================================
// Creating a 2D Array
// ====================================================

let matrix = [

    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]

];

console.log(matrix);

// ====================================================
// Accessing Elements
// ====================================================

// Syntax:
// array[row][column]

console.log(matrix[0][0]);
console.log(matrix[1][2]);
console.log(matrix[2][1]);

// ====================================================
// Updating Elements
// ====================================================

matrix[1][1] = 50;

console.log(matrix);

// ====================================================
// Looping Through a 2D Array
// ====================================================

for (let i = 0; i < matrix.length; i++) {

    for (let j = 0; j < matrix[i].length; j++) {

        console.log(matrix[i][j]);

    }

}

// ====================================================
// Printing Each Row
// ====================================================

for (let i = 0; i < matrix.length; i++) {

    console.log(matrix[i]);

}

// ====================================================
// Real-Life Examples
// ====================================================

// Student Marks

let marks = [

    [90, 85, 88],
    [75, 80, 79],
    [95, 92, 98]

];

console.log(marks);

// Tic-Tac-Toe Board

let board = [

    ["X", "O", "X"],
    ["O", "X", "O"],
    ["X", " ", "O"]

];

console.log(board);

// Weekly Sales

let sales = [

    [1200, 1500, 1800],
    [1000, 1400, 1700]

];

console.log(sales);

// ====================================================
// Important Notes
// ====================================================

// A 2D array is an array of arrays.

// The first index represents the row.

// The second index represents the column.

// Nested loops are commonly used to access
// every element.

// 2D arrays are useful for tables, game boards,
// seating arrangements, and matrices.

// ====================================================
// Common Mistakes
// ====================================================

// Wrong

//console.log(matrix[3][0]);

// The row does not exist.

// ----------------------------------------------------

// Wrong

//console.log(matrix[0][5]);

// The column does not exist.

// ----------------------------------------------------

// Wrong

//for (let i = 0; i <= matrix.length; i++) {

   // console.log(matrix[i]);

//}

// Correct

//for (let i = 0; i < matrix.length; i++) {

//    console.log(matrix[i]);

//}

// ====================================================
// Practice Questions
// ====================================================

/*
1. Create a 2D array of numbers.

2. Print the first row.

3. Print the last element.

4. Update one element.

5. Print all elements using nested loops.

6. Create a 3 × 3 multiplication table.

7. Store student marks in a 2D array.
*/

// ====================================================
// Challenge Questions
// ====================================================

/*
1. Calculate the sum of all elements in
a 2D array.

2. Find the largest number in a 2D array.

3. Print the diagonal elements of a matrix.

4. Build a simple Tic-Tac-Toe board using
a 2D array.
*/