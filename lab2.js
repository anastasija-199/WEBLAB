
// 6. foreach with Callback [cite: 14]
let lab2Fruits = ["Apple", "Banana", "Cherry", "Date"]; // [cite: 17]
lab2Fruits.forEach(function(fruit) {
    console.log("Fruit:", fruit); // [cite: 15]
});

// 7. Capitalize the First Letter of Each Word [cite: 18]
function capitalizeWords(sentence) {
    return sentence.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '); // [cite: 19, 20]
}

console.log(capitalizeWords("hello world from javascript!")); // [cite: 22]
// Output: "Hello World From Javascript!"

// 8. Merge Two Objects [cite: 23]
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 }; // [cite: 24, 26]
}

const lab2Person = { name: "Alice", age: 25 }; // [cite: 28]
const jobInfo = { role: "Developer", age: 30 }; // [cite: 29]
const merged = mergeObjects(lab2Person, jobInfo); // [cite: 31]

console.log(merged); // [cite: 32]
// Output: { name: "Alice", age: 30, role: "Developer" } [cite: 33]

// 9. Count Character Frequency in a String [cite: 34]
function charFrequency(str) {
    let frequency = {};
    for (let char of str) {
        frequency[char] = (frequency[char] || 0) + 1;
    }
    return frequency;
}

console.log(charFrequency("banana")); // [cite: 37]
// Output: { b: 1, a: 3, n: 2 } [cite: 38]

// 10. Create a Simple Class (ES6 Classes) [cite: 39]
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height; // [cite: 42]
    }

    static isSquare(rectangle) {
        return rectangle.width === rectangle.height; // [cite: 43]
    }
}

// Testing the class [cite: 44]
const rect = new Rectangle(10, 5);
console.log("Area:", rect.getArea()); // 50 [cite: 46]
console.log("Is Square?", Rectangle.isSquare(rect)); // false [cite: 47]

const square = new Rectangle(4, 4);
console.log("Square Area:", square.getArea()); // 16 [cite: 49]
console.log("Is Square?", Rectangle.isSquare(square)); // true [cite: 50]

// Convert to Arrow Function
const add = (a, b) => a + b; // [cite: 55, 57]
console.log("Add 5 + 3:", add(5, 3));

// Single Parameter Arrow Function
const greet = name => `Hello, ${name}`; // [cite: 61]
console.log(greet("Alice")); // [cite: 62]

function process(num, callback) {
    return callback(num); // [cite: 66]
}
const multiplyByTwo = n => n * 2; // [cite: 67]
console.log("Process callback:", process(5, multiplyByTwo)); // [cite: 68]

// Map to multiply by 2
const nums = [1, 2, 3, 4]; // [cite: 72]
const doubled = nums.map(n => n * 2); // [cite: 73]
console.log("Doubled array:", doubled);

// Filter numbers > 10
const filterList = [5, 10, 15, 20, 30, 30, 45, 1, 3, 20, 50]; // [cite: 77]
const greaterThanTen = filterList.filter(function(n) {
    return n > 10; // [cite: 78]
});
console.log("Filtered > 10:", greaterThanTen);

const numbersToSum = [10, 20, 30, 40]; // [cite: 103]
const sumTotal = numbersToSum.reduce((total, num) => total + num, 0); // [cite: 104]
console.log("Sum using reduce:", sumTotal); // [cite: 105]

// Assignment 6: Extract User Names
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
]; // [cite: 83]
const userNames = users.map(user => user.name); // [cite: 92]
console.log("User Names:", userNames); // [cite: 93]

// Assignment 7: Count Occurrences
const fruitList = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple']; // [cite: 97]
const occurrences = fruitList.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {}); // [cite: 98]
console.log("Occurrences:", occurrences); // [cite: 99]