// 1. Variables and Data Types [cite: 2]

// String
let name = "Alice"; 

// Number
let age = 25; 

// Array 
let fruits = ["Apple", "Banana", "Cherry"]; 

// Set 
let uniqueNumbers = new Set([1, 2, 3, 3, 4]); 

// Object 
const person = {
    firstName: "John",
    lastName: "Doe"
};

// Logging them to the console 
console.log("Name:", name);
console.log("Age:", age);
console.log("Fruits Array:", fruits);
console.log("Unique Numbers Set:", uniqueNumbers);
console.log("Person Object:", person);

// 2. Loops
console.log("--- For Loop ---");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("--- While Loop ---");
let j = 1;
while (j <= 10) {
    console.log(j);
    j++;
}

// 3. Find the Largest Number in an Array
function findLargestNumber(numbers) {
    let largest = numbers[0]; 
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}

const arr = [3, 7, 2, 9, 5]; // Example from assignment [cite: 9]
console.log("Largest Number:", findLargestNumber(arr)); // Output: 9