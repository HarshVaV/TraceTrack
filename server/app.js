const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const session = require('express-session');
const ejsMate = require('ejs-mate');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const flash = require('connect-flash');

//imports user model
const User = require('./Models/user');  


//Import routers
const routes=require('./routes');



const app =express();
const path = require('path');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs',ejsMate);
app.use(express.static(path.join(__dirname,'public'))); //serves static files from the "public" directory relative to the current directory (_dirname)

app.use(bodyParser.urlencoded({extended: true})); 

app.use(express.urlencoded({extended:true})); // parasing url to object using middle-ware
app.use(express.json({extended:true})); // parasing complex-josn to object using middle-ware




//for parsing get/post request. limit=30mb-> as images will be send
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true})); 


//session
app.use(session({
    secret: 'manav is a dumb',
    resave: false,
    saveUninitialized: false
  }));
  
app.use(flash());

app.use(function(req, res, next){
    console.log(req.session);
    res.locals.currentUser = req.user;  //this is fetched from passport also used in middleware isLoggedIn to know the user.
    res.locals.error = req.flash('error', 'An error occurred.');
    res.locals.success = req.flash('success', 'Success message.');
    next();
  });



//passport initialization
app.use(passport.initialize());
app.use(passport.session()); // for user persisitent login sessions
passport.use(new LocalStrategy(User.authenticate())); // authenticate() generates a fn that is used in Passport loccalstrategy

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// Redirect to routes
app.use('/', routes);     



//MONGO-Atlas (cloub DB)
const CONNECTION_URL='mongodb+srv://manavbansalhsr:DB9WRxGqGVwEm15I@cluster0.vrvngug.mongodb.net/'
const PORT=2000;
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=>console.log(`Listening on Port ${PORT}`)))
    .catch((err)=>console.log(err.message));
// mongoose.set('useFindAndModify', false); Commented-> as causing error

  