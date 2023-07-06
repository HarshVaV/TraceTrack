const express = require('express');
const { uploadMiddleware } = require('../middleware/multer');
const {homeController} = require('../controllers/home-controller');


const router = express.Router()

router.route("/")
  .get((req , res)=>{
    res.render("home");
  })
  .post(uploadMiddleware, homeController);

// router.get('/', (req, res) => {
//   res.render('upload')
// })

// router.post('/', uploadMiddleware, homeController)

module.exports = router;