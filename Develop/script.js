
// Seleccionando el boton generar password,
// lo mandamos al final con el event listener para 
//el momento del click
var generateBtn = document.querySelector("#generate");

function confirmData (){

  var upperCase = window.confirm ("Do you want uppercase in your passowrd?");
    if (upperCase){
      upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    };
  var lowerCase = window.confirm ("Do you want lowercase in your passowrd?");
    if (lowerCase){
      lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    };
  var numeric = window.confirm("Do you want numers in your password?");
    if (numeric){
      numeric = numeric = ['0','1','2','3','4','5','6','7','8','9'];
    };
  var specialChar = window.confirm("Do you want special characters in your password");
    if (specialChar){
      specialChar = ['<','(','[','{','\\','^','-','=','$','!','|',']','}',')','?','*','+','.','>'];
    }

  while(upperCase ===false  && lowerCase ===false && numeric ===false && specialChar === false){
    window.prompt("Please select at least one criteria!");
    confirmData();
  };
  console.log(upperCase);
  console.log(lowerCase);
  console.log(numeric);
  console.log(specialChar);

   var passwordOptionsSelected = [upperCase + lowerCase + numeric + specialChar ];
   console.log(passwordOptionsSelected);

};

// Write password to the #password input
function writePassword() {

  alert("Welcome to the password generator, please select the following criteria!")
  var length = window.prompt ("How many character do you want on your password? Please select a number between 8 and 128");
  if (length < 8 || length> 128){
    alert ("Number not valid. Please select again");
    writePassword ()
  };
    
  confirmData();
  
    for(i=0; i<length; i++){
    var generatePassword= passwordOptionsSelected[Math.floor(Math.random()*length)]
    console.log (generatePassword);
    }


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Le agregamos un event listener al la variable creada
//que selecciona con query selector el boton... despues
// llamamos al writePassword function.
generateBtn.addEventListener("click", writePassword);

