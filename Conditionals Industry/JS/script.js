/**
 * Created by Martin Lemay on 6/19/14. Conditionals_Industry
 */


var incomingSignal = prompt("What is the incoming signal strength?"); // What is the signal from main cable into house.
var numberOfJacks = prompt("How many jacks are there going to be 1-8"); //List how many jacks are in the house
var signalLoss = numberOfJacks * 3.5; // This is the amount of loss due to amount of splits
var totalSignal = incomingSignal - signalLoss;


if (totalSignal <= -15){
    console.log("You will have" + signalLoss + "db loss with " + numberOfJacks + " cable jacks. Your signal on " +
    "this system will be " + totalSignal + " Technician must add booster.");
}else{
console.log("You will have "  + signalLoss + "db loss with " + numberOfJacks + " cable jacks. Your signal on " +
    "this system will be " + totalSignal);}