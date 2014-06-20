/**
 * Created by Martin Lemay on 6/19/14. Conditionals_Personal
 */

// Going to the movies or Chuck-E-Cheese or Miniature golf

var rain= prompt("Is it raining? Please type \'Yes\' or \'No\' ");
var babySitter= prompt("Is a babysitter available. \'Yes\' or \'No\' ");


if (babySitter === "Yes"){
    if (rain === "No"){
        console.log("We will be going to play miniature golf.");
    }else if(rain === "Yes"){
        console.log("We will be going to the movies.");
    }
    else{

    }
}
if (babySitter === "No"){
    console.log("We will take our child to Chuck-E-Cheese.");
}



