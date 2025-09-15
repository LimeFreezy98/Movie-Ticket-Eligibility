
// Starter code

let age = 20;

let isStudent = true; //default true

// TODO: Write an if/else statement using booleans
// to decide which message to log.

// Business Rules:
// Eligible if under 18 years old OR a student
if (age < 18 || isStudent === true) {
    message =("Discount ticket granted ✅");
} else {
    message =("Regular ticket only ❌");
}

// display result in html
document.getElementById("result").innerText = message;

