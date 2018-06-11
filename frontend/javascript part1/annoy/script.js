var msj ;
var flag = true;
while (flag){
    msj = prompt("Are we there yet?");
    if(msj.includes("yes")){
        alert("yei we made it!");
        flag = false;
    }
}
alert("END");