/**
 * Created by Martin Lemay on 6/25/14.
 * Function_Wacky
 */

//******** Rock, Paper, Scissors *******

var userChoice = prompt("Do you choose rock, paper or scissors?");//asks user rock,paper, or scissors
    while(userChoice !="rock" && userChoice != "paper" && userChoice != "scissors"){ //validation
        userChoice= prompt("Please type in rock paper or scissors in lower case only Only!")//Re-prompt user input
    }
var computerChoice = Math.random();//computer prints random number to determine rock,paper,or scissor
    if (computerChoice < 0.34) {
       computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
        console.log("Computer: " + computerChoice);
var compare = function(userChoice, computerChoice)
{//function to determine user choice and computer choice winner parameters
    if (userChoice === computerChoice){
        console.log("The result is a tie!");
    }
    else if (userChoice === "rock"){
        if(computerChoice === "scissors"){
            console.log ("rock wins");
        }else{
            console.log ("paper wins");
        }
    }
};
compare(userChoice,computerChoice);
{//function to determine user choice and computer choice winner parameters
    if (!(userChoice !== "paper")) {
        if (!(computerChoice !== "rock")) {
            console.log("paper wins");
        } else {
            console.log("scissors wins");
        }
    }
}
compare(userChoice,computerChoice);
{//function to determine user choice and computer choice winner parameters
    if(userChoice==="scissors"){
        if(computerChoice==="rock"){
            console.log ("rock wins");
        }else{
            console.log("scissors win");
        }
    }
}

