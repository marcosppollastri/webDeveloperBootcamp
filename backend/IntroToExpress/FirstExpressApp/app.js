var express = require('express');
var app = express();

// "/" => "Hi there"
// "/bye" -> "Goodbye"
// "/dog" -> "MEOW"
app.get("/", function(req, res){
    console.log("Request to /");
    res.send("Hi there!");
});

app.get("/bye", function(req, res){
    console.log("Request to /bye");
    res.send("Bye!");
});

app.get("/dog", function(req, res){
    console.log("Request to /dog");
    res.send("MEOW!");
});

//Tell express to listen for request

app.listen(1337, '127.0.0.1', function(){
    console.log("Server has started!");
});