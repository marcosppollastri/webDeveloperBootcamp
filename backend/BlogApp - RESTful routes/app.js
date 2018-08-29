var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyparser = require('body-parser')

mongoose.connect('mongodb://localhost:27017/blogapp', {useNewUrlParser: true});
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyparser.urlencoded({extended: true}));

//Mongoose scheema and model

var blogScheema = new mongoose.Schema({
    title:  String,
    image:  String,
    body:   String,
    created: {
        type    : Date,
        default : Date.now
    }
})

var Blog = mongoose.model('Blog', blogScheema);

//Restful routes
app.get('/', function(req, res){
    res.redirect('/blogs');
})

app.get('/blogs', function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log(err);
        } else {
            res.render('index', {blogs: blogs});
        }
    });
});
//NEW ROUTE
app.get("/blogs/new", function(req, res){
    res.render('new');
});
//CREATE ROUTE

app.listen(8001, '127.0.0.1', function(){
    console.log("Blogapp server just started!")
});