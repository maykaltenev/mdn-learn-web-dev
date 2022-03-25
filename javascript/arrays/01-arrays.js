// In this task we'd like you to create an array of three items, stored inside a variable called myArray.
let myArray = ['hamburger', 'fried potatoes', 'pizza', 'coffee', 'tea'];
// modify the first two items in the array using simple bracket notation and assignment.
let firstItem = 'cheeseburger';
let secondItem = 'belgian fried fries'
myArray[0] = firstItem;
myArray[1] = secondItem;
console.log(myArray);


// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = `Array: ${myArray}  `;

section.appendChild(para1);