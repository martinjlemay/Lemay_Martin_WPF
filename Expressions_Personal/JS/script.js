//Martin Lemay 6/12/2014 Expressions_Personal Assignment

//This is the average of a bowlers league night 3 games.

var firstName= prompt("What is your first name?");
var lastName= prompt("What is your last name?");
var game1= prompt("Final score of game 1?");//score of game 1
var game2= prompt("Final score of game 2?");//score of game 2
var game3= prompt("Final score of game 3?");//score of game 3
var totalOfAllGames= Number(game1) + Number(game2) + Number(game3);// all 3 games added together
var average= totalOfAllGames / 3; //total of all 3 games divided by the amount of 3 games played


console.log("totalOfAllGames)