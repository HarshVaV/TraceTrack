const express = require('express');
const { uploadMiddleware } = require('../middleware/multer');
const {homeController} = require('../controllers');


const router = express.Router()

router.route("/")
  .get((req , res)=>{
    res.render("home");
  })
  .post(uploadMiddleware, homeController.verifyPerson);

module.exports = router;