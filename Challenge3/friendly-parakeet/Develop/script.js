// Assignment Code (provided)
var generateBtn = document.querySelector("#generate");

//prompt to determine criteria for password input
function generatePassword () {
  var passLength = prompt ("Your password must be between 8 to 128 characters long.  Please enter your requested length of password.");
  var upCase = confirm ("Your password much include at least one capital letter.");
  var lowCase = confirm ("Your password must; contain at least one lowercase letter.");
  var lowCase = confirm ("Your password must contain at least one number.");
  var special = confirm ("Your password must contain at least one special character.")
};
 
// Write password to the #password input (provided)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

//determine what can be used in password
  var upCase = [A-Z];
  var lowCase = [a-z];
  var numbers = [0-9];
  var special = "~!@#$%^&*()";

  passwordText.value = password;
  
}
//initial prompt for length input


// Add event listener to generate button (provided)
generateBtn.addEventListener("click", writePassword);