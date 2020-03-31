const numberA = 2;
const numberB = 3;

const multiply = (a, b) => a * b;

const number = multiply(numberA, numberB);

debugger;

for (let i = 0; i < number; i++) {
    const newHeader = document.createElement("h3");
    newHeader.innerText = i;
    const element = document.getElementById("replace-me");
    element.appendChild(newHeader);
};