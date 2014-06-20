/**
 * Created by Martin Lemay on 6/19/14. Conditionals_Personal
 */

// Going to the movies or Chuck-E-Cheese or Miniature golf

var rain= prompt("Is it raining? Please type \'yes\' or \'no\' ");
var babySitter= prompt("Is a babysitter available. \'yes\' or \'no\' ");

if (babySitter == "yes"){
    if (rain == "no"){
        console.log("We will be going to play miniature golf.");
    }else if(rain == "yes"){
        console.log("We will be going to the movies.");
    }
    else{
    }
}
if (babySitter == "no"){
    console.log("We will take our child to Chuck-E-Cheese.");
}



