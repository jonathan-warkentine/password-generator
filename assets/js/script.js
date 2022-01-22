// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwLengthRangeEl = document.querySelector('#pw-length-range');
var pwLengthEl = document.querySelector('#pw-length-label');
var pwLength = pwLengthRangeEl.value; //this is used to track user-input changes to pw length within the pwLengthModified function

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

// button event listener deprecated: the app registers any user click, filtering according to the algorithm below
// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
//added an event function to control which elements' clicks are registered and which are ignored
document.addEventListener("click", function(event){
  
  if (event.target.type == "checkbox" || event.target.nodeName == "LABEL" || event.target.getAttribute("id") == "generate") {
    writePassword();
  }
});


//add event listener to register a change to the password length selector and update the HTML element accordingly
pwLengthRangeEl.addEventListener("mousemove", pwLengthModified);
pwLengthRangeEl.addEventListener("click", pwLengthModified);

//add event listener to copy password text if the containing box is clicked
document.querySelector("#password").addEventListener("click", copyPassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //encourage user to click password to copy
  document.querySelector("#GenPass").textContent = "Click to copy!";
}

    //function generatePassword generates a random password based on the user-inputed
    //password length, and the allowable characters specified
    function generatePassword() {

      let password = "";
      let allowableCharacters = "";

      //if user has permitted symbols in the pw, adding to the string of possible characters
      if (symbolsCheckboxEl.checked) {
        allowableCharacters += symbols;
      }

      //if user has permitted lowercase in the pw, adding to the string of possible characters
      if (lowercaseCheckboxEl.checked) {
        allowableCharacters += lowercase;
      }
      
      //if user has permitted uppercase in the pw, adding to the string of possible characters
      if (uppercaseCheckboxEl.checked) {
        allowableCharacters += uppercase;
      }
      
      //if user has permitted numbers in the pw, adding to the string of possible characters
      if (numbersCheckboxEl.checked) {
        allowableCharacters += numbers;
      }
      
      //if user has permitted not permitted any characters in the pw, alerting the user and returning without attempting to generate pw
      if (allowableCharacters.length == 0){
        return "No possible characters! Please check at least one box below."
      }

      //generate pw with allowed characters
      for (let i=0; i<pwLengthRangeEl.value; i++){
        password += allowableCharacters.charAt(Math.floor(Math.random() * allowableCharacters.length));
      }
      
      return password;
    }


//function pwLengthModified() adjusts the display of the password length field
function pwLengthModified() {
  
  //checks to see if the range elements value has actually changed, then generates a pw and updates the range label if so
  if (pwLength != pwLengthRangeEl.value){
    writePassword();
    pwLength = pwLengthRangeEl.value;

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
}

//function copyPassword() copies the generated password from the #password element, 
//copies to user's clipboard, and notifies the user
function copyPassword() {

  //avoids copying a blank or user-message occupied password field
  if (document.querySelector("#password").value=="" || document.querySelector("#password").value.contains(" ")) {
    return;
  }
  
  //copy password to clipboard
  navigator.clipboard.writeText(document.querySelector("#password").value);

  //notify user
  document.querySelector("#GenPass").textContent = "Copied!";
}