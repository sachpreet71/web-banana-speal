// console.log("script tag is working fine");
// alert("this is alert box");
// let a = prompt("Please enter your name");

const button = document.querySelector('#btn-translate');
const textInput = document.querySelector('.text-input');
const output = document.querySelector('#output');

var serverURL = "	https://api.funtranslations.com/translate/groot.json";

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
  console.log("error occured", error);
}




function clickHandler() {
  // output.innerHTML = "jnjfnsjnf" + textInput.value;
  var inputText = textInput.value;

  // calling server
  fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
      var translatedText = json.contents.translated;
      output.innerText = translatedText;
    })
    .catch(errorHandler);
};

button.addEventListener("click", clickHandler)