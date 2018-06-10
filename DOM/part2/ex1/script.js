var button = document.querySelector("button");
var body = document.querySelector("body");
var flag = true;

button.addEventListener("click",function(){
    if(flag){
        body.style.backgroundColor = "purple";
        flag = !flag;
    }else{
        body.style.backgroundColor = "white";
        flag = !flag;
    }
});