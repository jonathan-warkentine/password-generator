// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwLengthRangeEl = document.querySelector('#pw-length-range');
var pwLengthEl = document.querySelector('#pw-length');

var symbolsCheckboxEl = document.querySelector('#include-symbols');
var lowercaseCheckboxEl = document.querySelector('#include-lowercase');
var uppercaseCheckboxEl = document.querySelector('#include-uppercase');
var numbersCheckboxEl = document.querySelector('#include-numbers');

const symbols = "<>`~!@#$%^&*()-_=+[]{}|";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";

pwLengthEl.textContent = "Password Length: " + pwLengthRangeEl.value;



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function pwLengthModified() {
  
  if (pwLengthRangeEl.value == pwLengthRangeEl.max) {
    pwLengthEl.textContent = "Password Length: " + pwLengthRangeEl.value + " (max)";
  }
  else if (pwLengthRangeEl.value == pwLengthRangeEl.min) {
    pwLengthEl.textContent = "Password Length: " + pwLengthRangeEl.value + " (min)";

  }
  else {
    pwLengthEl.textContent = "Password Length: " + pwLengthRangeEl.value;
  }

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
pwLengthRangeEl.addEventListener("mousemove", pwLengthModified);
// symbolsCheckboxEl.addEventListener("change", checkboxChange);


function generatePassword() {

  let password = "";
  let allowableCharacters = "";

  if (symbolsCheckboxEl.checked) {
    allowableCharacters += symbols;
  }

  if (lowercaseCheckboxEl.checked) {
    allowableCharacters += lowercase;
  }

  if (uppercaseCheckboxEl.checked) {
    allowableCharacters += uppercase;
  }

  if (numbersCheckboxEl.checked) {
    allowableCharacters += numbers;
  }

  if (allowableCharacters.length == 0){
    return "No possible characters! Please check at least one box below."
  }

  for (let i=0; i<pwLengthRangeEl.value; i++){
    password += allowableCharacters.charAt(Math.floor(Math.random() * allowableCharacters.length));
  }

  return password;
}