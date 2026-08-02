/*
==========================================================
Topic       : Number Guessing Game
Author      : Mehak
Version     : 1.0
Description : A simple game where the user guesses a
              randomly generated number.
==========================================================

Prerequisites:
✔ Variables
✔ Data Types
✔ Type Conversion
✔ Operators
✔ Conditional Statements
✔ Loops
✔ Math Objects
✔ Random Number Generator
✔ User Input
✔ isNaN()

==========================================================
Contents
==========================================================

1. Introduction
2. Algorithm
3. Source Code
4. Code Explanation
5. Sample Output
6. Features
7. Future Improvements
8. Important Notes
9. Common Mistakes
10. Practice Questions
11. Challenge Questions

==========================================================
Introduction
==========================================================

The Number Guessing Game is a beginner-friendly JavaScript
project. The computer generates a random number and the
user keeps guessing until the correct number is entered.

Concepts Used:
• Math.random()
• Math.floor()
• while loop
• if...else
• Number()
• isNaN()

Browser Only Example

==========================================================
Algorithm
==========================================================

1. Generate a random number.
2. Ask the user to guess a number.
3. Convert the input into a number.
4. Check if the input is valid.
5. Compare the guess with the random number.
6. Display a hint (Too High or Too Low).
7. Repeat until the correct answer is guessed.
8. Display the total number of attempts.

==========================================================
Source Code
==========================================================
*/

const minimum = 1;
const maximum = 10;

const answer =
Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

let guess;
let attempts = 0;
let running = true;

while (running) {

    guess = window.prompt(
        `Guess a number between ${minimum} and ${maximum}`
    );

    guess = Number(guess);

    if (isNaN(guess)) {
        console.log("Please enter a valid number.");
    }

    else if (guess < minimum || guess > maximum) {
        console.log("Please enter a valid number within the range.");
    }

    else {

        attempts++;

        if (guess < answer) {
            console.log("📉 Too Low!");
        }

        else if (guess > answer) {
            console.log("📈 Too High!");
        }

        else {
            console.log("🎉 Congratulations!");
            console.log(`Correct Number: ${answer}`);
            console.log(`Attempts: ${attempts}`);
            running = false;
        }

    }

}

/*
==========================================================
Code Explanation
==========================================================

minimum and maximum define the range.

Math.random() generates a random decimal number.

Math.floor() converts the decimal into a whole number.

The while loop keeps running until the correct guess.

isNaN() validates the user's input.

attempts counts how many guesses were made.

==========================================================
Sample Output
==========================================================

Guess a number between 1 and 10

5
Too High!

2
Too Low!

3
Congratulations!
Correct Number: 3
Attempts: 3

==========================================================
Features
==========================================================

✔ Random number generation
✔ Input validation
✔ Unlimited attempts
✔ Hint system
✔ Attempt counter

==========================================================
Future Improvements
==========================================================

• Difficulty Levels
• Maximum Attempts
• Score Board
• Play Again Option
• Timer
• Best Score

==========================================================
Important Notes
==========================================================

• Always validate user input.
• Use Number() before comparing values.
• Keep the game loop running until the correct answer.

==========================================================
Common Mistakes
==========================================================

❌ Forgetting Number()

❌ Forgetting isNaN()

❌ Using Math.random() without Math.floor()

==========================================================
Practice Questions
==========================================================

1. Change the range to 1–100.
2. Count wrong guesses separately.
3. Display remaining attempts.
4. Add a Play Again option.
5. Display the best score.

==========================================================
Challenge Questions
==========================================================

1. Add Easy, Medium and Hard difficulty.
2. Limit the number of attempts.
3. Add points based on attempts.
4. Build a graphical version using HTML and CSS.
5. Save the best score using localStorage.

==========================================================
