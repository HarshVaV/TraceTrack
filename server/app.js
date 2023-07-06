const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')

//import routers
const routes=require('./routes')


const app =express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//for parsing get/post request. limit=30mb-> as images will be send
    app.use(bodyParser.json({limit:"30mb",extended:true}));
    app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));

//redirect-to routes
    app.use('/',routes)

    

//MONGO-Atlas (cloub DB)
    const CONNECTION_URL='mongodb+srv://manavbansalhsr:DB9WRxGqGVwEm15I@cluster0.vrvngug.mongodb.net/'
    const PORT=2000;
    mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
        .then(()=>app.listen(PORT,()=>console.log(`Listening on Port ${PORT}`)))
        .catch((err)=>console.log(err.message));
    // mongoose.set('useFindAndModify', false); Commented-> as causing error

  