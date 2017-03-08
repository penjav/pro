/**
 * http://usejsdoc.org/
 */
var express = require("express");
var path = require("path");
var http = require("http");
var morgan = require("morgan");

var gell = express();

// routes and middleware
gell.use(express.static(path.resolve(__dirname,"table")));
gell.set("views",path.join(__dirname,"table"));
gell.set("view engine","ejs");

// create a global arrays to store all arrays
  // this makes fileViews available in all views


// use morgan's logger'
gell.use(morgan("dev"));

// routes
gell.get("/",function(req,res){
	res.render("main");
});

/**
gell.get("/home",function(req,res){
	res.render("home");
});
gell.get("/service",function(req,res){
	res.render("service");
	return res.redirect("/main");
});
gell.get("/about",function(req,res){
	res.render("about");
	return res.redirect("/main");
});
gell.get("/contact",function(req,res){
	res.render("contact");
	return res.redirect("/main");
	
});

*/
gell.use(function(req,res){
	res.status(404).render("page not found");
});

// create server
http.createServer(gell).listen(3000,function(){
	console.log("server started on port 3000");
});