const express = require('express');
const { uploadMiddleware } = require('../middleware/multer');
const {homeController} = require('../controllers');


const router = express.Router()
router.get("/",(req,res)=>{
  res.render("users/home")
})
router.route("/report")
  .get((req , res)=>{
    res.render("users/report");
  })
  .post(uploadMiddleware, homeController.verifyPerson);

module.exports = router;