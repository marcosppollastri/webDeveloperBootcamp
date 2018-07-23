var express = require('express');
var app = express();

app.get("/", function(req, res){
    console.log("Request to /");
    res.send("Hello welcome to my assignament!");
});

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal;
    console.log(animal);
    var sound = "";
    var flag = false;
    if (animal === "pig"){
        sound = "'Oink'";
        flag = true;
    }
    if (animal === "cow"){
        sound = "'Moo'";
        flag = true;
    }
    if (animal === "dog"){
        sound = "'Woof woof'";
        flag = true;
    }

    if (flag){
        res.send("The " + animal + " says "+ sound + "!");
    } else{
        res.send("Sorry, page not found... What are you doing with your life?");
    }

});

app.get("/repeat/:word/:n", function(req, res){
    var n = Number(req.params.n);
    var word = req.params.word;
    var message = "";
    for (var i = 0; i < n; i++){
        message += word + " ";
    };
    res.send(message);
});

app.get("*", function(req, res){
    res.send("Sorry, page not found... What are you doing with your life?");
});




app.listen(1337, '127.0.0.1', function(){
    console.log("Server has started!");
});