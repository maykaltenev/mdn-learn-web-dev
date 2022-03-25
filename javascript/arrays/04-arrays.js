const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];

// Add your code here

// Find the index of the "Eagles" item, and use that to remove the "Eagles" item.

const eagleIndex = birds.indexOf("Eagles");
const eBirds = birds.splice(eagleIndex, 1);
const stringBirds = eBirds.toString();
let checker = stringBirds.startsWith('E')
console.log(stringBirds)
// console.log(eagleIndex);
// console.log(eBirds);
// let birdsToString = birds.toString();
// console.log(birdsToString);
for (let i = 0; i < birds.length; i++) {
    let checker = birds[i].startsWith('E');
    console.log(checker);

}

// Don't edit the code below here!

// section.innerHTML = ' ';

// const para1 = document.createElement('p');
// para1.textContent = eBirds;

// section.appendChild(para1);