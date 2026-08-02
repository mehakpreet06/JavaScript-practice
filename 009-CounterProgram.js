/*
==========================================================
Topic       : Counter Program in JavaScript
Author      : Mehak
Version     : 1.0
Description : A simple counter application using buttons
              to increase, decrease and reset a number.
==========================================================

Prerequisites:
✔ Variables
✔ User Input
✔ Math Objects
✔ DOM Basics (document.getElementById)
✔ Event Handling

==========================================================
Contents
==========================================================

1. Introduction
2. HTML Structure
3. JavaScript Logic
4. Explanation
5. Real-Life Uses
6. Important Notes
7. Common Mistakes
8. Practice Questions
9. Challenge Questions

==========================================================
Introduction
==========================================================

A Counter Program is a beginner-friendly JavaScript project
that increases, decreases, or resets a number when the user
clicks different buttons.

It helps you understand:

• Variables
• DOM Manipulation
• Event Handling
• Functions
• Updating Web Page Content

Browser Only Example

==========================================================
HTML Structure
==========================================================

<!--

<h1 id="countLabel">0</h1>

<button id="decreaseBtn">Decrease</button>
<button id="resetBtn">Reset</button>
<button id="increaseBtn">Increase</button>

-->

==========================================================
JavaScript Code
==========================================================
*/

let count = 0;

document.getElementById("increaseBtn").onclick = function () {
    count++;
    document.getElementById("countLabel").textContent = count;
};

document.getElementById("decreaseBtn").onclick = function () {
    count--;
    document.getElementById("countLabel").textContent = count;
};

document.getElementById("resetBtn").onclick = function () {
    count = 0;
    document.getElementById("countLabel").textContent = count;
};

/*
document.getElementById() requires a browser
==========================================================
Explanation
==========================================================

count++  -> Increases the value by 1

count--  -> Decreases the value by 1

count = 0 -> Resets the value

textContent updates the value displayed on the webpage.

==========================================================
Real-Life Uses
==========================================================

• Shopping cart quantity
• Like button counter
• Visitor counter
• Scoreboard
• Attendance counter

==========================================================
Important Notes
==========================================================

• textContent changes the displayed text.
• onclick runs a function when the button is clicked.
• Variables remember the current count.

==========================================================
Common Mistakes
==========================================================

❌ Forgetting to update textContent.

❌ Using the wrong id name.

❌ Forgetting to initialize count.

==========================================================
Practice Questions
==========================================================

1. Increase the counter by 2 instead of 1.
2. Prevent the counter from going below 0.
3. Display "Maximum Reached" after 10.
4. Change the text color when the count is negative.
5. Display "Positive", "Negative", or "Zero".

==========================================================
Challenge Questions
==========================================================

1. Add a +5 and -5 button.
2. Add keyboard shortcuts.
3. Save the count using localStorage.
4. Add an animation whenever the number changes.

==========================================================
// Note:
// This project uses basic DOM concepts.
// If you haven't studied the DOM yet,
// revisit this file after completing the DOM section.