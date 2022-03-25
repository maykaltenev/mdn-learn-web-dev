let myArray = ["Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri"];

// Add your code here

// Remove the last item in the array.
let lastItem = myArray.pop();
console.log(lastItem)
console.log(myArray)
// Add two new names to the end of the array.
myArray.splice(7, 0, 'Moto', 'Mami');
console.log(myArray);
// Go over each item in the array and add its index number after the name inside parentheses, for example Ryu (0)
for (let i = 0; i < myArray.length; i++) {
    myArray[i] = myArray[i] + " " + `(${i})`;
    console.log(myArray[i]);
}
// Finally, join the array items together in a single string called myString, with a separator of "-".
let myString = myArray.join(' - ');
console.log(myString);
// Don't edit the code below here!

// section.innerHTML = ' ';

// let para1 = document.createElement('p');
// para1.textContent = myString;

// section.appendChild(para1);