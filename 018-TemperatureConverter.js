/*
====================================================
File   : 018-TemperatureConverter.js
Topic  : Temperature Conversion Program
Author : Mehak
Version: 1.0
====================================================

A Temperature Converter is a program that converts
temperature from one unit to another.

The most common conversions are:

✔ Celsius to Fahrenheit
✔ Fahrenheit to Celsius

This program is a great example of using:
- Variables
- User Input
- if...else
- Functions
- Arithmetic Operators
*/

// ====================================================
// Celsius to Fahrenheit Formula
// ====================================================

// Formula:
// Fahrenheit = (Celsius × 9 / 5) + 32

let celsius = 25;

let fahrenheit = (celsius * 9 / 5) + 32;

console.log(celsius + "°C = " + fahrenheit + "°F");

// ====================================================
// Fahrenheit to Celsius Formula
// ====================================================

// Formula:
// Celsius = (Fahrenheit - 32) × 5 / 9

let tempF = 86;

let tempC = (tempF - 32) * 5 / 9;

console.log(tempF + "°F = " + tempC + "°C");

// ====================================================
// Using Functions
// ====================================================

function celsiusToFahrenheit(celsius) {

    return (celsius * 9 / 5) + 32;

}

console.log(celsiusToFahrenheit(30));

function fahrenheitToCelsius(fahrenheit) {

    return (fahrenheit - 32) * 5 / 9;

}

console.log(fahrenheitToCelsius(95));

// ====================================================
// User Input Example
// ====================================================

let userTemperature = 40;

let result = (userTemperature * 9 / 5) + 32;

console.log("Converted Temperature: " + result + "°F");

// ====================================================
// Real-Life Examples
// ====================================================

// Weather Applications

let weather = 32;

console.log("Today's Temperature: " + weather + "°C");

// Medical Thermometer

let bodyTemp = 98.6;

console.log("Body Temperature: " + bodyTemp + "°F");

// Science Laboratory

let experimentTemp = 100;

console.log(experimentTemp + "°C");

// ====================================================
// Important Notes
// ====================================================

// Celsius and Fahrenheit are different
// temperature scales.

// Always use the correct formula.

// Temperature values can contain decimals.

// Functions make conversion programs reusable.

// ====================================================
// Common Mistakes
// ====================================================

// Wrong Formula

// (celsius * 5 / 9) + 32

// Correct Formula

// (celsius * 9 / 5) + 32

// ----------------------------------------------------

// Wrong Formula

// (fahrenheit - 32) * 9 / 5

// Correct Formula

// (fahrenheit - 32) * 5 / 9

// ====================================================
// Practice Questions
// ====================================================

/*
1. Convert 15°C to Fahrenheit.

2. Convert 104°F to Celsius.

3. Create a function that converts
Celsius to Fahrenheit.

4. Create a function that converts
Fahrenheit to Celsius.

5. Display both temperatures together.
*/

// ====================================================
// Challenge Questions
// ====================================================

/*
1. Build a Temperature Converter using
user input.

2. Allow the user to choose between
Celsius and Fahrenheit conversion.

3. Display the converted temperature
with the correct unit.

4. Create a menu-driven Temperature
Converter program.
*/