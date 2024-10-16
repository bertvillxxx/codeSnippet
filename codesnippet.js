const prompt = require('prompt-sync')();

let uname = prompt("Register your Username:");        //declare a var that will hold the uname, use a user input method
let pword = prompt("Register your passcode:");        //declare a var that will hold the pword, use a user input method 
let rePword = prompt("Re-enter your passcode:");      //declare a variable that will hold the re-pword, use a user input method

if(pword === rePword){                               //compare the Registered Password and Re-entered Password
  console.log("Congratulations! You have succesfully registered!");         //window Pop-up to Congratulate the user for registering.
 let logInUname = prompt("Username: ");                       //declare a variable that will hold the uname on LogIn 
  if (logInUname === uname){                                        //compare the registered uname and entered uname on LogIn
 let logInPword = prompt("Password: ");                             //if correct uname, declare a var that will hold the encoded password on LogIn
 (logInPword === pword)                                             //compare the registered pword and entered pword on LogIn
? console.log("Welcome to DSA, " + uname)                               //window Pop-up to Congratulate the user for successful LogIn.
: console.log("Incorrect Password, Re-run the code!");                      //window Pop-up to Inform the user of the incorrect passcode
  }
 else { 
console.log("Incorrect Username, Re-run the code!");                          //window Pop-up to Inform the user of the incorrect username
   } 
} else { 
 console.log("Password does not Match, Re-run the code!");                    //window Pop-up to Inform the regpCode and re-entered pCode does not match
}
