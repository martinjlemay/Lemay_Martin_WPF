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

if (chokePulled = true){
    prompt(ropePulled);
}else{
    prompt(chokePulled);
}
if (ropePulled = true){
    prompt(snowBlowerRun);
}else{
    prompt(ropePulled);
}
if (snowBlowerRun = true){
    prompt(runRough);
}else{
    prompt(ropePulled);
}
if (runRough = true){
    prompt(chokePushed);
}else{
    console.log("You should up and running. Push in choke after running a minute or two." );
}
if (chokePushed = true){
    prompt(runSmooth);
}else{
    prompt(chokePushed);
}
if (runSmooth = true){
    console.log("You should be up and running")
}else{
    console.log("Pull choke until engine runs rough, then push choke in.")
}
