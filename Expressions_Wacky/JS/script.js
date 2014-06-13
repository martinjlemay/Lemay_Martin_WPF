//Martin Lemay 6/12/2014 Expressions_Wacky

// How many eggs and pancakes and toast you need for all of your guests for breakfast


var adults= prompt("How many adults are eating?");// Asks how many adults are eating.
var children= prompt("How many children are eating?");//Asks how many children are eating.
var eggsNeeded= (adults * 3) + (children * 2); /*Average of 3 eggs per adult times how many adults and 2 eggs per child
times the number of children equalling eggs needed.*/
var pancakesNeeded= (adults * 4) + (children * 3);/*Average of 4 pancakes per adult times how many adults plus
3 pancakes per child times the number of children equalling pancakes needed.*/
var toastNeeded= (adults *2) + (children*2);/*Average of 2 pcs of toast per adult times how many adults added to
 2 pcs of toast per child times the number of children equalling eggs needed.*/

console.log("If " + adults + " adults and " + children + " children are coming for breakfast. \nYou will need " +
eggsNeeded + " eggs and " + pancakesNeeded + " pancakes and " + toastNeeded + "pieces of toast");
