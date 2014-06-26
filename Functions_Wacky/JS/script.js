/**
 * Created by Martin Lemay on 6/25/14.
 * Function_Wacky
 */

//******** Rock, Paper, Scissors *******


var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
} console.log("Computer: " + computerChoice);
var compare = function(choice1, choice2){
    if (userChoice === userChoice){
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
compare(userChoice,computerChoice);{
    if (userChoice=== "paper"){
        if (computerChoice === "rock"){
            console.log ("paper wins");
        }else {
          console.log ("scissors wins");
        }
    }
}
compare(userChoice,computerChoice);{
    if(userChoice==="scissors"){
        if(computerChoice==="rock"){
            console.log ("rock wins");
        }else{
            console.log("scissors win");
        }
    }
}

