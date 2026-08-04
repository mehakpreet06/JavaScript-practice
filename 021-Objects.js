/*
====================================================
File   : 021-Objects.js
Topic  : Objects in JavaScript
Author : Mehak
Version: 1.0
====================================================

An object is a collection of related data stored
as key-value pairs.

Objects help us store multiple properties and
functions related to a single entity.

Examples:
✔ Student
✔ Car
✔ Book
✔ Mobile Phone
*/

// ====================================================
// Creating an Object
// ====================================================

let student = {

    name: "Mehak",
    age: 21,
    course: "BCA"

};

console.log(student);

// ====================================================
// Accessing Object Properties
// ====================================================

// Dot Notation

console.log(student.name);
console.log(student.age);

// Bracket Notation

console.log(student["course"]);

// ====================================================
// Updating Object Properties
// ====================================================

student.age = 22;

console.log(student);

// ====================================================
// Adding New Properties
// ====================================================

student.city = "Bathinda";

console.log(student);

// ====================================================
// Deleting Properties
// ====================================================

delete student.course;

console.log(student);

// ====================================================
// Object Methods
// ====================================================

let person = {

    name: "Mehak",

    greet() {

        console.log("Hello!");

    }

};

person.greet();

// ====================================================
// this Keyword
// ====================================================

let book = {

    title: "JavaScript Basics",

    details() {

        console.log("Book: " + this.title);

    }

};

book.details();

// ====================================================
// Real-Life Examples
// ====================================================

// Car Object

let car = {

    brand: "Toyota",
    model: "Fortuner",
    year: 2025

};

console.log(car);

// Mobile Object

let mobile = {

    brand: "Samsung",
    model: "S24",
    price: 70000

};

console.log(mobile);

// Employee Object

let employee = {

    name: "Rahul",
    department: "IT",
    salary: 50000

};

console.log(employee);

// ====================================================
// Important Notes
// ====================================================

// Objects store data in key-value pairs.

// Properties store data.

// Methods store functions.

// Dot notation is commonly used.

// Bracket notation is useful when the
// property name is stored in a variable.

// 'this' refers to the current object.

// ====================================================
// Common Mistakes
// ====================================================

// Wrong

//console.log(student.Name);

// JavaScript is case-sensitive.

// Correct

//console.log(student.name);

// ----------------------------------------------------

// Wrong

//student.city;

// This only accesses the property.

// Correct

//console.log(student.city);

// ----------------------------------------------------

// Wrong

//let user = {

//    name = "Mehak"

//};

// Correct

//let user = {

//    name: "Mehak"

//};

// ====================================================
// Practice Questions
// ====================================================

/*
1. Create a student object.

2. Print all object properties.

3. Update one property.

4. Add a new property.

5. Delete a property.

6. Create an object with a method.

7. Use 'this' inside the method.
*/

// ====================================================
// Challenge Questions
// ====================================================

/*
1. Create a book object with:
   - title
   - author
   - price
   - pages

2. Add a details() method that prints all
the book information.

3. Create a car object and update its year.

4. Create an employee object and delete one
property.
*/