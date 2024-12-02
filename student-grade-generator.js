// Import the readline module to take input from the console
const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,  // Input is taken from standard input (console)
    output: process.stdout  // Output will be displayed in standard output (console)
});

// Function to determine the grade based on marks
function getGrade(marks) {
    // Check if the marks are not a valid number or are out of range
    if (marks < 0 || marks > 100 || isNaN(marks)) {
        console.log("Please enter a valid number between 0 and 100.");
    } 
    // Check the range to assign the proper grade
    else if (marks > 79) {
        console.log("Grade: A");
    } else if (marks >= 60) {
        console.log("Grade: B");
    } else if (marks >= 49) {
        console.log("Grade: C");
    } else if (marks >= 40) {
        console.log("Grade: D");
    } else {
        console.log("Grade: E");
    }
}

// Prompt the user for input
rl.question("Enter student marks (0-100): ", (input) => {
    const marks = Number(input); // Convert the input string to a number
    getGrade(marks); // Call the function with the provided marks
    rl.close(); // Close the readline interface
});