/**
 * Created by Martin Lemay on 6/24/14.
 * Functions_Industry
 */


// Aquarium building guide lines for rectangle tank

var l = prompt("Home many inches long will tank be");
var w = prompt("How many inches wide will tank be");
var h = prompt("How many inches tall will tank be");
var totalGallons = volume(l,w,h);

function volume(l,w,h){
    gallons = (l * w * h) /231;
    return gallons;

}
console.log(totalGallons);