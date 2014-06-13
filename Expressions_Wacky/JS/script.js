//Martin Lemay 6/12/2014 Expressions_Wacky

// How many eggs and pancakes you need for all of your guests for breakfast


var adults= prompt("How many adults are coming?");
var children= prompt("How many children are coming?");
var eggsNeeded= (adults * 3) + (children * 2);
var pancakesNeeded= (adults * 3) + (children * 2);

console.log("If " + adults + " adults and " + children + " children are coming for breakfast. \nYou will need " +
eggsNeeded + " eggs and " + pancakesNeeded + " pancakes.")
