var color="white";
var inter;
var counter=0;

function startTime(){
 inter=   window.setInterval(changeColor,500);
}


function changeColor(){

counter++;
if(counter ==15){
    clearInterval(inter);
}
if(color=="white"){
    document.getElementById("chngingtxt").style.color=color;
    color="red";
}
else if(color=="red")
{
   
    document.getElementById("chngingtxt").style.color=color;
    color="yellow";

}
else if(color=="yellow"){
    
    document.getElementById("chngingtxt").style.color=color;
    color="white";
}
}
