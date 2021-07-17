

var generateBtn = document.querySelector("#generate");



function confirmData (){

  var passwordOptionsSelected2 = [];
  var upperCaseConfirm = window.confirm ("Do you want uppercase in your passowrd?");
    if (upperCaseConfirm){
     var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
     passwordOptionsSelected2 = passwordOptionsSelected2.concat(upperCaseConfirm);
    };
  var lowerCaseConfirm = window.confirm ("Do you want lowercase in your passowrd?");
    if (lowerCaseConfirm){
      var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
     passwordOptionsSelected2 = passwordOptionsSelected2.concat(lowerCase);
    };
  var numericConfirm = window.confirm("Do you want numers in your password?");
    if (numericConfirm){
     var numeric = ['0','1','2','3','4','5','6','7','8','9'];
     passwordOptionsSelected2 = passwordOptionsSelected2.concat(numeric);
    };
  var specialCharConfirm = window.confirm("Do you want special characters in your password");
    if (specialCharConfirm){
     var specialChar = ['<','(','[','{','\\','^','-','=','$','!','|',']','}',')','?','*','+','.','>'];
     passwordOptionsSelected2 = passwordOptionsSelected2.concat(specialChar);
    };

  while(upperCase ===false  && lowerCase ===false && numeric ===false && specialChar === false){
    window.alert("Please select at least one criteria!");
    confirmData();
  };
  console.log(passwordOptionsSelected2);


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
  randomNumber= (Math.floor(Math.random()*lengthOfPassword)); //<---this one working
  passwordOptionsSelected2 [randomNumber];
  console.log(passwordOptionsSelected2[randomNumber])
  generatePassword += passwordOptionsSelected2[randomNumber]; //<---this one doesnt work error not a function
  console.log(generatePassword);
  //console.log ("this is the generated password" ,generatePassword);



   //este es el bueno -->>var randomNumber= (Math.floor(Math.random()*lengthOfPassword));
   console.log ("random number", randomNumber);
   
    };
  

  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = generatePassword;

}

// Le agregamos un event listener al la variable creada
//que selecciona con query selector el boton... despues
// llamamos al writePassword function.
generateBtn.addEventListener("click", writePassword);

