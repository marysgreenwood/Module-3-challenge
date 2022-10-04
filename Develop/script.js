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

//Define function to retrieve random element
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

//Declare generatePassword function
var generatePassword = function(){
  //Determine password length
  var passwordLength= prompt("How many characters should be in your password?");
  if (passwordLength <8 || passwordLength >12) {
    alert ("Password length must be between 8 and 128 characters");
    return generatePassword()
  }
  //Determine possible characters
  var passwordOptions= [];
  var guaranteedCharacters= [];
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
);
  if (hasSpecialCharacters) {
    passwordOptions = passwordOptions.concat (specialCharacters);
    guaranteedCharacters.push (getRandom (specialCharacters));
  }
  var hasNumericCharacters = confirm(
    'Click OK to confirm including numbers.'
  );
  if (hasNumericCharacters){
    passwordOptions= passwordOptions.concat (numericCharacters);
    guaranteedCharacters.push (getRandom (numericCharacters));
    console.log (guaranteedCharacters)
  }
  var hasLowercaseCharacters = confirm(
    'Click OK to confirm including lowercase characters.'
  );
  if (hasLowercaseCharacters){
    passwordOptions= passwordOptions.concat(lowerCasedCharacters)
    guaranteedCharacters.push (getRandom (lowerCasedCharacters));
  }
  var hasUppercaseCharacters = confirm(
    'Click OK to confirm including uppercase characters.'
  );
  if (hasUppercaseCharacters){
    passwordOptions= passwordOptions.concat(upperCasedCharacters)
    guaranteedCharacters.push (getRandom (upperCasedCharacters))
  }
  
   // Function for getting a random element from an array
   var result= [];
   var passwordRandom = [];
   for (var i =0; i<passwordLength; i++){
    passwordRandom= getRandom(passwordOptions);
    result.push (passwordRandom)
  }
  for (var i=0; i<guaranteedCharacters.length; i++){
    result[i]=guaranteedCharacters[i];
  }
  return result.join('');
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
