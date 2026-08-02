/*
====================================================
Topic : Strings in JavaScript
Author: Mehak
====================================================

A string is a sequence of characters enclosed in:
1. Single Quotes (' ')
2. Double Quotes (" ")
3. Backticks (` `)

Strings are used to store and manipulate text.
*/

// ====================================================
// Creating Strings
// ====================================================

let firstName = "Mehak";
let lastName = 'Preet';
let fullName = `${firstName} ${lastName}`;

console.log(firstName);
console.log(lastName);
console.log(fullName);

// ====================================================
// length Property
// ====================================================

let language = "JavaScript";

console.log(language.length);

// Output: 10

// ====================================================
// charAt()
// ====================================================

console.log(language.charAt(0));
console.log(language.charAt(4));

// Output:
// J
// S

// ====================================================
// indexOf()
// ====================================================

console.log(language.indexOf("a"));
console.log(language.indexOf("Script"));

// ====================================================
// lastIndexOf()
// ====================================================

let fruit = "banana";

console.log(fruit.lastIndexOf("a"));

// ====================================================
// toUpperCase()
// ====================================================

console.log(language.toUpperCase());

// ====================================================
// toLowerCase()
// ====================================================

console.log(language.toLowerCase());

// ====================================================
// repeat()
// ====================================================

console.log("Hi ".repeat(3));

// ====================================================
// startsWith()
// ====================================================

console.log(language.startsWith("Java"));
console.log(language.startsWith("Script"));

// ====================================================
// endsWith()
// ====================================================

console.log(language.endsWith("Script"));
console.log(language.endsWith("Java"));

// ====================================================
// includes()
// ====================================================

console.log(language.includes("Script"));
console.log(language.includes("Python"));

// ====================================================
// trim()
// ====================================================

let user = "    Mehak    ";

console.log(user.trim());

// ====================================================
// trimStart()
// ====================================================

console.log(user.trimStart());

// ====================================================
// trimEnd()
// ====================================================

console.log(user.trimEnd());

// ====================================================
// replace()
// ====================================================

let sentence = "I like Java.";

console.log(sentence.replace("Java", "JavaScript"));

// ====================================================
// replaceAll()
// ====================================================

let msg = "Hi Hi Hi";

console.log(msg.replaceAll("Hi", "Hello"));

// ====================================================
// slice()
// ====================================================

console.log(language.slice(0, 4));
console.log(language.slice(4));

// ====================================================
// padStart()
// ====================================================

let number = "25";

console.log(number.padStart(5, "0"));

// Output:
// 00025

// ====================================================
// padEnd()
// ====================================================

console.log(number.padEnd(5, "0"));

// Output:
// 25000

// ====================================================
// Method Chaining
// ====================================================

let username = "   mehak   ";

username = username.trim().charAt(0).toUpperCase();

console.log(username);

// Output:
// M

// ====================================================
// Real-Life Examples
// ====================================================

// Username Formatting
let username2 = "   john   ";
console.log(username2.trim().toUpperCase());

// Email Check
let email = "mehak@gmail.com";
console.log(email.includes("@"));

// Password Masking
let password = "1234";
console.log(password.padStart(8, "*"));

// ====================================================
// Important Notes
// ====================================================

// length is a property.
// Most string methods return a new string.
// Strings are immutable (the original string doesn't change).

// ====================================================
// Common Mistakes
// ====================================================

// Wrong:
// language.Length

// Correct:
// language.length

// ====================================================
// Practice Questions
// ====================================================

/*
1. Print the length of your name.
2. Print the first character of your city.
3. Convert your name to uppercase.
4. Check whether your email contains '@'.
5. Replace your name with another name.
6. Pad a number with zeros.
7. Remove extra spaces using trim().
8. Slice the first 5 letters of "Programming".
*/

// ====================================================
// Challenge Questions
// ====================================================

/*
1. Format a username by removing spaces and converting it to uppercase.

2. Check if a password contains at least one number.

3. Create an email validator using includes() and endsWith().
*/