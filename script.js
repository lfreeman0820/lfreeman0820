var numberCharacters = [ "0", "1", "2", "3", "4", "5", "6", "7", "8"];
var upperCaseCharacters = [ "A", "B", "C", "3", "4", "5", "6", "7", "8"];
var lowerCaseCharacters = [ "a", "b", "c", "3", "4", "5", "6", "7", "8"];
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[',
'~','-','_','.'];
// Fill in the rest of the ABCs and abcs above


function passwordChoices () {
  var length = parseInt (prompt ("How long would you like the password to be?"));
  if (length <8) { (alert ("Password needs to be at least 8 characters long")) 
  
  }
  if (length >128) { (alert ("Password needs to be less than 128 characters long")) 
  
}
   var gotNumberCharacters = confirm ("Do you want number characters?");
   var gotUpperCaseCharacters = confirm ("Do you want upper case characters?");
   var gotLowerCaseCharacters = confirm ("Do you want lower case characters?");
   var gotSpecialCharacters = confirm ("Do you want special characters?");

  if (gotNumberCharacters === false &&
    gotUpperCaseCharacters === false &&
    gotLowerCaseCharacters === false &&
    gotSpecialCharacters === false) {
      alert ("Password needs to be less than 128 characters long")
      return;
    }

  var passwordOptions = {
    length: length,
    gotNumberCharacters: gotNumberCharacters,
    gotUpperCaseCharacters: gotUpperCaseCharacters,
    gotLowerCaseCharacters: gotLowerCaseCharacters,
    gotSpecialCharacters: gotSpecialCharacters
    
  }  
 return passwordOptions


}

function myRandom(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomElement = array[randomIndex]
  return randomElement

}


function generatePassword() {
var selectedChoices = passwordChoices ()
var result = []
var store1Character = []
var store2Character = []
if (selectedChoices.gotNumberCharacters) {
  store1Character = store1Character.concat(gotNumberCharacters);
  store2Character.push(myRandom(gotNumberCharacters))
  
}
// do if statements one for uppercase, lowercase and special above!

for (i = 0; i < selectedChoices.length; i++) {
  var store1Character = myRandom(store1Character)
  result.push(store1Character)
}

for (i = 0; i < store2Character.length; i++) {
  result[i] = store2Character[i];
}
return result.join("")

}








// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

