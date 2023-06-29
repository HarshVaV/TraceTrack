const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')

//import routers
const uploadRoute=require('./routes/upload')


const app =express();

//for parsing get/post request. limit=30mb-> as images will be send
    app.use(bodyParser.json({limit:"30mb",extended:true}));
    app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));

//redirect-to routes
    app.use('/',uploadRoute)

    

//MONGO-Atlas (cloub DB)
    const CONNECTION_URL='mongodb+srv://btech1059820:7BFHgBE6u2P7jIqg@cluster0.lfhec1y.mongodb.net/?retryWrites=true&w=majority'
    const PORT=2000;
    mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
        .then(()=>app.listen(PORT,()=>console.log(`Listening on Port ${PORT}`)))
        .catch((err)=>console.log(err.message));
    // mongoose.set('useFindAndModify', false); Commented-> as causing error

  