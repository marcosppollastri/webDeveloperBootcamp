var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var campgrounds = [
    {name: "Salmon Creek", image: "https://farm4.staticflickr.com/3103/2677233699_de6e456567_o_d.jpg"},
    {name: "Granite Hill", image: "https://farm5.staticflickr.com/4248/34589721790_caf326a52a_o_d.jpg"},
    {name: "Montain Goat's Rest", image: "https://farm4.staticflickr.com/3867/14423528780_d31ea2794a_o_d.jpg"},
    {name: "Talampaya Vay", image: "https://farm4.staticflickr.com/3837/14679255190_95ebe52754_o_d.jpg"}
    
];

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing")
});

app.get("/campgrounds", function(req, res){


    res.render("campgrounds", {campgrounds: campgrounds})
});

app.post("/campgrounds", function(req, res){

    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {
        name: name,
        image: image
    };
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");

    // get data fro mfrom and add to campgrounds array
    // redirect back to campgrounds page
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.listen(8000, '127.0.0.1', function(){
    console.log("YelpCamp server has started!");
});