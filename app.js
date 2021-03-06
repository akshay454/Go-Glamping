var express        =   require("express"),
    app            =   express(),
    bodyParser     =   require("body-parser"),
    mongoose       =   require("mongoose"),
	passport       =   require("passport"),
	flash		   =   require("connect-flash"),
	LocalStrategy  =   require("passport-local"),
	methodOverride =   require("method-override"),
	Campground     =   require("./models/campground"),
	Comment		   =   require("./models/comment"),
	User           =   require("./models/user"),
	seedDB         =   require("./seeds");


// requiring routes
var commentRoutes = require("./routes/comments"),
	campgroundsRoutes = require("./routes/campgrounds"),
	indexRoutes = require("./routes/index");


var url = process.env.DATABASEURL 
mongoose.connect(url);

app.set("view engine","ejs");
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended : true})); // to support URL-encoded bodies
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
// seed the database
//seedDB();


// PAASPORT CONFIG
app.use(require("express-session")({
	secret: "This is Kabir Singh",  /// Secret can be anything
	resave: false,
	saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(function(req,res,next){
	res.locals.currentUser = req.user;
	res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	next();
});

app.use(indexRoutes);
app.use("/campgrounds",campgroundsRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);

app.listen(process.env.PORT || 3000, process.env.IP , function(){
	console.log(" App is serving");
});