const express = require('express');
const { uploadMiddleware } = require('../middleware/multer');
const {homeController} = require('../controllers');


const router = express.Router()

module.exports = function(io){
  router.get('/', (req, res) => {
    
    res.render('users/home');
  });

  router.route('/report')
    .get((req, res) => {
      res.render('users/report');
    })
    .post(uploadMiddleware,(req,res)=>homeController.verifyPerson(req,res,io)); // Pass the io object to homeController.verifyPerson

  return router;
};

// router.get("/",(req,res)=>{
//   res.render("users/home")
// })
// router.route("/report")
//   .get((req , res)=>{
//     res.render("users/report");
//   })
//   .post(uploadMiddleware, homeController.verifyPerson);

// module.exports = router;