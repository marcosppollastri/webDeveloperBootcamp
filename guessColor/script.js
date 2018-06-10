

var colors = generateRandomColors(6);
// var difficulty = pickDifficulty();
var title = document.querySelector("h1");

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
 color = generateRandomColors(6);
 pickedColor = pickColor();
 colorDisplay.textContent = pickedColor;
 for(var i = 0; i < squares.length; i++) {
     // add initial colors to squares
     squares[i].style.backgroundColor = colors[i];
   }
});

colorDisplay.textContent = pickedColor;

paintSquares();

function paintSquares(){

  for(var i = 0; i < squares.length; i++) {
      // add initial colors to squares
      squares[i].style.backgroundColor = colors[i];
      squares[i].addEventListener("click", function(){
          var clickedColor = this.style.backgroundColor;
          if (clickedColor === pickedColor) {
              message.textContent = "Correct!!";
              changeColor(pickedColor);
              title.style.backgroundColor = clickedColor;
          } else{
              this.style.backgroundColor = "#232323";
              message.textContent = "Wrong!!";

          }
      });
  }
}


function changeColor(color){
    for(var i=0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];

}

function generateRandomColors(num){
    var array = [];
    for(var i = 0; i<num; i++){
        array.push(randomColor());
    }
    return array;
}

function randomColor(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    var color = "rgb("+red+", "+green+", "+blue+")";
    return color;


}

function pickDifficulty(){

}
