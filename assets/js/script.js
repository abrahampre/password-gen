
// Creating Variables
var generateBtn = document.querySelector("#generate");
var passwordOptionsSelected2 = [];


//Function to pick the options with a window confirm

function confirmData (){
  //uppercase confim
  var upperCaseConfirm = window.confirm ("Do you want uppercase in your password?");
    //introducing upper case if selected
    if (upperCaseConfirm){
     var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
     //introducing if positive
     passwordOptionsSelected2 =  passwordOptionsSelected2.concat(upperCase);
     console.log(passwordOptionsSelected2);
    };
     //same steps with all the options required
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
    //return to formula if non of the options is selected
    if (upperCaseConfirm ===false && lowerCaseConfirm ===false && numericConfirm ===false && specialCharConfirm === false){
      window.alert("Please select at least one criteria!");
      confirmData();
    };
  console.log(passwordOptionsSelected2);
};

//start of the function
function writePassword() {
  //requesting length of password from user
  alert("Welcome to the password generator, please select the following criteria!");
  var lengthOfPassword = window.prompt ("How many character do you want on your password? Please select a number not less than 8 or grater than 128");
  if (lengthOfPassword < 8 || lengthOfPassword> 128){
    alert ("Number not valid. Please select again");
    writePassword ()
  };
 //insert the confirm data function that is written above
  confirmData();

 //take the length of the confirm data
  console.log("from here we are going to take the length",passwordOptionsSelected2);
 //creating number to use th elength of options selected on confirmData function
  var lengthOfOptions = passwordOptionsSelected2.length;
 
  var generatePassword = "";
    ////foor loop to get the random selected from the options picked on confirmData()
    for(var i=0; i<lengthOfPassword; i++){
      //Creating a random number from the length options
      randomNumber= (Math.floor(Math.random()*lengthOfOptions)); //<---this one working
      
      console.log ("random number", randomNumber);
      //picking the options randomly with the random number
      passwordOptionsSelected2[randomNumber];
      console.log(passwordOptionsSelected2[randomNumber])
      //passing the value to the generate password to then send it to the page  
      generatePassword += passwordOptionsSelected2[randomNumber]; 
      console.log("this is the generated password",generatePassword);
   
    };
  

 
  var passwordText = document.querySelector("#password");
  //passing the password generated from the for lool into the webpage.
  passwordText.value = generatePassword;

}

generateBtn.addEventListener("click", writePassword);

