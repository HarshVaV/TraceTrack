const { verifyFaceWithDatabase } = require('../api');
const { convertImageToBase64 } = require('../middleware/multer');

async function verifyPerson(req, res) {
    const imagePath = req.file.path;
  
    try {
      // Convert the image to base64
      const imageBase64 = await convertImageToBase64(imagePath);
      // console.log(imageBase64.sub)
  
      const { location, info } = req.body;
      req.body.image = imageBase64;
      // Call the API logic from api.js to compare the image with the database
      verifyFaceWithDatabase(imageBase64, location, info);
      // console.log(req.body)
  
      // Send an instant response to the user
      // res.send(imageBase64);
      res.send('Thank You');
    } catch (error) {
      console.error(error);
      return res.status(500).send('An error occurred');
    }
  };

module.exports = {
    verifyPerson
};