// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Declare generatePassword function
var generatePassword = function(){
  //Determine password length
  var passwordLength= prompt("How many characters should be in your password?");
  if (passwordLength <8 || passwordLength >12) {
    alert ("Password length must be between 8 and 128 characters");
    return generatePassword()
  }
  //Determine possible characters
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
);
  if (hasSpecialCharacters == true) {
    var passwordOptions += specialCharacters
  }
  var hasNumericCharacters = confirm(
    'Click OK to confirm including numbers.'
  );
  if (hasNumericCharacters== true){
    passwordOptions += numericCharacters
  }
  var hasLowercaseCharacters = confirm(
    'Click OK to confirm including lowercase characters.'
  );
  if (hasLowercaseCharacters== true){
    passwordOptions += lowerCasedCharacters
  }
  var hasUppercaseCharacters = confirm(
    'Click OK to confirm including uppercase characters.'
  );
  if (hasUppercaseCharacters== true){
    passwordOptions += upperCasedCharacters
  }
  
   // Function for getting a random element from an array
  function getRandom(options) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
