/**
 * Created by Martin Lemay on 6/26/14.
 */
// Function_Personal

/*
game1= prompt("Final score of game 1?");//score of game 1
game2= prompt("Final score of game 2?");//score of game 2
game3= prompt("Final score of game 3?");//score of game 3
var gameAverage = Number(game1) + Number(game2) + Number(game3) /3;
totalOfAllGames = Number(game1) + Number(game2) + Number(game3);
*/


var firstName= prompt("What is your first name?");
var lastName= prompt("What is your last name?");

var bowler1;
var game1= prompt("Final score of game 1?");//score of game 1
var game2= prompt("Final score of game 2?");//score of game 2
var game3= prompt("Final score of game 3?");//score of game 3
var totalOfAllGames = Number(game1) + Number(game2) + Number(game3);
var average = totalOfAllGames / 3;
bowler1= function(firstName, lastName, totalOfAllGames, average) {
    average= totalOfAllGames /3;
    totalOfAllGames = game1 + game2 + game3;
    return bowler1(firstName, lastName, totalOfAllGames, average);

};
console.log(bowler1(firstName,lastName,totalOfAllGames,average));