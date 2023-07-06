const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Multer configuration: boilerplate code to locally store Pic
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadDir = path.join(__dirname, '../uploads');
      fs.mkdirSync(uploadDir, { recursive: true }); // Create the uploads directory if it doesn't exist
      cb(null, uploadDir); // Specify the destination folder for uploaded files
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname); // Use the original filename for the uploaded file
    },
  });

const upload = multer({ storage });

// Function to convert the uploaded image to base64
const convertImageToBase64 = async (filePath) => {
    try {
      const data = fs.readFileSync(filePath);
      const mimeType = getMimeType(filePath);
      const base64 = `data:${mimeType};base64,${data.toString('base64')}`;
    //   console.log('base64:',base64.substring(0,100))
      return base64;
    } catch (error) {
      throw new Error('Error converting image to base64');
    }
  };
  
  const getMimeType = (filePath) => {
    const extension = filePath.split('.').pop().toLowerCase();
    const mimeTypeMap = {
      jpg: 'image/jpeg',
      jpeg: 'image/jpeg',
      png: 'image/png',
      gif: 'image/gif',
    };
    return mimeTypeMap[extension] || 'image/jpeg'; // Default to 'image/jpeg' if extension is not recognized
  };

module.exports = { 
  uploadMiddleware: upload.single("image"), 
  convertImageToBase64 
};
