
// Creating Variables
var generateBtn = document.querySelector("#generate");
var passwordOptionsSelected2 = [];


//Function to pick the options with a window confirm

function confirmData (){
  
 var upperCaseConfirm = window.confirm ("Do you want uppercase in your password?");
    if (upperCaseConfirm){
     var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
     passwordOptionsSelected2 =  passwordOptionsSelected2.concat(upperCase);
     console.log(passwordOptionsSelected2);
    };
  var lowerCaseConfirm = window.confirm ("Do you want lowercase in your password?");
    if (lowerCaseConfirm){
      var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
     passwordOptionsSelected2 = passwordOptionsSelected2.concat(lowerCase);
     console.log(passwordOptionsSelected2);
    };
  var numericConfirm = window.confirm("Do you want numbers in your password?");
    if (numericConfirm){
     var numeric = ['0','1','2','3','4','5','6','7','8','9'];
     passwordOptionsSelected2 = passwordOptionsSelected2.concat(numeric);
     console.log(passwordOptionsSelected2);
    };
  var specialCharConfirm = window.confirm("Do you want special characters in your password?");
    if (specialCharConfirm){
     var specialChar = ['<','(','[','{','\\','^','-','=','$','!','|',']','}',')','?','*','+','.','>'];
     passwordOptionsSelected2 = passwordOptionsSelected2.concat(specialChar);
     console.log(passwordOptionsSelected2);
    };

  if (upperCaseConfirm ===false && lowerCaseConfirm ===false && numericConfirm ===false && specialCharConfirm === false){
    window.alert("Please select at least one criteria!");
    confirmData();
  };
  console.log(passwordOptionsSelected2);


};

// Write password to the #password input
function writePassword() {

  alert("Welcome to the password generator, please select the following criteria!")
  var lengthOfPassword = window.prompt ("How many character do you want on your password? Please select a number not less than 8 or grater than 128");
  if (lengthOfPassword < 8 || lengthOfPassword> 128){
    alert ("Number not valid. Please select again");
    writePassword ()
  };
 
  confirmData();
  console.log("from here we are going to take the length",passwordOptionsSelected2);

  var lengthOfOptions = passwordOptionsSelected2.length;
  console.log(passwordOptionsSelected2.length);
  var generatePassword = "";
  ////como crear un string with the for loop?????? preguntar a TA
    for(var i=0; i<lengthOfPassword; i++){
   // console.log("Array of total selected options", passwordOptionsSelected2);
  randomNumber= (Math.floor(Math.random()*lengthOfOptions)); //<---this one working
  
  
   console.log ("random number", randomNumber);
 
  
  passwordOptionsSelected2[randomNumber];
  //console.log(passwordOptionsSelected2)

  console.log(passwordOptionsSelected2[randomNumber])
  generatePassword += passwordOptionsSelected2[randomNumber]; //<---this one doesnt work error not a function
  console.log("this is the generated password",generatePassword);
   
    };
  

 
  var passwordText = document.querySelector("#password");

  passwordText.value = generatePassword;

}

// Le agregamos un event listener al la variable creada
//que selecciona con query selector el boton... despues
// llamamos al writePassword function.
generateBtn.addEventListener("click", writePassword);

