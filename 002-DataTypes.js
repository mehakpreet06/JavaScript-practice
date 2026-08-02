/*
===========================================
Topic: Data Types in JavaScript
Author: Mehak
===========================================

JavaScript has two categories of data types:

1. Primitive Data Types
2. Non-Primitive (Reference) Data Types
*/

// ===========================================
// Primitive Data Types
// ===========================================

// 1. String
let name = "Mehak";
console.log(name);
console.log(typeof name);

// 2. Number
let age = 20;
console.log(age);
console.log(typeof age);

// 3. Boolean
let isStudent = true;
console.log(isStudent);
console.log(typeof isStudent);

// 4. Undefined
let city;
console.log(city);
console.log(typeof city);

// 5. Null
let marks = null;
console.log(marks);
console.log(typeof marks); // object (This is a known JavaScript bug)

// 6. BigInt
let bigNumber = 123456789012345678901234567890n;
console.log(bigNumber);
console.log(typeof bigNumber);

// 7. Symbol
let id = Symbol("id");
console.log(id);
console.log(typeof id);

// ===========================================
// Non-Primitive Data Type
// ===========================================

// Object
let student = {
    name: "Mehak",
    age: 20,
    course: "BCA"
};

console.log(student);
console.log(typeof student);

// ===========================================
// Summary
// ===========================================

console.log(typeof "Hello");     // string
console.log(typeof 100);         // number
console.log(typeof true);        // boolean
console.log(typeof undefined);   // undefined
console.log(typeof null);        // object
console.log(typeof {});          // object
console.log(typeof []);          // object
console.log(typeof Symbol());    // symbol
console.log(typeof 10n);         // bigint

/*
Practice Questions

1. Create a string variable called college.
2. Create a boolean variable called isLoggedIn.
3. Create an undefined variable.
4. Create an object with your name and age.
5. Print the data type of every variable using typeof.
*/