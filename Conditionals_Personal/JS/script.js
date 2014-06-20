/**
 * Created by Martin Lemay on 6/19/14. Conditionals_Personal
 */

// Going to the movies or Chuck-E-Cheese or Miniature golf

var rain= prompt("Is it raining? Please type \'yes\' or \'no\' "); //Asks if it is raining out.
var babySitter= prompt("Is a babysitter available. \'yes\' or \'no\' "); //Asks if there is a babysitter available

if (babySitter == "yes"){ //if a babysitter is a yes and no rain go miniature golfing
    if (rain == "no"){
        console.log("We will be going to play miniature golf.");
    }else if(rain == "yes"){  //if a babysitter is yes and rain is yes go to movies
        console.log("We will be going to the movies.");
    }
}
if (babySitter == "no"){
    console.log("We will take our child to Chuck-E-Cheese.");
}// if no babysitter then we go to chuck-e-cheese.



