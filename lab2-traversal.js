// Assignment 1: Access Parent Element
const child = document.getElementById('childPara');
console.log("Parent Element:", child.parentElement); 

// Assignment 2: Access Children
const parent = document.getElementById('parentDiv');
console.log("Children Collection:", parent.children); 

// Assignment 3: Access Sibling Elements
const secondItem = document.getElementById('secondItem');
console.log("Previous Sibling:", secondItem.previousElementSibling);
console.log("Next Sibling:", secondItem.nextElementSibling);