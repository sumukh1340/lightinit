//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
let alert = require('alert')

mongoose.connect("mongodb+srv://admin-sumukh:sumukh13578@cluster0.tc1w9.mongodb.net/Light?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});

//mongodb+srv://admin-sumukh:<password>@cluster0.tc1w9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const postSchema = {
  name: String,
  email: String,
  message: String,
  number:Number
};

const Post = mongoose.model("Post", postSchema);

app.get("/", function(req, res){
  res.render("home");
});

app.get("/about", function(req, res){
  res.render("about");
});

app.get("/contact", function(req, res){
  res.render("contact");
});

app.get("/products",function(req,res){
  res.render("products")
});

app.get("/list",function(req,res){
  res.render("list")
});
app.get("/donate",function(req,res){
  res.render("donate")
});
app.get("/gallery",function(req,res){
  res.render("gallery")
});



app.post("/contact", function(req, res){
  const post = new Post({
    name: req.body.name,
    email:req.body.email,
    message: req.body.message,
    number: req.body.number
  });
  post.save(function(err){
   if (!err){
       res.redirect("/");
   }
 });
});
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}


app.listen(port, function() {
  console.log("Server has started successfully");
});
