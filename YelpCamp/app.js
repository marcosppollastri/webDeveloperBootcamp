var express     = require("express");
var app         = express();
var bodyParser  = require("body-parser");
var mongoose    = require("mongoose");

mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true});

//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing")
});

//Index route . Show all campgrounds in DB
app.get("/campgrounds", function(req, res){
    Campground.find({}, function(err, campgrounds){
        if(err){
            console.log(err);
        } else{
            res.render("index", {campgrounds: campgrounds});
        }
    });

    // res.render("campgrounds", {campgrounds: campgrounds})
});

//POST - Create a campground in DB
app.post("/campgrounds", function(req, res){

    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCampground = {
        name: name,
        image: image,
        description: description
    };
    //Create campground in the DB
    Campground.create(newCampground, function(err, newlyCreated){
        if (err) {
            console.log(err)
        } else{
            res.redirect("/campgrounds");
        }
    });

    // get data fro mfrom and add to campgrounds array
    // redirect back to campgrounds page
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

//Show campground route
app.get("/campgrounds/:id", function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        if (err) {
            console.log(err)
        } else{
            res.render("show.ejs", {campground: foundCampground});
        }
    });
});

app.listen(8000, '127.0.0.1', function(){
    console.log("YelpCamp server has started!");
});