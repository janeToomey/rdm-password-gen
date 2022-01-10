var generatebtn = document.querySelector("#generate");

//variables

//var length = Number(prompt("Enter a password length between 8 and 128"));
var lowerChar = {
    lowerChar: "abcdefghijklmnopqrstuvwxyz"};
var upperChar = {
    uppercase:"ABCDEFGHIJKLMNOPQRSTUVWXYZ"};
var numberChar = {
      numeric:"0123456789"};
var specialChar = {
      special:"!@#$%^&*?/-~:;"};

var length="";
var userLower;
var userUpper;
var userNumbers;
var userSpChar;

function generatePassword(){

    var length = pareseInt(prompt("Enter a password length between 8 and 128"));

    while (length <= 7 || length >= 129){
        alert("Oops! Please enter again, password length must be between 8 and 128 characters");
        var length = parseInt(prompt("Enter a password length between 8 and 128"));
  
}

//user prompts

var userLower = confirm(
    "Do you want to use lowercase letters in your password? Hit OK to use them in your password and Cancel to exclude them from your password"
);

var userUpper =confirm(
    "Do you want to use uppercase letters in your password? Hit OK to use them in your password and Cancel to exclude them from your password"
);

var userNumbers =confirm(
    "Do you want to use numbers in your password? Hit OK to use them in your password and Cancel to exclude them from your password"
);

var userSpChar =confirm(
    "Do you want to use special characters in your password? Hit OK to use them in your password and Cancel to exclude them from your password"
);






var passwordKey = [];

if (userLower){
    passwordKey = passwordKey.concat(lowerChar);
}

if (userUpper){
    passwordKey =passwordKey.concat(upperChar);
}
if (userNumbers){
    passwordKey = passwordKey.concat(numberChar);
}
if (userSpChar){
    passwordKey = passwordKey.concat(specialChar);
}



var randomPassword="";

for (var i=0; i<userLength; i++){
    randomPassword =
    randomPassword + 
    passwordKey[Math.floor(Math.random()*passwordKey.length)];

    

}

return randomPassword;

function writePassword(){
    var password = generatePassword();
    var passwordText= document.querySelector("#password");

    passwordText.value = password;
}


generatebtn.addEventListener("click", writePassword);




