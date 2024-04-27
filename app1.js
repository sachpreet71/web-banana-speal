// console.log("script tag is working fine");
// alert("this is alert box");
// let a = prompt("Please enter your name");

const button = document.querySelector('#btn-translate');
const textInput = document.querySelector('.text-input');
button.addEventListener('click', () => {
  console.log("clicked!");
  console.log("input", textInput.value);
});