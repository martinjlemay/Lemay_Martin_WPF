/**
 * Created by Martin Lemay on 6/24/14.
 * Functions_Industry
 */


// Aquarium building guide lines for rectangle tank tanks with dimensions between the sizes 15" x 24" and 33" x 96"

var l = prompt("Home many inches long will tank be"); //user prompt for length
while(isNaN(l) || l===""){ //validation
    l = prompt("Home many inches long will tank be");//Re-prompt for validation
}
    var w = prompt("How many inches wide will tank be");//user prompt for width
while(isNaN(w) || w===""){//validation
    w = prompt("Home many inches long will tank be");//Re-prompt for validation
}
var h = prompt("How many inches tall will tank be");//user prompt for height
while(isNaN(h) || h===""){//validation
    h = prompt("Home many inches long will tank be");//Re-prompt for validation
}
var totalGallons = volume(l,w,h);
function volume(l,w,h){
    gallons = Math.round((l * w * h) /231);// Math for gallons in tank
    return gallons; //

}
console.log("Your aquarium will hold " + totalGallons + " gallons of water.");
   if (h < 18){ //height of tank check for thickness of glass needed
       console.log("Builder can use 6mm or thicker glass.");
   }else if(h >18 <= 24){//height of tank check for thickness of glass needed
        console.log("Builder must use 9mm or thicker glass");
   }else if(h >24 <=27){//height of tank check for thickness of glass needed
            console.log("Builder must use 12mm or thicker glass");
   }else{console.log("Builder must use 16mm or thicker glass")
   }
