/**
 * Created by Martin Lemay on 6/26/14.
 */
// Function_Personal

// How to average a 3 bowler team.




firstName=prompt("Type first name of bowler 1");
lastName=prompt("Type last name of bowler 1");
game1=prompt("bowler 1 score of game 1?");
game2=prompt("bowler 1 score of game 2?");
game3=prompt("bowler 1 score of game 3?");

var bowler1= bowler(game1, game2, game3);

function bowler(game1, game2, game3){
    totalScore= Number(game1)+ Number(game2)+ Number(game3);
    average= totalScore /3;
    return average;
}
console.log(firstName + " " + lastName +"\'s average = ", bowler1);

firstName=prompt("Type first name of bowler 2");
lastName=prompt("Type last name of bowler 2");
game1=prompt("bowler 2 score of game 1?");
game2=prompt("bowler 2 score of game 2?");
game3=prompt("bowler 2 score of game 3?");

var bowler2= bowler(game1, game2, game3);

console.log(firstName + " " + lastName +"\'s average = ", bowler2);

firstName=prompt("Type first name of bowler 3");
lastName=prompt("Type last name of bowler 3");
game1=prompt("bowler 3 score of game 1?");
game2=prompt("bowler 3 score of game 2?");
game3=prompt("bowler 3 score of game 3?");

var bowler3= bowler(game1, game2, game3);

console.log(firstName + " " + lastName +"\' average = ", bowler3);

console.log("The team\'s average is ", (bowler1 + bowler2 + bowler3)/3 );


