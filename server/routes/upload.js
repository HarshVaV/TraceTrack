const express = require('express')
const { verifyFaceWithDatabase } = require('../api');
const { upload, convertImageToBase64 } = require('../middleware/multer');


const router = express.Router()

router.get('/', (req, res) => {
  res.render('upload')
})

router.post('/', upload.single('image'), async (req, res) => {
  const imagePath = req.file.path;

  try {
    // Convert the image to base64
    const imageBase64 = await convertImageToBase64(imagePath);
    // console.log(imageBase64.sub)

    const { name, info } = req.body;
    req.body.image = imageBase64;
    // Call the API logic from api.js to compare the image with the database
    verifyFaceWithDatabase(imageBase64, name, info);
    // console.log(req.body)

    // Send an instant response to the user
    res.send(imageBase64);
    // res.send('Thank You');
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
})




module.exports = router