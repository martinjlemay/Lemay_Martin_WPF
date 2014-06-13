//Martin Lemay 6/12/2014 Expressions Assignment

// This is a calculator for the amount of signal loss for RG6 Coax Cable for a cable technician

var feetOfRG6 = prompt("Please enter how many ft of cable"); // How many ft of cable used?
var frequency = prompt("Please enter 100,400,700, or 900mhz"); //List of available frequencies
var lossPerFoot100 = .02; //Loss per foot at 100mhz
var lossPerFoot400 = .043; //Loss per foot at 400mhz
var frequency1 = frequency("100");
var frequency2 = frequency("400");
var frequency3 = frequency("700");
var frequency4 = frequency("900");
var lossPerFoot700 = .056; //Loss per foot at 700mhz
var lossPerFoot900 = .06; //Loss per foot at 900mhz

var TotalLoss100 = feetOfRG6 * lossPerFoot100; // Feet of cable times the loss per foot at 100mhz
var TotalLoss400 = feetOfRG6 * lossPerFoot400; // Feet of cable times the loss per foot at 400mhz
var TotalLoss700 = feetOfRG6 * lossPerFoot700; // Feet of cable times the loss per foot at 700mhz
var TotalLoss900 = feetOfRG6 * lossPerFoot900; // Feet of cable times the loss per foot at 900mhz

console.log("At " + frequency1 + "mhz with a length of " + feetOfRG6 + "ft, RG6 coax cable loses "
    + TotalLoss100 + "db of signal" + "\nAt " + frequency2 + "mhz with a length of " + feetOfRG6 + "ft, " +
    "RG6 coax cable loses " + TotalLoss400 + "db of signal\nAt " + frequency3 + " with a length of " + feetOfRG6 +
    "RG6 coax cable loses " + TotalLoss700 + "db of signal" + "\nAt " +frequency4 + "mhz with a length of " +
    feetOfRG6 +  "ft, RG6 coax cable loses " + TotalLoss900 + "db of signal");
/* EX..At 100 mhz with a length of 100 ft, RG6 coax cable loses 2db of signal */
