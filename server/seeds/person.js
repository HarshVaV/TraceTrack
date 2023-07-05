const mongoose = require('mongoose');
const Person = require('../Models/person');
const {rahulImg, messiImg}=require('./personSeedHelper')

// Connecting to MongoDB
const CONNECTION_URL='mongodb+srv://btech1059820:7BFHgBE6u2P7jIqg@cluster0.lfhec1y.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})

// Deleting all previous data
const deleteData = async () => {
  try {
    await Person.deleteMany({});
    console.log('Previous data deleted.');
    seedData(); // Call the seedData function after deleting the previous data
  } catch (error) {
    console.error('Error deleting data:', error);
    process.exit(1);
  }
};

// create data-Object(s)
const rahulGandhi = {
  name: 'Rahul Gandhi',
  gender: 'Male',
  age: 51,
  selectedFile: rahulImg,
  details: 'Youth political leader. Last known location Congress office, New-Delhi',
  status: 0,//missing
  lastUpdated: new Date(),
  location: [] // Since we are not populating the location field
};

const leoMessi={
  name: 'Lionel Messi',
  gender: 'Male',
  age: 36,
  selectedFile: messiImg,
  details: 'Argentine professional footballer who plays as a forward for and captains the Argentina national team',
  status: 0,//missing
  lastUpdated: new Date(),
  location: [] // Since we are not populating the location field
};

//seedData (): save above object into DB
const seedData = async () => {
  try {
    

    //save + create dataSchema-object
      await Person.create(rahulGandhi); 
      await Person.create(leoMessi); 
    console.log('Seeding complete.');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

deleteData(); // Call the deleteData function to delete previous data
