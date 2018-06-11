var score = document.querySelector("h1");
var p1score = document.getElementById("p1score");
var p2score = document.getElementById("p2score");
var maxscore = document.querySelector("h5");
var input = document.querySelector("input");
var p1button = document.getElementById("p1button");
var p2button = document.getElementById("p2button");
var reset = document.getElementById("reset");
var counter1 = 0;
var counter2 = 0;
var max = 5;
var gameover = false;

function addPoint1(){
    
};

function reset(){
    counter1 = 0;
    counter2 = 0;
    score.textContent(counter1+" to "+counter2)
    gameover = false;
};



p1button.addEventListener("click", function(){
    if (!gameover) {
        counter1++;
        p1score.textContent = counter1;
        if (counter1 === max) {
            p1score.style.color = "green";
            gameover = true;
        }
    } 
});

p2button.addEventListener("click", function(){
    if (!gameover) {
        counter2++;
        p2score.textContent = counter2;
        if (counter2 === max) {
            p2score.style.color = "green";
            gameover = true;
        }
    } 
});

reset.addEventListener("click", function(){
    counter1 = 0;
    counter2 = 0;
    p2score.textContent = counter2;
    p1score.textContent = counter1;
    p1score.style.color = "black";
    p2score.style.color = "black";



    gameover = false;

});


