var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");
// &apikey=b8d8c72d

app.get("/", function(req, res){
    res.render("search")
});

app.get("/result", function(req, res){
    var query = req.query.search;
    var url = "http://www.omdbapi.com/?s="+ query + "&apikey=b8d8c72d";
    request(url, function(error, response, body){
        if (!error && response.statusCode == 200){
            var data  = JSON.parse(body);
            res.render("results", {data: data})
        }
    });
});

app.listen(1338, '127.0.0.1', function(){
    console.log("Server has started!");
});