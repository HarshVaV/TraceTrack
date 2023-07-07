const mongoose= require('mongoose') ;

//schema for location-object
const locationSchema= new mongoose.Schema({
    location:String,
    date:Date,
    info:mongoose.Schema.Types.Object, 
            //dataType==Mixed -> number/name/dataType of fields can be flexible
  });


const personSchema = new mongoose.Schema({
  name: { type: String, required:  true },
  gender: { type: String, required:  true },
  age: { type: Number, required: true },
  selectedFile: String, // IMG/Video -> base64_String
  details: { type: String, required: true },
  status: { type: Number, required:true }, //0: missing-Person, 1:wanted-criminal
  lastUpdated:{type:Date, required:true},// Date-> milisec
  locations:[locationSchema] //array of object
});



module.exports=mongoose.model("Person", personSchema);