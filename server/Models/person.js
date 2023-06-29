const mongoose= require('mongoose') ;

//schema for location-object
const locationSchema= new mongoose.Schema({
    name:String,
    date:Date,
    info:mongoose.Schema.Types.Mixed, 
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
  location:[locationSchema] //array of object
});

export default mongoose.model("Person", personSchema);