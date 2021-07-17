// Assignment code here
var generatePassword 

//Distintas variables
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numeric = ['0','1','2','3','4','5','6','7','8','9'];
var specialChar = ['<','(','[','{','\\','^','-','=','$','!','|',']','}',')','?','*','+','.','>'];

// Seleccionando el boton generar password,
// lo mandamos al final con el event listener para 
//el momento del click
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  alert("Welcome to the password generator, please select the following criteria!")
  var length = window.prompt ("How many character do you want on your password? Please select a number between 8 and 128");
  if (length < 8 || length> 128){
    alert ("Number not valid. Please select again");
    writePassword ()
  }
    
  

  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Le agregamos un event listener al la variable creada
//que selecciona con query selector el boton... despues
// llamamos al writePassword function.
generateBtn.addEventListener("click", writePassword);

