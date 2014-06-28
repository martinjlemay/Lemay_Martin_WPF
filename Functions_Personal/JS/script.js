/**
 * Created by Martin Lemay on 6/26/14.
 */
// Function_Personal

firstName= prompt("What is your first name?");
lastName= prompt("What is your last name?");
game1= prompt("Final score of game 1?");//score of game 1
game2= prompt("Final score of game 2?");//score of game 2
game3= prompt("Final score of game 3?");//score of game 3
var gameAverage = Number(game1) + Number(game2) + Number(game3) /3;
totalOfAllGames = Number(game1) + Number(game2) + Number(game3);

var result = bowler1(firstName,lastName,totalOfAllGames,gameAverage);
var bowler1= function(firstName, lastName,totalOfAllGames,gameAverage){
    var game1= prompt("Final score of game 1?");//score of game 1
    var game2= prompt("Final score of game 2?");//score of game 2
    var game3= prompt("Final score of game 3?");//score of game 3
    totalOfAllGames = Number(game1) + Number(game2) + Number(game3);
    gameAverage = Number(game1) + Number(game2) + Number(game3) /3;
    return bowler(firstName,lastName,totalOfAllGames,gameAverage)



};
console.log(result)