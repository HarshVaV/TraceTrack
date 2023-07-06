// const axios = require('axios');
// const mongoose = require('mongoose');
// const Person = require('../Models/person');

// const verifyFaceWithDatabase = async (imageBase64, location, info) => {
//   // Iterate through all persons in the database and compare their images
//   const persons = await Person.find();
//   for (const person of persons) {
//     const personImageBase64 = person.selectedFile;
//     // Call the face verification API for each pair of images
//     const response = await verifyFaces(imageBase64, personImageBase64);
//     // console.log(personImageBase64[0])
    
//     console.log('respone is Here',response)
//     if (response?.data?.data?.resultMessage === "The two faces belong to the same person. ") {
//       // Update the person object
//       person.lastUpdated = new Date();
//       person.locations.push({ location, date: new Date(), info });
      
//       console.log('Matched Found', person);
      
//       try {
//         // Save the updated person object
//         const updatedPerson = await person.save();
//         console.log('Person updated:', updatedPerson);
//         // return updatedPerson;
//       } catch (error) {
//         console.error('Error updating person:', error);
//         throw error;
//       }
//     }
    
//   }

//   console.log('No match found');
// };


// const verifyFaces = async (image1Base64, image2Base64) => {
//   const encodedParams = new URLSearchParams();
//   encodedParams.set('image1Base64', image1Base64);
//   encodedParams.set('image2Base64', image2Base64);

//   const options = {
//     method: 'POST',
//     url: 'https://face-verification2.p.rapidapi.com/faceverification',
//     headers: {
//       'content-type': 'application/x-www-form-urlencoded',
//       'X-RapidAPI-Key': '7a759c1befmsh0691376d05b5c3dp1a77dejsn1b5598151941',
//       'X-RapidAPI-Host': 'face-verification2.p.rapidapi.com'
//     },
//     data: encodedParams,
//   };

//   try {
//     const response = await axios.request(options);
//     // console.log(response.data.data);
//     return response
//   } catch (error) {
//     console.error(error);
//   }
// };

// module.exports = {
//   verifyFaceWithDatabase,
// };



const axios = require('axios');
const mongoose = require('mongoose');
const Person = require('../Models/person');

const verifyFaceWithDatabase = async (imageBase64, location, info) => {
  // Iterate through all persons in the database and compare their images
  const persons = await Person.find();
  for (const person of persons) {
    const personImageBase64 = person.selectedFile;
    // Call the face verification API for each pair of images
    const response = await verifyFaces(imageBase64, personImageBase64);
    // console.log(personImageBase64[0])
    
    console.log('respone is Here',response)
    if (response?.data?.data?.resultMessage === "The two faces belong to the same person. ") {
      // Update the person object
      person.lastUpdated = new Date();
      person.locations.push({ location, date: new Date(), info });
      
      console.log('Matched Found', person);
      
      try {
        // Save the updated person object
        const updatedPerson = await person.save();
        console.log('Person updated:', updatedPerson);
        // return updatedPerson;
      } catch (error) {
        console.error('Error updating person:', error);
        throw error;
      }
      return; //No-more checking
    }
    
  }

  console.log('No match found');
};


const verifyFaces = async (image1Base64, image2Base64) => {
  const encodedParams = new URLSearchParams();
  encodedParams.set('image1Base64', image1Base64);
  encodedParams.set('image2Base64', image2Base64);

  const options = {
    method: 'POST',
    url: 'https://face-verification2.p.rapidapi.com/faceverification',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': '7a759c1befmsh0691376d05b5c3dp1a77dejsn1b5598151941',
      'X-RapidAPI-Host': 'face-verification2.p.rapidapi.com'
    },
    data: encodedParams,
  };

  try {
    const response = await axios.request(options);
    // console.log(response.data.data);
    return response
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  verifyFaceWithDatabase,
};