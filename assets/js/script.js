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

//This populates the label for the password length slider input
pwLengthEl.textContent = "Password Length: " + pwLengthRangeEl.value;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//add event listener to register a change to the password length selector and update the HTML element accordingly
pwLengthRangeEl.addEventListener("mousemove", pwLengthModified);

//add event listener to copy password text if the containing box is clicked
document.querySelector("#password").addEventListener("click", copyPassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //encourage user to click password to copy
  document.querySelector("#GenPass").textContent = "Click to copy!";
  document.querySelector("#GenPass").setAttribute("style", "text-align: center;");
}

    //function generatePassword generates a random password based on the user-inputed
    //password length, and the allowable characters specified
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


//function pwLengthModified() adjusts the display of the password length field
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

//function copyPassword() copies the generated password from the #password element, 
//copies to user's clipboard, and notifies the user
function copyPassword() {

  //avoids copying a blank password field
  if (document.querySelector("#password").value=="") {
    return;
  }
  
  //copy password to clipboard
  navigator.clipboard.writeText(document.querySelector("#password").value);

  //notify user
  document.querySelector("#GenPass").textContent = "Copied!";
  document.querySelector("#GenPass").setAttribute("style", "text-align: center;");
}