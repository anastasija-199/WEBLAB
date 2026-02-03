// Assignment 1: Changing Content
const para = document.getElementById('paragraph');
if (para) {
    para.textContent = "DOM Manipulation is fun!";
}

// Assignment 2: Changing Style
const btn = document.getElementById('styleButton');
const box = document.getElementById('styleDiv');

if (btn && box) {
    btn.addEventListener('click', () => {
        box.style.color = 'blue';
    });
}

// Assignment 3: Adding New Elements Dynamically
const list = document.getElementById('dynamicList');
if (list) {
    for (let i = 1; i <= 3; i++) {
        const li = document.createElement('li');
        li.textContent = `Dynamic Item ${i}`;
        list.appendChild(li);
    }
}