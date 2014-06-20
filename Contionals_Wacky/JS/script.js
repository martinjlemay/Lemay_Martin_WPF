/**
 * Created by Martin Lemay on 6/19/14. Conditionals_Wacky
 */


// Starting a snow blower
var chokePulled = prompt("Pull the choke. Is Choke on? \'yes\' or \'no\'");
var ropePulled = prompt("Pull the rope. Did you pull rope? \'yes\' or \'no\'");
var snowBlowerRun = prompt("Did snow blower start? \'yes\' or \'no\'");
var runRough = prompt("Is snow blower running rough? \'yes\' or \'no\'");
var chokePushed = prompt("Push in choke. Is Choke off? \'yes\' or \'no\'");
var runSmooth = prompt("Is snow blower running smooth? \'yes\' or \'no\'");

if (chokePulled === "yes"){
    prompt(ropePulled);
    }else{
        prompt(chokePulled);
}
        if (ropePulled === "yes"){
            prompt(snowBlowerRun);
        }else{
            prompt(ropePulled);}

            if (snowBlowerRun === "yes"){
                prompt(runRough);
            }else{
                prompt(ropePulled);}

                if (runRough === "yes"){
                    prompt(chokePushed);
                }else{
                    console.log("You should up and running. Push in choke after running a minute or two." );}

                    if (chokePushed === "yes"){
                        prompt(runSmooth);
                    }else{
                         prompt(chokePushed);}

                        if (runSmooth === "yes"){
                            console.log("You should up and running")
                        }else{
                            prompt(chokePulled);}


