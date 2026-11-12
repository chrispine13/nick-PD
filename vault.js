const firstSecretNumber=
const secondSecretNumber=
//setting up the secret numbers


//the correct answer requires mathematical addition
const correctCombination=firstSecretNumber + secondSecretNumber
//set up the secret passkey
const secretPasskey="Opensesame"
//welcome to the game and start playing
alert("WELCOME TO THE SECURITY VAULT CHALLANGE")

//CONDITIONS AND LOGIC


//GATE ONE:MATH LOCK

let userMathGues=prompt("GATE ONE: SOLVE THIS PUZZLE TO UNLOCK THE KEYPAD.\n what is "+firstSecretNumber+"?")
//use strict equalities 
if(Number(userMathGues) === correctCombination) 
    {alert("corect! keypad unlocked proceed to the inner gate")
        //gate 2: the riddle passkey
let userPasskeyGues=prompt("GATE TWO:Enter the secret passkey riddle (case-sensitive)");
//check if the  text input matches the string
if(userPasskeyGues===secretPasskey){alert("Acces GRANTED! Welcome to the secret vault")}
if(userPasskeyGues!=secretPasskey){alert("Acces DENIED! try another password")}
    }
    else{
        //if you typed "55"(string Concatination)or na incorect number{"acces denied incorect combination the vault will be locked"}
    }