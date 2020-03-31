const button = document.getElementById("btn");
const input = document.getElementById("input-1");

// For button
const printClick = () => console.log("Click");
const printMouseOver = () => console.log("MouseOver");
const printFocus = () => console.log("Focus");

// For input
const printChange = () => console.log("Change");
const printOnInput = () => console.log("Input");

button.addEventListener("click", printClick);
button.addEventListener("mouseover", printMouseOver);
button.addEventListener("focus", printFocus);

input.addEventListener("change", printChange);
input.addEventListener("input", printOnInput);