//jshint esversion:6
require('dotenv').config();
//There is no need of creating a constant as {dotenv} will be
//running all times and also it has to be put above the entire code.
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

// const md5 = require("md5");


// const bcrypt = require("bcrypt");
// const saltRounds = 10;//Better to declare salt rounds after requiring.

const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');

// const encrypt = require("mongoose-encryption");
//This module of npm helps require the mongoose encryption
//method that we can use to store encrypted passwords rather than plain-text.


const app = express();

// console.log(process.env.SECRET);

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(session({

secret: "ourlittlesecret.",
resave: false,
saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());



mongoose.connect("mongodb://localhost:27017/userDB",{useNewUrlParser: true});


//To create a more encrypted data storage capability for our DB,
//We have to create a different format of making a mongoose schema
//object for mongoose rather than a JS schema.


const userSchema = new mongoose.Schema ({

email: String,
password: String,
googleId: String,
secret: String


});



// const secret = "Thisisourlittlesecret.";//This is our Decryption Key and its an example key so don't get too  smart ;)
// //Very often now and then and mostly in the past Devs ended up posting their API and Keys online for people to study
// //and ended up regretting it BIG TIME! so we will create a tactic known as {Environmental Variables} to combat such
// //events and stop them from happening.We will add this in a {.env} file
// //which will be a hidden file type by default.



// userSchema.plugin(encrypt, { secret: process.env.SECRET, encryptedFields: ["password"]});
//It is important to create this {plugin} option
//before creating a {mongoose.model}.Because
//we will be sending the plugin into the {userSchema}
//beforehand.
//Also in the {plugin} we are going to use {encryptedFields} to
//define which field data we will be encrpting and since for simple
//demonstration purposes i will be only encrypting the {password} field
//in our DB.If you like you can add more field like encryptedFields: ["password",........]
//which ever you would like to also encrypt.


userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);


const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

// passport.serializeUser(User.serializeUser());//Hides information in the cookie.
// passport.deserializeUser(User.deserializeUser());//Breaks the cookie to reveal the information.
//Since we are using Google Auth we will use a different approach for
//serialize and de-serialize.

passport.serializeUser(function(user,done){
  done(null,user.id);

});
passport.deserializeUser(function(id,done){
  User.findById(id,function(err,user){
    done(err,user);
  });
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/secrets"

    //callbackURL is from your Google API dashboard where you created
    //'Authorized redirect URIs'.
    //For the {userProfileURL} issue as many of you are aware Of
    //has been fixed and it used to be an issue due of the api subsidizing
    //Google+ accounts for 10 Years but you shouldn't worry about it anymore.
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

app.get("/", function(req,res){
  res.render("home");
});

app.get("/auth/google",

passport.authenticate("google",{scope: ["profile"]})

);//I got stuck here because of creating a callback function,
//going to the auth google page doesnt need a callback in this situation,
//always check your code you might write more than you should be.

app.get("/auth/google/secrets",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("/secrets");
  });

app.get("/login", function(req,res){
  res.render("login");
});

app.get("/register", function(req,res){
  res.render("register");
});

app.get("/secrets", function(req,res){
User.find( {"secret": {$ne: null}}, function(err, foundUsers){
  if(err){ //Basically what we are doing here is that when different
    //users submit a secret it'll be stacked onto one page and others can
    //see the secrets of others but will never know whose who!
    console.log(err);
  } else {
    if(foundUsers){
      res.render("secrets",{usersWithSecrets: foundUsers});
    }
  }
});
});

app.get("/submit",function(req,res){
  if(req.isAuthenticated()){
    res.render("submit");//If logged in.
  } else {
    res.redirect("/login");//if not logged in yet authenticated,you are forced to login then.
  }
});

app.post("/submit",function(req,res){
  const submittedSecret = req.body.secret;//Info is taken from the input named "secret" in the
  //{submit.ejs}

User.findById(req.user.id,function(err,foundUsers){
//We will be able to store the secret text into the relevant User's
//DB table.
if(err){
  console.log(err);
} else {
  if(foundUsers){
    foundUsers.secret= submittedSecret;
    foundUsers.save(function(){
      res.redirect("/secrets");
    });
  }
}

});

});

app.get("/logout",function(req,res){
  req.logout();
  res.redirect("/");
});

app.post("/register",function(req,res){

User.register({username: req.body.username}, req.body.password, function(err,user){

if(err){
  console.log(err);
} else {
passport.authenticate("local")(req,res,function(){//("local") is a local Strategy.
  res.redirect("/secrets");//We are using {render} here because once the authentication
  //phase is done we should be able to go directly to {"/secrets"} if the user is already
  //logged in all thanks to "Cookies" being stored.Basically we can go back and forth between pages
  //its like a Multiple-Entry Visa rather than Single-Entry Visa.
});

}

});


//   bcrypt.hash(req.body.password, saltRounds, function(err, hash){
// //be mindful of why bcrypt encryption is being added into the "POST registry".
//
// const newUser = new User({
//   email:req.body.username,
//   password: hash
//
//   });
//
// // const newUser = new User({
// //   email:req.body.username,
// //   password: md5(req.body.password)
// //Moved into the bcrypt function but i kept it commented for here
// //so developers can go through how each level of web security works.
//
//
//
//   newUser.save(function(err){
//   if(err){
//     console.log(err);
//   } else {
//     res.render("secrets");
//   }
// });
// });
});


app.post("/login", function(req,res){

const user = new User ({
  username: req.body.username,
  password: req.body.password
});
//Once a cookie expires i.e browser is closed and re-opened we have to login again
//so therefore we have to create this method in order to callback some bits of the Cookies
//to validate and authenticate us to log in again if and only if the credentials
//are correct.
req.login(user,function(err){

if(err){
  console.log(err);

} else {
  passport.authenticate("local")(req,res,function(){
    res.redirect("/secrets");
  });
}

});


//   const username = req.body.username;
//   // const password = md5(req.body.password);
//   const password = req.body.password;
//
// User.findOne({email: username},function(err,foundUser){
// //Verification of User Data against the DB.
// if(err){
//   console.log(err);
// } else {
//   // console.log("Stuck");
//   if (foundUser) {
//     bcrypt.compare(password,foundUser.password,function(err,result){
// //For logging in this will compare the registered password from DB and the entered password
// //from the body to verify.
// // the current {function(err,result)} was {function(err,res)} but had to be changed
// //so {res.render} doesnt get confused from the {app.post}'s {res}.
// if (result === true){
//
//   res.render("secrets");
//
// }
//     });
//
//
//
//       //Be careful the page wont load if you have same email with different
//       //passwords as making them two documents.When in such situation
//       //always check the code and the DB for mistakes.
//
//   }
// }
//
// });

});


app.listen(3000,function(){
  console.log("Server started on Port 3000");
});
