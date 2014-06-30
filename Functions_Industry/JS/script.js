/**
 * Created by Martin Lemay on 6/24/14.
 * Functions_Industry
 */


// Aquarium building guide lines for rectangle tank tanks with dimensions between the sizes 15" x 24" and 33" x 96"

var l = prompt("Home many inches long will tank be");
var w = prompt("How many inches wide will tank be");
var h = prompt("How many inches tall will tank be");
var totalGallons = volume(l,w,h);

function volume(l,w,h){
    gallons = Math.round((l * w * h) /231);
    return gallons;

}
console.log("Your aquarium will hold " + totalGallons + " gallons of water.");
   if (h < 18){
       console.log("Builder can use 6mm or thicker glass.");
   }else if(h >18 <= 24){
        console.log("Builder must use 9mm or thicker glass");
   }else if(h >24 <=27){
            console.log("Builder must use 12mm or thicker glass");
   }else{console.log("Builder must use 16mm or thicker glass")
   }
