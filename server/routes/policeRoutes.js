const express = require("express");
const { policeController } = require("../controllers");
const { uploadMiddleware } = require("../middleware/multer");
const passport = require('passport');
const {isLoggedIn} = require("../middleware/index"); // Require the middleware file


const router = express.Router();

router.get("/" , policeController.getPersons);

router.get("/view/:id" , policeController.getPerson);


router.route("/edit/:id")
    .get(isLoggedIn, policeController.editPersonGet)
    .post(isLoggedIn, policeController.editPersonPost);

router.post("/delete/:id" , isLoggedIn, policeController.deletePerson);

router.route("/create")
    .get(isLoggedIn, (req , res)=>{
        res.render("create");
    })
    .post(isLoggedIn, uploadMiddleware , policeController.createPerson);

module.exports = router;
