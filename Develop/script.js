
// Seleccionando el boton generar password,
// lo mandamos al final con el event listener para 
//el momento del click
var generateBtn = document.querySelector("#generate");
var passwordOptionsSelected2 = "";


function confirmData (){

  var upperCaseConfirm = window.confirm ("Do you want uppercase in your passowrd?");
    if (upperCaseConfirm){
     var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    };
  var lowerCaseConfirm = window.confirm ("Do you want lowercase in your passowrd?");
    if (lowerCaseConfirm){
      var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    };
  var numericConfirm = window.confirm("Do you want numers in your password?");
    if (numericConfirm){
     var numeric = ['0','1','2','3','4','5','6','7','8','9'];
    };
  var specialCharConfirm = window.confirm("Do you want special characters in your password");
    if (specialCharConfirm){
     var specialChar = ['<','(','[','{','\\','^','-','=','$','!','|',']','}',')','?','*','+','.','>'];
    };

  while(upperCase ===false  && lowerCase ===false && numeric ===false && specialChar === false){
    window.alert("Please select at least one criteria!");
    confirmData();
  };
  // console.log(upperCase);
  // console.log(lowerCase);
  // console.log(numeric);
  // console.log(specialChar);

   var passwordOptionsSelected = upperCaseConfirm.toString () + lowerCaseConfirm.toString() + numericConfirm.toString() + specialCharConfirm.toString() ;
   console.log(passwordOptionsSelected);

   passwordOptionsSelected2 = [upperCase + lowerCase + numeric + specialChar] ;
   console.log(passwordOptionsSelected2);

   console.log(passwordOptionsSelected2.length);

  };

// Write password to the #password input
function writePassword() {

  alert("Welcome to the password generator, please select the following criteria!")
  var lengthOfPassword = window.prompt ("How many character do you want on your password? Please select a number between 8 and 128");
  if (lengthOfPassword < 8 || lengthOfPassword> 128){
    alert ("Number not valid. Please select again");
    writePassword ()
  };
 


  confirmData();
  
  
  
  var generatePassword = "";
  ////como crear un string with the for loop?????? preguntar a TA
    for(var i=0; i<lengthOfPassword; i++){
   // console.log("Array of total selected options", passwordOptionsSelected2);
   
   var randomNumber= (Math.floor(Math.random()*lengthOfPassword));
   console.log ("random number", randomNumber);
   
   //generatePassword[i]=
   
   //generatePassword += random
   
   //passwordOptionsSelected2 [randomNumber]
    //char[] text = new char[lengthOfPassword]
    
    //generatePassword += passwordOptionsSelected2[Math.floor(Math.random()*lengthOfPassword)];
   // console.log ("picked random matching length",generatePassword);
    };
    system.out.println() 

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Le agregamos un event listener al la variable creada
//que selecciona con query selector el boton... despues
// llamamos al writePassword function.
generateBtn.addEventListener("click", writePassword);

