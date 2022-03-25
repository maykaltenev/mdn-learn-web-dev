

let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';
// // Add your code here
// Convert the string into an array, removing the + characters in the process. Save the result in a variable called myArray.
let myArray = myString.split('+');
console.log(myArray);
// Store the length of the array in a variable called arrayLength.
let arrayLength = myArray.length;
console.log(arrayLength);
// Store the last item in the array in a variable called lastItem.
let lastItem = myArray[myArray.length - 1];
console.log(lastItem);

// Don't edit the code below here!
section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = `Array: ${myArray}`;

let para2 = document.createElement('p');
para2.textContent = `The length of the array is ${arrayLength}.`;

let para3 = document.createElement('p');
para3.textContent = `The last item in the array is "${lastItem}".`;

section.appendChild(para1);
section.appendChild(para2);
section.appendChild(para3);
