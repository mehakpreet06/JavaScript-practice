/*
====================================================
File   : 019-Arrays.js
Topic  : Arrays in JavaScript
Author : Mehak
Version: 1.0
====================================================

An array is a special variable used to store
multiple values in a single variable.

Arrays are useful when working with lists of
data such as student names, marks, fruits,
cities, etc.

In JavaScript, array indexing starts from 0.
*/

// ====================================================
// Creating an Array
// ====================================================

let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits);

// ====================================================
// Accessing Array Elements
// ====================================================

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

// ====================================================
// Updating Array Elements
// ====================================================

fruits[1] = "Grapes";

console.log(fruits);

// ====================================================
// length Property
// ====================================================

console.log(fruits.length);

// ====================================================
// push()
// ====================================================

// Adds an element at the end of the array.

fruits.push("Pineapple");

console.log(fruits);

// ====================================================
// pop()
// ====================================================

// Removes the last element.

fruits.pop();

console.log(fruits);

// ====================================================
// unshift()
// ====================================================

// Adds an element at the beginning.

fruits.unshift("Kiwi");

console.log(fruits);

// ====================================================
// shift()
// ====================================================

// Removes the first element.

fruits.shift();

console.log(fruits);

// ====================================================
// indexOf()
// ====================================================

// Finds the index of an element.

console.log(fruits.indexOf("Mango"));
console.log(fruits.indexOf("Apple"));

// ====================================================
// sort()
// ====================================================

// Sorts the array in ascending order.

fruits.sort();

console.log(fruits);

// ====================================================
// reverse()
// ====================================================

// Reverses the array.

fruits.reverse();

console.log(fruits);

// ====================================================
// Looping Through an Array
// ====================================================

for (let i = 0; i < fruits.length; i++) {

    console.log(fruits[i]);

}

// ====================================================
// Real-Life Examples
// ====================================================

// Student Names

let students = ["Mehak", "Rahul", "Simran"];

console.log(students);

// Shopping List

let shopping = ["Milk", "Bread", "Butter"];

console.log(shopping);

// Mobile Brands

let mobiles = ["Samsung", "Apple", "OnePlus"];

console.log(mobiles);

// ====================================================
// Important Notes
// ====================================================

// Arrays can store multiple values.

// Array indexing starts from 0.

// Arrays can store different data types.

// push() adds an element at the end.

// pop() removes the last element.

// unshift() adds an element at the beginning.

// shift() removes the first element.

// length returns the total number of elements.

// ====================================================
// Common Mistakes
// ====================================================

// Wrong

//console.log(fruits[4]);

// If the element doesn't exist,
// JavaScript returns undefined.

// ----------------------------------------------------

// Wrong

//console.log(fruits.length());

// Correct

//console.log(fruits.length);

// ----------------------------------------------------

// Wrong

//fruits.push;

// Correct

//fruits.push("Papaya");

// ====================================================
// Practice Questions
// ====================================================

/*
1. Create an array of five colors.

2. Print the first and last element.

3. Add a new element using push().

4. Remove the last element using pop().

5. Add an element at the beginning.

6. Remove the first element.

7. Find the index of an element.

8. Sort the array.

9. Reverse the array.

10. Print all elements using a loop.
*/

// ====================================================
// Challenge Questions
// ====================================================

/*
1. Create an array of student marks and
find the highest mark.

2. Create a shopping list application
using arrays.

3. Store five cities in an array and
display them in reverse order.

4. Build a simple menu that allows the
user to add or remove items from an array.
*/